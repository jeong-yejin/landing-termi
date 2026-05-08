import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import { useCountUp } from '@/shared/hooks/useCountUp';
import { stats } from '@/features/landing/data/stats';
import type { Stat } from '@/features/landing/data/types';

function StatCell({ stat }: { stat: Stat }) {
  const { formatted, ref } = useCountUp(stat.target, stat.decimals);
  return (
    <div className="stat" ref={ref}>
      <div className="label">{stat.label}</div>
      <div className={`value mono${stat.accent ? ' accent' : ''}`}>
        {stat.prefix}
        <span>{formatted}</span>
        {stat.unit && <span className="unit">{stat.unit}</span>}
        {stat.suffix}
      </div>
    </div>
  );
}

export default function Stats() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid reveal-stagger" ref={revealRef}>
          {stats.map((s) => (
            <StatCell key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
