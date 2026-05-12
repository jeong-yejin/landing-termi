const EXCHANGES = [
  { alt: 'Bybit',   src: '/guide/logos/bybit.svg'   },
  { alt: 'OKX',     src: '/guide/logos/okx.svg'     },
  { alt: 'Binance', src: '/guide/logos/binance.svg' },
];

export default function Bento() {
  return (
    <section className="rx-lsect rx-lsect--bento">
      <div className="rx-lsect-inner">

        <div className="rx-lsect-head">
          <h2>Unlike any terminal<br />you've used before</h2>
          <p>Designed to the last pixel and built around real-time conversation, ReboundX Terminal combines a clean trading interface with a live community of traders.</p>
        </div>

        <div className="rx-lbento">

          {/* Top-left: multiple exchanges */}
          <div className="rx-lbento-card">
            <h3>Built for multiple exchanges</h3>
            <p>Trade Bybit, OKX, and Binance from a single screen. One login, one workflow.</p>
            <div className="rx-lbento-logos" aria-hidden>
              {EXCHANGES.map(e => (
                <img key={e.alt} src={e.src} alt={e.alt} className="rx-lbento-exlogo" />
              ))}
            </div>
          </div>

          {/* Top-right: speed */}
          <div className="rx-lbento-card">
            <h3>Built for speed</h3>
            <p>Real-time order execution and market sync.</p>
            <div className="rx-lbento-speed" aria-hidden>
              <div className="rx-lbento-speed-ring" />
              <div className="rx-lbento-speed-ring rx-lbento-speed-ring--2" />
              <div className="rx-lbento-speed-ring rx-lbento-speed-ring--3" />
              <span className="rx-lbento-speed-label">&lt;50ms</span>
            </div>
          </div>

          {/* Bottom-left: designed for traders */}
          <div className="rx-lbento-card">
            <h3>Designed for active traders</h3>
            <p>Built-in layouts that keep you focused across multiple markets.</p>
            <div className="rx-lbento-layout-mock" aria-hidden>
              <div className="rx-lbento-layout-row">
                <div className="rx-lbento-layout-pane rx-lbento-layout-pane--chart" />
                <div className="rx-lbento-layout-pane rx-lbento-layout-pane--order" />
              </div>
              <div className="rx-lbento-layout-row rx-lbento-layout-row--sm">
                <div className="rx-lbento-layout-pane" />
                <div className="rx-lbento-layout-pane rx-lbento-layout-pane--lime" />
                <div className="rx-lbento-layout-pane" />
              </div>
            </div>
          </div>

          {/* Bottom-right: one screen every action */}
          <div className="rx-lbento-card">
            <h3>One screen, every action</h3>
            <p>Charts, order books, positions, and chat — all reachable without switching tabs.</p>
            <div className="rx-lbento-cmd">
              <div className="rx-lbento-cmd-input">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M9 9L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span>BTCUSDT</span>
              </div>
              {[
                { label: 'Market order',     active: false },
                { label: 'Limit sell…',      active: true  },
                { label: 'Set stop loss…',   active: false },
                { label: 'View positions',   active: false },
              ].map(item => (
                <div key={item.label} className={`rx-lbento-cmd-item${item.active ? ' active' : ''}`}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
