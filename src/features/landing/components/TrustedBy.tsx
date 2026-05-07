import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import { exchanges } from '@/features/landing/data/content';

export default function TrustedBy() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="trusted">
      <div className="container">
        <div className="trusted-label">Connects where you already trade · 18 venues</div>
        <div className="trusted-logos reveal-stagger" ref={ref}>
          {exchanges.map((name) => (
            <div key={name} className="logo-cell">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
