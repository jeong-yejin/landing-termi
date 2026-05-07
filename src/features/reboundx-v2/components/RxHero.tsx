import { ArrowRight, Apple, Play } from './RxIcons';
import LaserFlow from './LaserFlow';

const exchanges = [
  { code: 'BN', name: 'Binance', vol: '420M', active: true },
  { code: 'BB', name: 'Bybit', vol: '188M' },
  { code: 'OK', name: 'OKX', vol: '156M' },
  { code: 'HL', name: 'Hyperliquid', vol: '92M' },
  { code: 'DX', name: 'dYdX', vol: '34M' },
  { code: 'BG', name: 'Bitget', vol: '76M' },
  { code: 'KR', name: 'Kraken', vol: '41M' },
  { code: 'GM', name: 'GMX', vol: '18M' },
];

const askLevels = [
  { px: '67,142.50', sz: '0.84', total: '12.40', d: 38 },
  { px: '67,141.20', sz: '1.20', total: '11.56', d: 52 },
  { px: '67,140.80', sz: '0.62', total: '10.36', d: 28 },
  { px: '67,140.10', sz: '2.05', total: '9.74', d: 78 },
];
const bidLevels = [
  { px: '67,138.40', sz: '1.84', total: '14.20', d: 70 },
  { px: '67,137.20', sz: '0.95', total: '12.36', d: 36 },
  { px: '67,136.80', sz: '0.42', total: '11.41', d: 18 },
  { px: '67,135.60', sz: '2.10', total: '10.99', d: 80 },
];

const compareRows = [
  { ex: 'Binance', sw: 'BN', px: '67,140.10', spr: '0.30', best: false },
  { ex: 'Hyperliquid', sw: 'HL', px: '67,139.80', spr: '0.20', best: true },
  { ex: 'OKX', sw: 'OK', px: '67,142.50', spr: '0.45', best: false },
  { ex: 'Bybit', sw: 'BB', px: '67,141.20', spr: '0.35', best: false },
];

export default function RxHero() {
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
              {exchanges.map(e => (
                <div key={e.code} className={`item ${e.active ? 'active' : ''}`}>
                  <span className="ico">{e.code}</span>
                  <span className="grow">{e.name}</span>
                  <span className="meta">{e.vol}</span>
                </div>
              ))}
            </aside>

            {/* Main */}
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
                  <div className="rx-term-card-head"><span>Order book</span><span>Hyperliquid</span></div>
                  <div className="rx-book">
                    {askLevels.slice().reverse().map((a, i) => (
                      <div key={i} className="ask" style={{ ['--depth' as string]: `${100 - a.d}%` }}>
                        <span>{a.px}</span><span style={{ textAlign: 'center' }}>{a.sz}</span><span style={{ textAlign: 'right' }}>{a.total}</span>
                      </div>
                    ))}
                    <div className="mid">
                      <span>67,138.95</span>
                      <span className="spread">spread 0.20</span>
                    </div>
                    {bidLevels.map((b, i) => (
                      <div key={i} className="bid" style={{ ['--depth' as string]: `${100 - b.d}%` }}>
                        <span>{b.px}</span><span style={{ textAlign: 'center' }}>{b.sz}</span><span style={{ textAlign: 'right' }}>{b.total}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cross-venue compare */}
                <div className="rx-term-card">
                  <div className="rx-term-card-head"><span>Cross-venue</span><span>BTC perp</span></div>
                  <div className="rx-compare">
                    <div className="rx-compare-row head">
                      <span>Venue</span><span>Mark</span><span>Spread</span><span style={{ textAlign: 'right' }}>Route</span>
                    </div>
                    {compareRows.map(r => (
                      <div key={r.ex} className={`rx-compare-row ${r.best ? 'best' : ''}`}>
                        <span className="ex"><span className="swatch" />{r.ex}</span>
                        <span>{r.px}</span>
                        <span>{r.spr}</span>
                        <span style={{ textAlign: 'right', color: r.best ? 'var(--rx-lime)' : 'var(--rx-text-dim)' }}>
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
                <div className="rx-positions" style={{ marginTop: 8 }}>
                  <div className="rx-pos">
                    <div>
                      <div><span className="sym">BTC-PERP</span> <span className="side l">LONG</span></div>
                      <div className="px">2.4 @ 66,802</div>
                    </div>
                    <span className="pnl up">+$812</span>
                  </div>
                  <div className="rx-pos">
                    <div>
                      <div><span className="sym">SOL-PERP</span> <span className="side l">LONG</span></div>
                      <div className="px">120 @ 184.20</div>
                    </div>
                    <span className="pnl up">+$246</span>
                  </div>
                  <div className="rx-pos">
                    <div>
                      <div><span className="sym">ETH-PERP</span> <span className="side s">SHORT</span></div>
                      <div className="px">8.0 @ 3,492</div>
                    </div>
                    <span className="pnl dn">-$94</span>
                  </div>
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
