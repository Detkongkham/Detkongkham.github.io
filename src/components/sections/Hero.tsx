import { Download, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { useLang } from '@/i18n/LanguageContext';
import { profile } from '@/data/profile';
import { ButtonLink } from '@/components/ui/Button';

export function Hero() {
  const { t, pick } = useLang();

  return (
    <section
      id="top"
      className="mx-auto grid max-w-5xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1fr_auto] md:pt-24"
    >
      <div>
        <p className="text-muted">{t.hero.hello}</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">{pick(profile.name)}</h1>
        <p className="mt-3 text-xl font-medium text-accent">{profile.role}</p>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">{pick(profile.tagline)}</p>

        <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} /> {pick(profile.location)}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={profile.cv} download>
            <Download size={16} /> {t.hero.downloadCv}
          </ButtonLink>
          <ButtonLink href="#contact" variant="outline">
            <Mail size={16} /> {t.hero.contact}
          </ButtonLink>
        </div>

        <div className="mt-6 flex gap-4 text-muted">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-fg">
            <FaGithub size={22} />
          </a>
          {profile.socials.facebook && (
            <a href={profile.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:text-fg">
              <FaFacebook size={22} />
            </a>
          )}
          {profile.socials.whatsapp && (
            <a href={profile.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition hover:text-fg">
              <FaWhatsapp size={22} />
            </a>
          )}
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-fg">
              <FaLinkedin size={22} />
            </a>
          )}
        </div>
      </div>

      <img
        src={profile.photo}
        alt={pick(profile.name)}
        width={240}
        height={240}
        className="mx-auto size-48 rounded-2xl object-cover ring-1 ring-border md:size-60"
      />
    </section>
  );
}
