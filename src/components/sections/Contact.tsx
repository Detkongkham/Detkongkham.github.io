import { useState } from 'react';
import { Check, Copy, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { useLang } from '@/i18n/LanguageContext';
import { profile } from '@/data/profile';
import { Section } from '@/components/ui/Section';
import { ButtonLink, buttonClass } from '@/components/ui/Button';

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={`mailto:${profile.email}`}>
            <Mail size={16} /> {profile.email}
          </ButtonLink>
          <button type="button" onClick={copyEmail} className={buttonClass('outline')}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
          <ButtonLink href={`tel:${profile.phone.replace(/\s/g, '')}`} variant="outline">
            <Phone size={16} /> {profile.phone}
          </ButtonLink>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={profile.socials.github} target="_blank" rel="noreferrer" variant="outline">
            <FaGithub size={16} /> GitHub
          </ButtonLink>
          {profile.socials.facebook && (
            <ButtonLink href={profile.socials.facebook} target="_blank" rel="noreferrer" variant="outline">
              <FaFacebook size={16} /> Facebook
            </ButtonLink>
          )}
          {profile.socials.whatsapp && (
            <ButtonLink href={profile.socials.whatsapp} target="_blank" rel="noreferrer" variant="outline">
              <FaWhatsapp size={16} /> WhatsApp
            </ButtonLink>
          )}
          {profile.socials.linkedin && (
            <ButtonLink href={profile.socials.linkedin} target="_blank" rel="noreferrer" variant="outline">
              <FaLinkedin size={16} /> LinkedIn
            </ButtonLink>
          )}
        </div>
      </div>
    </Section>
  );
}
