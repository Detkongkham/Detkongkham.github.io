import type { MouseEvent } from 'react';
import { ArrowDown, Download, GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { SiFlutter, SiNodedotjs, SiPostgresql, SiReact, SiTypescript } from 'react-icons/si';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { useLang } from '@/i18n/LanguageContext';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { ButtonLink } from '@/components/ui/Button';
import { CountUp } from '@/components/ui/CountUp';
import { TypingText } from '@/components/ui/TypingText';

/** ເທັກໂນໂລຢີໃນແຖບເລື່ອນ (ບໍ່ລວມພາສາທີ່ເວົ້າ) */
const techList = skillGroups.filter((g) => g.title.en !== 'Languages').flatMap((g) => g.items);

/** ປ້າຍລອຍອ້ອມຮູບ: ຕຳແໜ່ງ + ຈັງຫວະລອຍບໍ່ພ້ອມກັນ */
const chips = [
  { icon: SiReact, label: 'React', color: '#61dafb', pos: '-left-6 top-10 md:-left-14', delay: '0s' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178c6', pos: '-right-4 top-1/4 md:-right-12', delay: '1.2s' },
  { icon: SiFlutter, label: 'Flutter', color: '#02569b', pos: '-left-4 top-[55%] md:-left-16', delay: '2.4s' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#5fa04e', pos: '-right-6 bottom-24 md:-right-14', delay: '0.6s' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#4169e1', pos: 'right-6 -top-4', delay: '1.8s' },
];

const socials = [
  { href: profile.socials.github, label: 'GitHub', icon: FaGithub },
  { href: profile.socials.facebook, label: 'Facebook', icon: FaFacebook },
  { href: profile.socials.whatsapp, label: 'WhatsApp', icon: FaWhatsapp },
  { href: profile.socials.linkedin, label: 'LinkedIn', icon: FaLinkedin },
].filter((s): s is typeof s & { href: string } => Boolean(s.href));

export function Hero() {
  const { t, pick } = useLang();
  const reduce = useReducedMotion();

  // ຮູບອຽງຕາມເມົ້າແບບ 3D
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });

  function onTilt(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function resetTilt() {
    mx.set(0);
    my.set(0);
  }

  const stats = [
    { value: <CountUp to={projects.length} />, suffix: '', label: t.hero.stats.projects },
    { value: <CountUp to={techList.length} />, suffix: '+', label: t.hero.stats.tech },
    { value: '3.53', suffix: '', label: t.hero.stats.cgpa },
  ];

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: 'easeOut' as const },
        };

  return (
    // -mt-16 ໃຫ້ພື້ນຫຼັງ aurora ລອດໄປຢູ່ໃຕ້ Navbar ທີ່ໂປ່ງໃສ
    <div className="relative isolate -mt-16 overflow-hidden pt-16">
      {/* ພື້ນຫຼັງ: ຕາຕະລາງຈາງ + ແສງ aurora ສີຟ້າ */}
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="aurora" aria-hidden="true">
        <span className="-left-24 -top-24 size-[28rem] bg-accent" />
        <span className="right-[-6rem] top-24 size-[24rem] bg-accent-2 [animation-delay:-6s]" />
        <span className="bottom-[-8rem] left-1/3 size-[26rem] bg-accent-3 [animation-delay:-12s]" />
      </div>

      <section
        id="top"
        className="mx-auto grid max-w-5xl items-center gap-14 px-4 pb-12 pt-12 sm:px-6 md:grid-cols-[1fr_auto] md:pt-20"
      >
        <div>
          <motion.p
            {...fadeUp(0)}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-fg"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-70 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </motion.p>

          <motion.p {...fadeUp(0.05)} className="mt-6 text-muted">
            {t.hero.hello}
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="mt-2 text-4xl font-extrabold leading-[1.15] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{pick(profile.name)}</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-4 flex items-center gap-2 text-xl font-semibold sm:text-2xl">
            <Sparkles size={20} className="shrink-0 text-accent" aria-hidden="true" />
            <TypingText words={t.hero.roles} className="text-fg" />
          </motion.p>

          <motion.p {...fadeUp(0.3)} className="mt-5 max-w-xl leading-relaxed text-muted">
            {pick(profile.tagline)}
          </motion.p>

          <motion.p {...fadeUp(0.35)} className="mt-4 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} className="text-accent" aria-hidden="true" /> {pick(profile.location)}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.cv} download className="px-5 py-3">
              <Download size={16} /> {t.hero.downloadCv}
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline" className="px-5 py-3">
              <Mail size={16} /> {t.hero.contact}
            </ButtonLink>
          </motion.div>

          <motion.ul {...fadeUp(0.5)} className="mt-6 flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass grid size-11 place-items-center rounded-xl text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Icon size={19} />
                </a>
              </li>
            ))}
          </motion.ul>

          {/* ສະຖິຕິສັ້ນໆ */}
          <motion.dl {...fadeUp(0.6)} className="mt-10 grid max-w-md grid-cols-3 divide-x divide-border">
            {stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <dd className="text-2xl font-bold tabular-nums sm:text-3xl">
                  {s.value}
                  <span className="text-accent">{s.suffix}</span>
                </dd>
                <dt className="mt-1 text-xs leading-snug text-muted">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ຮູບຮັບປະລິນຍາ: ມືຖືຂຶ້ນກ່ອນຊື່ ເພື່ອໃຫ້ເຫັນໃບປະກາດເປັນອັນດັບທຳອິດ */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          onMouseMove={onTilt}
          onMouseLeave={resetTilt}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="relative order-first mx-auto w-60 sm:w-64 md:order-none md:w-80"
        >
          {/* ແສງເງົາຟ້າຢູ່ຫຼັງຮູບ */}
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/30 blur-3xl" aria-hidden="true" />

          <figure className="relative">
            <div className="conic-ring rounded-[1.75rem] p-[3px] shadow-2xl shadow-accent/30">
              <img
                src={profile.graduationPhoto}
                alt={`${pick(profile.name)} — ${t.hero.honors}`}
                width={320}
                height={480}
                fetchPriority="high"
                className="aspect-[2/3] w-full rounded-[1.6rem] object-cover"
              />
            </div>

            <figcaption className="glass absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg md:-left-10 md:right-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-accent to-accent-3 text-bg">
                <GraduationCap size={20} />
              </span>
              <span>
                <span className="block whitespace-nowrap text-sm font-semibold">{t.hero.honors}</span>
                <span className="hidden text-xs leading-snug text-muted sm:block">{t.hero.degree}</span>
              </span>
            </figcaption>
          </figure>

          {/* ປ້າຍເທັກໂນໂລຢີລອຍອ້ອມຮູບ */}
          {chips.map(({ icon: Icon, label, color, pos, delay }) => (
            <span
              key={label}
              aria-hidden="true"
              style={{ animationDelay: delay }}
              className={`glass animate-float absolute hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow-lg sm:flex ${pos}`}
            >
              <Icon size={14} style={{ color }} />
              {label}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ແຖບເລື່ອນເທັກໂນໂລຢີ: ປະດັບເທົ່ານັ້ນ, ລາຍການເຕັມຢູ່ສ່ວນ Skills */}
      <div className="marquee mx-auto max-w-5xl overflow-hidden px-4 py-6 sm:px-6" aria-hidden="true">
        <div className="marquee-track flex w-max gap-3">
          {[...techList, ...techList].map((tech, i) => (
            <span
              key={i}
              className="glass whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-muted transition hover:text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#projects"
        className="mx-auto mb-6 hidden w-fit flex-col items-center gap-2 text-xs text-muted transition hover:text-accent md:flex"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5" aria-hidden="true">
          <span className="animate-scroll-dot size-1 rounded-full bg-current" />
        </span>
        <span className="flex items-center gap-1">
          {t.hero.scroll} <ArrowDown size={12} aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}
