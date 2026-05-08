import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import { useTicker } from '@/shared/context/TickerContext';
import { formatMoney } from '@/shared/lib/format';
import SectionHeader from './SectionHeader';
import { SearchSmall, Check, Chart } from '@/shared/ui/icons/LandingIcons';

export default function BentoGrid() {
  const ref = useScrollReveal<HTMLDivElement>();
  const ticker = useTicker();

  return (
    <section className="bento-section" id="features">
      <div className="container">
        <SectionHeader
          eyebrow="Terminal"
          title={<>Built for the way you <em>actually trade.</em></>}
          lead="Six things that turn cross-exchange trading from a 6-tab juggle into a single keyboard."
        />

        <div className="bento reveal-stagger" ref={ref}>
          {/* Card 1 — Unified market */}
          <div className="bento-card span-2">
            <div className="bc-text">
              <div className="bc-eyebrow">01 · UNIFIED MARKET VIEW</div>
              <h3 className="bc-title">Compare every market across every venue, in a glance.</h3>
              <p className="bc-body">
                Side-by-side order books, spreads, depth, and funding — best venue highlighted before you click.
                Stop guessing which exchange to fire.
              </p>
            </div>
            <div className="bc-visual">
              <div className="bv-compare">
                <div className="col">
                  <div className="ex">Binance · ask</div>
                  <div className="px" style={{ color: 'var(--danger)' }}>68,740.20</div>
                  <div className="meta">depth 0.41</div>
                </div>
                <div className="col best">
                  <div className="ex">Bybit · best</div>
                  <div className="px">68,739.50</div>
                  <div className="meta">depth 0.88</div>
                </div>
                <div className="col">
                  <div className="ex">Hyperliquid</div>
                  <div className="px" style={{ color: 'var(--danger)' }}>68,740.80</div>
                  <div className="meta">fund +0.012%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Smart routing */}
          <div className="bento-card">
            <div className="bc-text">
              <div className="bc-eyebrow">02 · SMART ROUTING</div>
              <h3 className="bc-title">Best price, depth, and fee — surfaced.</h3>
              <p className="bc-body">
                Every venue scored per order. Includes maker/taker tier and your rebate share.
              </p>
            </div>
            <div className="bc-visual">
              <div className="bv-route">
                <div className="bv-route-head"><span>route · 2.0 BTC</span><span>scored</span></div>
                <div className="bv-route-row best">
                  <span className="ex">Bybit</span>
                  <span className="bar" style={{ ['--w' as string]: '92%' } as React.CSSProperties} />
                  <span className="px">+$2.60</span>
                </div>
                <div className="bv-route-row">
                  <span className="ex">Binance</span>
                  <span className="bar" style={{ ['--w' as string]: '76%' } as React.CSSProperties} />
                  <span className="px">—</span>
                </div>
                <div className="bv-route-row">
                  <span className="ex">Hyperliquid</span>
                  <span className="bar" style={{ ['--w' as string]: '64%' } as React.CSSProperties} />
                  <span className="px">—</span>
                </div>
                <div className="bv-route-row">
                  <span className="ex">OKX</span>
                  <span className="bar" style={{ ['--w' as string]: '52%' } as React.CSSProperties} />
                  <span className="px">—</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — State-driven */}
          <div className="bento-card">
            <div className="bc-text">
              <div className="bc-eyebrow">03 · STATE-DRIVEN</div>
              <h3 className="bc-title">UI changes based on what you're doing.</h3>
              <p className="bc-body">
                Disconnected → discover. Connected → execute. One product, two states, zero clutter.
              </p>
            </div>
            <div className="bc-visual">
              <div className="bv-state">
                <div className="bv-state-pills">
                  <span className="p">Disconnected</span>
                  <span className="p active">Connected · Bybit</span>
                </div>
                <div className="bv-state-ticket">
                  <div className="row"><span className="l">market</span><span className="r">BTC-USDT</span></div>
                  <div className="row"><span className="l">size</span><span className="r">2.0 BTC</span></div>
                  <div className="row"><span className="l">fee</span><span className="r">0.018%</span></div>
                  <div className="row"><span className="l">rebate</span><span className="r accent">+$24.86</span></div>
                  <div className="btns">
                    <span className="b buy">Buy ⌘B</span>
                    <span className="b sell">Sell ⌘S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 — Lifecycle */}
          <div className="bento-card span-2">
            <div className="bc-text">
              <div className="bc-eyebrow">04 · CONTINUOUS LIFECYCLE</div>
              <h3 className="bc-title">Discovery, execution, PnL — same workflow.</h3>
              <p className="bc-body">
                Open positions stay attached to the chart and signal that opened them.
                Rebates accrue inline — no separate dashboard, no monthly report.
              </p>
            </div>
            <div className="bc-visual">
              <div className="bv-life">
                <div className="bv-life-stages">
                  <div className="bv-life-stage">
                    <div className="bv-life-icon"><SearchSmall /></div>
                    <div className="lab">Discover</div>
                  </div>
                  <div className="bv-life-stage">
                    <div className="bv-life-icon"><Check /></div>
                    <div className="lab">Execute</div>
                  </div>
                  <div className="bv-life-stage">
                    <div className="bv-life-icon"><Chart /></div>
                    <div className="lab">Track</div>
                  </div>
                </div>
                <div className="bv-life-pos">
                  <div className="ph">
                    <span>position</span><span>size</span><span>pnl</span><span>rebate</span>
                  </div>
                  <div className="pr">
                    <span className="pos">BTC long</span>
                    <span>2.0</span>
                    <span className="pnl up">+$842.10</span>
                    <span className="reb">+$24.86</span>
                  </div>
                  <div className="pr">
                    <span className="pos">ETH short</span>
                    <span>15.5</span>
                    <span className="pnl down">−$120.40</span>
                    <span className="reb">+$8.10</span>
                  </div>
                  <div className="pr">
                    <span className="pos">SOL long</span>
                    <span>120</span>
                    <span className="pnl up">+$1,204.30</span>
                    <span className="reb">+$15.42</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 — Multi-account */}
          <div className="bento-card">
            <div className="bc-text">
              <div className="bc-eyebrow">05 · MULTI-ACCOUNT</div>
              <h3 className="bc-title">Every CEX sub-account and wallet, one keyboard.</h3>
              <p className="bc-body">
                Aggregate balances and PnL across CEX accounts and self-custodied wallets.
              </p>
            </div>
            <div className="bc-visual">
              <div className="bv-acc">
                <div className="bv-acc-summary">
                  <div className="l">Total portfolio</div>
                  <div className="v">$1,284,420</div>
                  <div className="d">↑ $24,810 · 24h</div>
                </div>
                <div className="bv-acc-list">
                  <div className="bv-acc-row"><span className="ic">B</span><span className="nm">Bybit · main</span><span className="bl">$420,180</span></div>
                  <div className="bv-acc-row"><span className="ic">B</span><span className="nm">Binance · alpha</span><span className="bl">$284,210</span></div>
                  <div className="bv-acc-row"><span className="ic w">⬣</span><span className="nm">Hyperliquid · 0x4f...c2a8</span><span className="bl">$285,610</span></div>
                  <div className="bv-acc-row"><span className="ic w">⬣</span><span className="nm">GMX · 0x8a...f1e3</span><span className="bl">$134,000</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 — Rebate engine */}
          <div className="bento-card span-2">
            <div className="bc-text">
              <div className="bc-eyebrow">06 · REBATE ENGINE</div>
              <h3 className="bc-title">Up to 50% of your fees, back. Every Friday.</h3>
              <p className="bc-body">
                Rebates accrue per-fill, settle weekly, pay in USDT.
                No claim flow, no minimum, no expiry. Send to any wallet you control.
              </p>
            </div>
            <div className="bc-visual no-border">
              <div className="bv-rebate">
                <div className="l">Earned this month</div>
                <div className="v">
                  $<span>{formatMoney(ticker.bvRebate)}</span>
                </div>
                <div className="meta">
                  <span className="a">+${ticker.rebate.toFixed(2)}</span> · last fill · 2 sec ago
                </div>
                <div className="ledger">
                  <div className="lr"><span>Friday payout · 2026-05-08</span><span className="a">+$842.10</span></div>
                  <div className="lr"><span>Friday payout · 2026-05-01</span><span className="a">+$1,204.30</span></div>
                  <div className="lr"><span>Friday payout · 2026-04-24</span><span className="a">+$1,237.80</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
