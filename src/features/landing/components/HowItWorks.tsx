import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { StepPlus, StepChart, StepDownload } from '@/shared/ui/icons/LandingIcons';
import { steps } from '@/features/landing/data/content';

const ICONS = {
  plus: StepPlus,
  chart: StepChart,
  download: StepDownload,
} as const;

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section className="how" id="how">
      <div className="container">
        <SectionHeader
          eyebrow="Rebates"
          title={<>Three steps. Up to 50% <em>back.</em></>}
          lead="ReboundX shares the rebate the exchange already pays for your volume — paid back to you in stablecoin, every Friday."
        />
        <div className="how-steps reveal-stagger" ref={ref}>
          {steps.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div className="step-card" key={s.num}>
                <div className="num">{s.num}</div>
                <div className="icon"><Icon /></div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
