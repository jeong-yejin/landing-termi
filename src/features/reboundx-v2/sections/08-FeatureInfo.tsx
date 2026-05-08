import { infoCards } from '../data/features';
import { Sparkline } from '../ui/Icons';

export default function FeatureInfo() {
  return (
    <section className="rx-feat">
      <div className="rx-container">
        <div className="rx-feat-grid reverse">
          <div className="rx-feat-text rx-feat-text--end">
            <span className="tag"><span className="num">04</span> Information density</span>
            <h3>Only what moves the decision.</h3>
            <p>
              Funding rates, open interest, volume deltas, exchange-level discrepancies —
              surfaced in the cell that needs them. No tab graveyards.
            </p>
            <div className="rx-feat-bullets">
              <div className="b"><span className="check">✓</span> Funding-rate matrix across all perp venues</div>
              <div className="b"><span className="check">✓</span> OI delta + liquidation feed in context</div>
              <div className="b"><span className="check">✓</span> Customizable layout — only what you actually use</div>
            </div>
          </div>

          <div className="rx-feat-vis">
            <div className="rx-info-grid">
              {infoCards.map(card => (
                <div key={card.title} className="rx-info-card">
                  <h6>{card.title}</h6>
                  <div className={`big ${card.trend === 'up' ? 'up' : ''}`}>{card.value}</div>
                  <div className={`delta ${card.deltaClass ?? ''}`}>{card.delta}</div>
                  <Sparkline trend={card.trend} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
