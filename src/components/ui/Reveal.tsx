import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Props = { children: ReactNode; delay?: number };

export function Reveal({ children, delay = 0 }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
