// ໜ້າທົດສອບຊົ່ວຄາວ: ຈະແທນທີ່ໃນຂັ້ນ 7
import { LanguageProvider, useLang } from '@/i18n/LanguageContext';
import { useTheme } from '@/hooks/useTheme';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

function Preview() {
  const { lang, setLang, t, pick } = useLang();
  const { theme, toggle } = useTheme();

  return (
    <main className="mx-auto max-w-2xl space-y-4 p-8">
      <div className="flex gap-2">
        <button className="rounded-lg border border-border px-3 py-1" onClick={() => setLang(lang === 'en' ? 'lo' : 'en')}>
          {lang === 'en' ? 'ລາວ' : 'EN'}
        </button>
        <button className="rounded-lg border border-border px-3 py-1" onClick={toggle}>
          {theme}
        </button>
      </div>
      <p className="text-muted">{t.hero.hello}</p>
      <h1 className="text-3xl font-bold">{pick(profile.name)}</h1>
      <p className="text-accent">{profile.role}</p>
      <div className="rounded-2xl border border-border bg-surface p-5">
        <h2 className="font-semibold">{projects[0].title}</h2>
        <p className="mt-2 text-muted">{pick(projects[0].summary)}</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Preview />
    </LanguageProvider>
  );
}
