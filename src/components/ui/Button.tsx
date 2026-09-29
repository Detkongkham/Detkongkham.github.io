import type { AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'soft';

/** ໃຊ້ຮ່ວມກັບ <button> ທຳມະດາໄດ້ນຳ */
export function buttonClass(variant: Variant = 'primary') {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
  const styles = {
    primary:
      'btn-shine bg-linear-to-r from-accent to-accent-3 text-bg shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-accent/40',
    outline: 'glass hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent',
    soft: 'border border-accent/30 bg-accent-soft text-accent hover:border-accent/60',
  }[variant];
  return `${base} ${styles}`;
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant };

export function ButtonLink({ variant = 'primary', className = '', ...rest }: Props) {
  return <a className={`${buttonClass(variant)} ${className}`} {...rest} />;
}
