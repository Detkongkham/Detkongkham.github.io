import type { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}
