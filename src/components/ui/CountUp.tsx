import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

/** ນັບເລກຂຶ້ນຈາກ 0 ເມື່ອເລື່ອນມາເຫັນ; screen reader ອ່ານຄ່າສຸດທ້າຍເລີຍ */
export function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, { duration: 1.2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{reduce ? to : n}</span>
      <span className="sr-only">{to}</span>
    </span>
  );
}
