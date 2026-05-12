const FEATURES = [
  { title: 'Multi-chart sync', body: 'Track up to 3 markets side by side, fully synced.' },
  { title: 'Live order flow', body: 'See real-time order book and trade history on every chart.' },
  { title: 'Price timeline', body: 'See key levels and past trades on a single view.' },
  { title: 'Market insights', body: 'Track volume, volatility, and sentiment over time.' },
];

const CARDS = [
  {
    title: 'Market updates',
    body: 'Stay on top of price moves, news, and sentiment shifts in real time.',
    img: '/guide/Asset/Step-2.webp',
  },
  {
    title: 'See the full market',
    body: 'View every position, order, and alert in one screen to spot what needs action.',
    img: '/guide/Asset/Step-4.webp',
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect width="16" height="16" rx="4" fill="rgba(202,255,93,0.12)" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#CAFF5D" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Watchlists() {
  return (
    <section className="rx-lsect">
      <div className="rx-lsect-inner">

        <div className="rx-lsect-head">
          <h2>Stay in control with Watchlists</h2>
          <p>Follow top traders, join market discussions, and make better decisions with shared insights and live sentiment.</p>
        </div>

        <div className="rx-lsect-shot">
          <div className="rx-lsect-shot-overlay rx-lsect-shot-overlay--top"  aria-hidden />
          <div className="rx-lsect-shot-overlay rx-lsect-shot-overlay--left" aria-hidden />
          <img src="/guide/Asset/Step-4.webp" alt="Watchlists view" />
        </div>

        <div className="rx-lfeat-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="rx-lfeat-item">
              <CheckIcon />
              <h4 className="rx-lfeat-h4">{f.title}</h4>
              <p className="rx-lfeat-body">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="rx-lfeat-divider" />

        <div className="rx-lcards">
          {CARDS.map(c => (
            <div key={c.title} className="rx-lcard">
              <div className="rx-lcard-text">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
              <div className="rx-lcard-img">
                <img src={c.img} alt={c.title} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
