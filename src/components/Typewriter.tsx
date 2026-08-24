import { useEffect, useState } from "react";

/** Types through a sequence of phrases, deleting each one before moving to the next. */
export function Typewriter({
  text,
  texts,
  speed = 55,
  pause = 1200,
}: {
  text?: string;
  texts?: string[];
  speed?: number;
  pause?: number;
}) {
  const sequence = texts && texts.length > 0 ? texts : [text ?? ""];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = sequence[phraseIndex % sequence.length];

    if (!isDeleting && display === current) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && display === "") {
      setIsDeleting(false);
      setPhraseIndex((idx) => (idx + 1) % sequence.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplay((prev) => {
        if (isDeleting) {
          return current.slice(0, Math.max(0, prev.length - 1));
        }

        return current.slice(0, Math.min(current.length, prev.length + 1));
      });
    }, isDeleting ? Math.max(22, speed / 1.7) : speed);

    return () => clearTimeout(timeout);
  }, [display, isDeleting, pause, phraseIndex, sequence, speed]);

  return (
    <span className="inline-block max-w-full whitespace-normal text-primary">
      {display}
      <span className="hd-caret ml-0.5 inline-block h-[0.82em] w-[3px] translate-y-[0.08em] bg-primary align-middle" />
    </span>
  );
}
