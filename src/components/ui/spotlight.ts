import type { MouseEvent } from 'react';

/** ຕັ້ງ --mx, --my ໃຫ້ class .spotlight ເພື່ອໃຫ້ແສງຕາມເມົ້າ */
export function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
}
