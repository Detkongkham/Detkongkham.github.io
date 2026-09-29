import type { AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'soft';

/** ໃຊ້ຮ່ວມກັບ <button> ທຳມະດາໄດ້ນຳ */
export function buttonClass(variant: Variant = 'primary') {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
  const styles = {
    primary: 'bg-accent text-bg hover:opacity-90',
    outline: 'border border-border hover:bg-surface',
    soft: 'border border-accent/30 bg-accent-soft text-accent hover:border-accent/60',
  }[variant];
  return `${base} ${styles}`;
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant };

export function ButtonLink({ variant = 'primary', className = '', ...rest }: Props) {
  return <a className={`${buttonClass(variant)} ${className}`} {...rest} />;
}
