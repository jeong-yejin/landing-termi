const objections = [
  {
    q: 'Is it custodial?',
    a: 'No. ReboundX uses read-only API + locally signed orders. Your keys never leave your machine, and we cannot move funds.',
  },
  {
    q: 'How fast is it?',
    a: 'Direct websocket per venue. Sub-50ms median order roundtrip from keypress to fill — measured across 8 exchanges.',
  },
  {
    q: 'Which exchanges?',
    a: '12 live today: Binance, Bybit, OKX, Bitget, Coinbase, Kraken, Hyperliquid, dYdX, GMX, Drift, Vertex, Jupiter. New venues monthly.',
  },
  {
    q: 'How much does it cost?',
    a: 'Free for individuals. Pro tier ($19/mo) unlocks multi-account + automation. Rebates fund the platform.',
  },
];

export default function RxObjections() {
  return (
    <section className="rx-obj">
      <div className="rx-container">
        <div className="rx-eyebrow">
          <span className="tag">Common questions, answered fast</span>
          <h2>Skim these. Then trade.</h2>
          <p>The four things every trader checks before downloading a new terminal.</p>
        </div>

        <div className="rx-obj-grid">
          {objections.map(o => (
            <div key={o.q} className="rx-obj-card">
              <div className="q">{o.q}</div>
              <p className="a">{o.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
