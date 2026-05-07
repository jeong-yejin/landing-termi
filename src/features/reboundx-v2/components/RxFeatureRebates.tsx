const rebateBars = [40, 52, 38, 64, 71, 58, 82, 70, 88, 76, 94, 100];

const venues = [
  { name: 'Binance', pct: '0.012%', meter: 78 },
  { name: 'Bybit', pct: '0.018%', meter: 64 },
  { name: 'OKX', pct: '0.015%', meter: 52 },
  { name: 'Hyperliquid', pct: '0.020%', meter: 88 },
];

export default function RxFeatureRebates() {
  return (
    <section className="rx-feat" id="rebates" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(202,255,93,0.02) 50%, transparent 100%)' }}>
      <div className="rx-container">
        <div className="rx-feat-grid">
          <div className="rx-feat-text">
            <span className="tag"><span className="num">05</span> Rebates engine</span>
            <h3>Get paid on every trade. <span style={{ color: 'var(--rx-lime)' }}>Automatically.</span></h3>
            <p>
              ReboundX returns a portion of every fee paid back to your account.
              No claims. No forms. No referral codes. Just trade — the rebate accrues.
            </p>
            <div className="rx-feat-bullets">
              <div className="b"><span className="check">✓</span> Per-venue rebate rates published in real time</div>
              <div className="b"><span className="check">✓</span> Daily settlement to your exchange wallet</div>
              <div className="b"><span className="check">✓</span> Tier boosts for Pro &amp; high-volume traders</div>
            </div>
          </div>

          <div className="rx-feat-vis">
            <div className="rx-rebate-vis">
              <div className="rx-rebate-big">
                <div className="label">Rebated · last 30 days</div>
                <div className="num">+$1,247.20</div>
                <div className="sub">across 4 venues · 1,842 trades</div>
              </div>

              <div className="rx-rebate-bars">
                {rebateBars.map((h, i) => (
                  <div key={i} className={`bar ${i === rebateBars.length - 1 ? 'peak' : ''}`} style={{ height: `${h}%` }} />
                ))}
              </div>

              <div className="rx-rebate-list">
                {venues.map(v => (
                  <div className="row" key={v.name}>
                    <span className="name">{v.name}</span>
                    <span className="meter"><span style={{ width: `${v.meter}%` }} /></span>
                    <span className="pct">{v.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
