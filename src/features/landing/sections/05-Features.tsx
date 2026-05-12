const imgTopShot = 'https://www.figma.com/api/mcp/asset/9814916f-5a4f-48c5-a895-f93eb47e0fbd';
const imgCard1   = 'https://www.figma.com/api/mcp/asset/940ce698-14bb-4b08-a7e1-a043bdf5bc20';
const imgCard2   = 'https://www.figma.com/api/mcp/asset/f203c64c-de4c-475e-a32c-1a9a03b58c7d';

const MINI_FEATURES = [
  { title: 'Multi-leg orders',      body: 'Build complex positions in a single ticket.' },
  { title: 'Custom layouts',        body: 'Save your own screen setup for each market or strategy.' },
  { title: 'Watchlists and filters', body: 'See only the markets and pairs you care about.' },
  { title: 'Live chat',             body: 'Talk to traders watching the same market, in context.' },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect width="16" height="16" rx="4" fill="rgba(202,255,93,0.12)" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#CAFF5D" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Features() {
  return (
    <section className="rx-lsect">
      {/* Purple/magenta radial glow */}
      <div className="rx-lfeatures-glow" aria-hidden />

      <div className="rx-lsect-inner">

        {/* Gradient heading */}
        <div className="rx-lsect-head">
          <h2 className="rx-lfeatures-h2">Trading you'll actually enjoy</h2>
        </div>

        {/* Top terminal screenshot */}
        <div className="rx-lsect-shot">
          <div className="rx-lsect-shot-overlay rx-lsect-shot-overlay--top" aria-hidden />
          <div className="rx-lsect-shot-overlay rx-lsect-shot-overlay--left" aria-hidden />
          <img src={imgTopShot} alt="ReboundX Terminal trading interface" />
        </div>

        {/* Subtext */}
        <p className="rx-lfeatures-sub">
          Place orders in seconds, share trades in context, and chat with traders watching the same market as you.
        </p>

        {/* 4 mini features in 2×2 grid */}
        <div className="rx-lfeat-grid">
          {MINI_FEATURES.map(f => (
            <div key={f.title} className="rx-lfeat-item">
              <CheckIcon />
              <h4 className="rx-lfeat-h4">{f.title}</h4>
              <p className="rx-lfeat-body">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="rx-lfeat-divider" />

        {/* 2 large feature cards */}
        <div className="rx-lcards">
          <div className="rx-lcard">
            <div className="rx-lcard-text">
              <h3>Chart and book view</h3>
              <p>Switch between chart-focused and order book-focused layouts in one click.</p>
            </div>
            <div className="rx-lcard-img">
              <img src={imgCard1} alt="Chart and order book view" />
            </div>
          </div>
          <div className="rx-lcard">
            <div className="rx-lcard-text">
              <h3>Manage every position</h3>
              <p>Track entry, P&amp;L, and risk across all exchanges in one view.</p>
            </div>
            <div className="rx-lcard-img">
              <img src={imgCard2} alt="Position management" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
