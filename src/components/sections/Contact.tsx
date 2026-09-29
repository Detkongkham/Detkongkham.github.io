import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { ArrowUpRight, Check, Clock, Copy, Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLang } from '@/i18n/LanguageContext';
import { profile } from '@/data/profile';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { trackSpotlight } from '@/components/ui/spotlight';

type Method = {
  key: string;
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ size?: number }>;
  external?: boolean;
};

/** ເວລາປັດຈຸບັນທີ່ວຽງຈັນ, ອັບເດດທຸກ 30 ວິນາທີ */
function useVientianeTime(locale: string) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Vientiane' }).format(now);
}

export function Contact() {
  const { t, pick, lang } = useLang();
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const time = useVientianeTime(lang === 'lo' ? 'lo-LA' : 'en-GB');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const methods: Method[] = [
    { key: 'email', label: t.contact.email, value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { key: 'phone', label: t.contact.phone, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
    ...(profile.socials.whatsapp
      ? [{ key: 'whatsapp', label: 'WhatsApp', value: profile.phone, href: profile.socials.whatsapp, icon: FaWhatsapp, external: true }]
      : []),
    { key: 'github', label: 'GitHub', value: `@${profile.socials.github.split('/').pop()}`, href: profile.socials.github, icon: FaGithub, external: true },
    ...(profile.socials.facebook
      ? [{ key: 'facebook', label: 'Facebook', value: pick(profile.name), href: profile.socials.facebook, icon: FaFacebook, external: true }]
      : []),
    ...(profile.socials.linkedin
      ? [{ key: 'linkedin', label: 'LinkedIn', value: pick(profile.name), href: profile.socials.linkedin, icon: FaLinkedin, external: true }]
      : []),
  ];

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} gradientTitle>
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 shadow-2xl shadow-accent/10 max-sm:p-5 sm:p-10">
          {/* ພື້ນຫຼັງ: aurora ນ້ອຍ + ຕາຕະລາງຈາງ */}
          <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
          <div className="aurora" aria-hidden="true">
            <span className="-right-20 -top-20 size-80 bg-accent" />
            <span className="-bottom-24 -left-16 size-72 bg-accent-3 [animation-delay:-9s]" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:gap-12">
            {/* ຊ້າຍ: ຂໍ້ຄວາມຊວນລົມ + ໂປຣໄຟລ໌ */}
            <div className="flex min-w-0 flex-col">
              <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl">
                <span className="text-gradient">{t.contact.heading}</span>
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-muted">{t.contact.subtitle}</p>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="conic-ring rounded-full p-[2px]">
                    <img
                      src={profile.photo}
                      alt={pick(profile.name)}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="size-16 rounded-full object-cover object-[center_30%] ring-2 ring-bg"
                    />
                  </div>
                  <span
                    className="absolute bottom-0.5 right-0.5 size-4 rounded-full bg-emerald-500 ring-[3px] ring-bg"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold">{pick(profile.name)}</p>
                  <p className="text-sm text-muted">{profile.role}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                    <MapPin size={12} className="text-accent" aria-hidden="true" /> {pick(profile.location)}
                  </p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 text-xs font-medium">
                <li className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-700 dark:text-emerald-400">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-70 motion-safe:animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  {t.contact.available}
                </li>
                <li className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5">
                  <Clock size={13} className="text-accent" aria-hidden="true" />
                  <span className="text-muted">{t.contact.localTime}</span>
                  <time className="tabular-nums">{time}</time>
                  <span className="text-muted">(GMT+7)</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3 md:mt-auto md:pt-8">
                <ButtonLink href={`mailto:${profile.email}`} className="px-5 py-3">
                  <Send size={16} /> {t.contact.sendEmail}
                </ButtonLink>
                <ButtonLink href={profile.cv} download variant="outline" className="px-5 py-3">
                  <Download size={16} /> {t.hero.downloadCv}
                </ButtonLink>
              </div>
            </div>

            {/* ຂວາ: ຊ່ອງທາງຕິດຕໍ່ */}
            <ul className="grid min-w-0 grid-cols-1 content-start gap-3">
              {methods.map(({ key, label, value, href, icon: Icon, external }, i) => (
                <motion.li
                  key={key}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                  className="relative"
                >
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    onMouseMove={trackSpotlight}
                    className="spotlight glass group flex min-h-16 items-center gap-4 rounded-2xl p-3 pr-14 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition group-hover:bg-linear-to-br group-hover:from-accent group-hover:to-accent-3 group-hover:text-bg">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{label}</span>
                      <span className="block truncate text-sm font-medium sm:text-base">{value}</span>
                    </span>
                    {key !== 'email' && (
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="absolute right-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    )}
                  </a>

                  {/* ປຸ່ມສຳເນົາຢູ່ນອກ <a> ເພື່ອບໍ່ໃຫ້ຊ້ອນ element ທີ່ກົດໄດ້ */}
                  {key === 'email' && (
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={copied ? t.contact.copied : t.contact.copy}
                      title={copied ? t.contact.copied : t.contact.copy}
                      className="absolute right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-xl text-muted transition hover:bg-accent-soft hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* ແຈ້ງເຕືອນຕອນສຳເນົາອີເມວ */}
      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
        <AnimatePresence>
          {copied && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-xl"
            >
              <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-white">
                <Check size={12} />
              </span>
              {t.contact.copiedToast}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
