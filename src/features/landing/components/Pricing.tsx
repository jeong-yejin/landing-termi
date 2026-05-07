import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { Check } from '@/shared/ui/icons/LandingIcons';
import { tiers } from '@/features/landing/data/content';

export default function Pricing() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section className="tiers-section" id="tiers">
      <div className="container">
        <SectionHeader
          eyebrow="Tiers"
          title={<>Your monthly volume sets your <em>rebate.</em></>}
          lead="No subscription. No minimums. The terminal is free — we earn from rebate-share with partner exchanges, and you keep most of it."
        />
        <div className="tiers-grid reveal-stagger" ref={ref}>
          {tiers.map((t) => (
            <div className={`tier${t.popular ? ' popular' : ''}`} key={t.name}>
              {t.popular && <span className="tier-badge">Most popular</span>}
              <div className="name">{t.name}</div>
              <div className="pct">{t.pct}<span className="u">%</span></div>
              <div className="vol">{t.vol}</div>
              <div className="div" />
              <ul className="feats">
                {t.features.map((f) => (
                  <li key={f}>
                    <Check />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
