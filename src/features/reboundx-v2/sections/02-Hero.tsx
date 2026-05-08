import { ArrowRight, Apple, Play } from '../ui/Icons';
import LaserFlow from '../ui/LaserFlow/LaserFlow';
import {
  heroExchanges,
  askLevels,
  bidLevels,
  compareRows,
  openPositions,
} from '../data/hero';

type CSSWithDepth = React.CSSProperties & { '--depth': string };

export default function Hero() {
  return (
    <section className="rx-hero">
      <div className="rx-hero-laser">
        <LaserFlow color="#CAFF5D" />
      </div>
      <div className="rx-hero-grid" />
      <div className="rx-container">
        <div className="rx-hero-content">
          <span className="rx-hero-eyebrow">
            <span className="dot" />
            Multi-exchange trading terminal
          </span>
          <h1>Every market, <span className="accent">one terminal.</span></h1>
          <p className="rx-hero-sub">
            ReboundX unifies fragmented exchanges into a single workspace —<br />
            and pays you back on every trade.
          </p>
          <div className="rx-hero-cta">
            <a href="#download" className="rx-btn-primary">
              <Apple /> Download — free
            </a>
            <a href="#demo" className="rx-btn-ghost">
              <Play /> Watch a 90-second demo <ArrowRight width={11} height={11} />
            </a>
          </div>
          <div className="rx-hero-trust">
            <span>Self-custody</span>
            <span className="sep">·</span>
            <span>12 exchanges live</span>
            <span className="sep">·</span>
            <span>$8.2M rebated to date</span>
          </div>
        </div>

        {/* Mac frame trading terminal */}
        <div className="rx-mac">
          <div className="rx-mac-bar">
            <span className="dots">
              <span className="dot r" /><span className="dot y" /><span className="dot g" />
            </span>
            <span className="title">reboundx — terminal · BTC-USD</span>
            <span className="ctrl">⌘K</span>
          </div>

          <div className="rx-term">
            {/* Left rail: connected exchanges */}
            <aside className="rx-term-rail">
              <h6>Connected · 8</h6>
              {heroExchanges.map(e => (
                <div key={e.code} className={`item ${e.active ? 'active' : ''}`}>
                  <span className="ico">{e.code}</span>
                  <span className="grow">{e.name}</span>
                  <span className="meta">{e.vol}</span>
                </div>
              ))}
            </aside>

            {/* Main panel */}
            <div className="rx-term-main">
              <div className="rx-term-main-head">
                <div className="rx-term-symbol">
                  <span className="ticker">BTC-USD</span>
                  <span className="price">67,140.10</span>
                  <span className="delta up">+1.42%</span>
                </div>
                <span className="rx-pill"><span className="dot" /> Live · 8 venues</span>
              </div>

              <div className="rx-term-row">
                {/* Order book */}
                <div className="rx-term-card">
                  <div className="rx-term-card-head">
                    <span>Order book</span>
                    <span>Hyperliquid</span>
                  </div>
                  <div className="rx-book">
                    {askLevels.slice().reverse().map((a, i) => (
                      <div
                        key={`ask-${i}`}
                        className="ask"
                        style={{ '--depth': `${100 - a.d}%` } as CSSWithDepth}
                      >
                        <span>{a.px}</span>
                        <span className="center">{a.sz}</span>
                        <span className="right">{a.total}</span>
                      </div>
                    ))}
                    <div className="mid">
                      <span>67,138.95</span>
                      <span className="spread">spread 0.20</span>
                    </div>
                    {bidLevels.map((b, i) => (
                      <div
                        key={`bid-${i}`}
                        className="bid"
                        style={{ '--depth': `${100 - b.d}%` } as CSSWithDepth}
                      >
                        <span>{b.px}</span>
                        <span className="center">{b.sz}</span>
                        <span className="right">{b.total}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cross-venue compare */}
                <div className="rx-term-card">
                  <div className="rx-term-card-head">
                    <span>Cross-venue</span>
                    <span>BTC perp</span>
                  </div>
                  <div className="rx-compare">
                    <div className="rx-compare-row head">
                      <span>Venue</span>
                      <span>Mark</span>
                      <span>Spread</span>
                      <span className="right">Route</span>
                    </div>
                    {compareRows.map(r => (
                      <div key={r.ex} className={`rx-compare-row ${r.best ? 'best' : ''}`}>
                        <span className="ex"><span className="swatch" />{r.ex}</span>
                        <span>{r.px}</span>
                        <span>{r.spr}</span>
                        <span
                          className="right"
                          style={{ color: r.best ? 'var(--rx-lime)' : 'var(--rx-text-dim)' }}
                        >
                          {r.best ? '◉' : '○'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right rail: rebate + positions */}
            <aside className="rx-term-side">
              <div className="rx-rebate">
                <div className="label">Rebate · this month</div>
                <div className="num">+$1,247.20</div>
                <div className="breakdown">
                  <div className="row"><span>Binance maker</span><span>+$612.40</span></div>
                  <div className="row"><span>Bybit taker</span><span>+$284.60</span></div>
                  <div className="row"><span>Hyperliquid</span><span>+$350.20</span></div>
                </div>
              </div>

              <div>
                <span className="rx-term-side-head">Open positions · 3</span>
                <div className="rx-positions">
                  {openPositions.map(p => (
                    <div key={p.sym} className="rx-pos">
                      <div>
                        <div>
                          <span className="sym">{p.sym}</span>{' '}
                          <span className={`side ${p.side}`}>{p.sideLabel}</span>
                        </div>
                        <div className="px">{p.size} @ {p.entry}</div>
                      </div>
                      <span className={`pnl ${p.pnlDir}`}>{p.pnl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="rx-mac-foot">
            <span>⌘B buy · ⌘S sell · ⌘K command palette</span>
            <span>latency 38ms · 8/8 venues</span>
          </div>
        </div>

        {/* Counter strip */}
        <div className="rx-counter">
          <div className="item">
            <div className="num">$2.4<span className="accent">B</span></div>
            <span className="lbl">traded volume</span>
          </div>
          <div className="item">
            <div className="num">67<span className="accent">k</span></div>
            <span className="lbl">active traders</span>
          </div>
          <div className="item">
            <div className="num">12</div>
            <span className="lbl">exchanges</span>
          </div>
          <div className="item">
            <div className="num">$8.2<span className="accent">M</span></div>
            <span className="lbl">rebated to date</span>
          </div>
        </div>
      </div>
    </section>
  );
}
