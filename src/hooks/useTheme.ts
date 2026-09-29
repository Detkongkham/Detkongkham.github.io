import { useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  // script ໃນ index.html ໃສ່ class ໄວ້ແລ້ວ, ຈຶ່ງອ່ານຄ່າເລີ່ມຕົ້ນຈາກ <html>
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  );

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      // private mode: ບໍ່ຈື່ຄ່າ ແຕ່ຍັງປ່ຽນໄດ້
    }
    setTheme(next);
  }

  return { theme, toggle };
}
