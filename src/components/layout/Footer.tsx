import { useLang } from '@/i18n/LanguageContext';
import { profile } from '@/data/profile';

export function Footer() {
  const { t, pick } = useLang();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {pick(profile.name)}</p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
