import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

/** ພິມຂໍ້ຄວາມທີລະຕົວ ແລ້ວລຶບ ວົນໄປເລື້ອຍໆ; screen reader ອ່ານທຸກຄຳໃນເທື່ອດຽວ */
export function TypingText({ words, className = '' }: { words: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const empty = deleting && text === '';

    const id = setTimeout(
      () => {
        if (done) setDeleting(true);
        else if (empty) {
          setDeleting(false);
          setIndex((i) => i + 1);
        } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      },
      done ? 1800 : empty ? 300 : deleting ? 40 : 80,
    );
    return () => clearTimeout(id);
  }, [text, deleting, index, words, reduce]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className={reduce ? '' : 'caret'}>
        {reduce ? words[0] : text}
      </span>
    </span>
  );
}
