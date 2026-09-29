import type { ReactNode } from 'react';

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
