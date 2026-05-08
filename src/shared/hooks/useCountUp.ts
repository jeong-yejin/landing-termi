import { useEffect, useRef, useState } from 'react';

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function useCountUp(target: number, decimals = 0, duration = 1400) {
  const [value, setValue] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    // Reset so a target change re-triggers the animation.
    // Without this, started.current stays true and the new
    // IntersectionObserver callback bails out immediately.
    started.current = false;
    setValue(0);

    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              setValue(target * easeOut(t));
              if (t < 1) requestAnimationFrame(tick);
              else setValue(target);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  const formatted =
    decimals === 0 && target >= 1000
      ? Math.round(value).toLocaleString()
      : value.toFixed(decimals);

  return { value, formatted, ref: containerRef };
}
