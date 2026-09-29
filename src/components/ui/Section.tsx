import type { ReactNode } from 'react';

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  /** ຂໍ້ຄວາມນ້ອຍເໜືອຫົວຂໍ້ */
  eyebrow?: string;
  /** ເນື້ອຫາເບື້ອງຂວາຂອງຫົວຂໍ້ (ຈໍໃຫຍ່) ເຊັ່ນ ສະຖິຕິ */
  aside?: ReactNode;
  /** ຫົວຂໍ້ເປັນຕົວໜັງສືໄລ່ສີ accent */
  gradientTitle?: boolean;
  children: ReactNode;
};

export function Section({ id, title, subtitle, eyebrow, aside, gradientTitle = false, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {eyebrow}
            </p>
          )}
          <h2
            className={`text-2xl font-semibold sm:text-3xl ${
              gradientTitle ? 'bg-linear-to-r from-accent to-accent-2 bg-clip-text pb-1 font-bold text-transparent' : ''
            }`}
          >
            {title}
          </h2>
          {subtitle && <p className="mt-2 max-w-2xl text-muted">{subtitle}</p>}
        </div>
        {aside}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
