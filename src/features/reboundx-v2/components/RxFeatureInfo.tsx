import { Sparkline } from './RxIcons';

export default function RxFeatureInfo() {
  return (
    <section className="rx-feat">
      <div className="rx-container">
        <div className="rx-feat-grid reverse">
          <div className="rx-feat-text" style={{ marginLeft: 'auto' }}>
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
              <div className="rx-info-card">
                <h6>Funding 8h · BTC</h6>
                <div className="big up">+0.012%</div>
                <div className="delta">+4.2 bps vs 24h</div>
                <Sparkline trend="up" />
              </div>
              <div className="rx-info-card">
                <h6>Open interest · BTC</h6>
                <div className="big">$24.8B</div>
                <div className="delta">+8.4% · 24h</div>
                <Sparkline trend="up" />
              </div>
              <div className="rx-info-card">
                <h6>Vol delta · ETH</h6>
                <div className="big lime">+62%</div>
                <div className="delta">vs 7d avg</div>
                <Sparkline trend="up" />
              </div>
              <div className="rx-info-card">
                <h6>Cross-venue spread</h6>
                <div className="big">0.20</div>
                <div className="delta dn">-12% · narrowing</div>
                <Sparkline trend="dn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
