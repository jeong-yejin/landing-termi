import { useLiveTicker } from '@/shared/hooks/useLiveTicker';
import { Rebate } from '@/shared/ui/icons/LandingIcons';

type Row = { kind: 'ask' | 'bid'; price: string; qty: string; depth: number };

const binance: Row[] = [
  { kind: 'ask', price: '68,742.30', qty: '0.412', depth: 28 },
  { kind: 'ask', price: '68,741.10', qty: '0.890', depth: 42 },
  { kind: 'ask', price: '68,740.20', qty: '0.205', depth: 18 },
];
const binanceBids: Row[] = [
  { kind: 'bid', price: '68,740.10', qty: '0.318', depth: 22 },
  { kind: 'bid', price: '68,739.60', qty: '0.742', depth: 38 },
  { kind: 'bid', price: '68,738.40', qty: '0.501', depth: 28 },
];

const bybitAsk: Row[] = [
  { kind: 'ask', price: '68,741.80', qty: '0.534', depth: 30 },
  { kind: 'ask', price: '68,740.40', qty: '1.120', depth: 48 },
];
const bybitBids: Row[] = [
  { kind: 'bid', price: '68,739.45', qty: '0.645', depth: 32 },
  { kind: 'bid', price: '68,738.90', qty: '0.412', depth: 26 },
  { kind: 'bid', price: '68,737.60', qty: '0.318', depth: 22 },
];

const hl: Row[] = [
  { kind: 'ask', price: '68,742.00', qty: '0.380', depth: 24 },
  { kind: 'ask', price: '68,741.20', qty: '0.612', depth: 36 },
  { kind: 'ask', price: '68,740.80', qty: '0.290', depth: 22 },
];
const hlBids: Row[] = [
  { kind: 'bid', price: '68,739.20', qty: '0.502', depth: 28 },
  { kind: 'bid', price: '68,738.40', qty: '0.880', depth: 44 },
  { kind: 'bid', price: '68,737.10', qty: '0.218', depth: 18 },
];

function BookRow({ row, depthVar }: { row: Row; depthVar?: string }) {
  return (
    <div
      className={`row ${row.kind}`}
      style={{ ['--depth' as string]: `${row.depth}%` } as React.CSSProperties}
      id={depthVar}
    >
      <span className="price">{row.price}</span>
      <span className="qty">{row.qty}</span>
    </div>
  );
}

export default function Terminal() {
  const ticker = useLiveTicker();
  const liveAsk = ticker.ask.toFixed(2);
  const liveAskColor =
    ticker.askDelta === 0
      ? undefined
      : ticker.askDelta > 0
        ? 'var(--success)'
        : 'var(--danger)';

  return (
    <div className="terminal" id="hero-terminal">
      <div className="terminal-bar">
        <span className="tb-dots">
          <span className="tb-dot" />
          <span className="tb-dot" />
          <span className="tb-dot" />
        </span>
        <span className="tb-title">trading-studio · BTC-USDT · cross-exchange compare</span>
        <span className="tb-status">
          <span className="dot" />
          <span className="live">live</span>
          <span>· 47ms</span>
        </span>
      </div>

      <div className="terminal-body">
        <div className="exch-col">
          <div className="exch-head">
            <span className="name">Binance</span>
            <span style={{ color: 'var(--text-dim)', fontSize: 9 }}>spot</span>
          </div>
          <div className="book">
            {binance.map((r, i) => <BookRow key={`bn-a-${i}`} row={r} />)}
            <div className="spread-row">
              <span>spread</span>
              <span style={{ color: 'var(--text)' }}>0.10</span>
            </div>
            {binanceBids.map((r, i) => <BookRow key={`bn-b-${i}`} row={r} />)}
          </div>
        </div>

        <div className="exch-col best">
          <div className="exch-head">
            <span className="name">Bybit</span>
            <span className="badge">best ask</span>
          </div>
          <div className="book">
            {bybitAsk.map((r, i) => <BookRow key={`by-a-${i}`} row={r} />)}
            <div
              className="row ask"
              style={{ ['--depth' as string]: '40%' } as React.CSSProperties}
            >
              <span className="price" style={{ color: liveAskColor, transition: 'color 0.28s' }}>
                {liveAsk}
              </span>
              <span className="qty">0.880</span>
            </div>
            <div className="spread-row">
              <span>spread</span>
              <span style={{ color: 'var(--accent)' }}>0.05</span>
            </div>
            {bybitBids.map((r, i) => <BookRow key={`by-b-${i}`} row={r} />)}
          </div>
        </div>

        <div className="exch-col">
          <div className="exch-head">
            <span className="name">Hyperliquid</span>
            <span style={{ color: 'var(--text-dim)', fontSize: 9 }}>perp</span>
          </div>
          <div className="book">
            {hl.map((r, i) => <BookRow key={`hl-a-${i}`} row={r} />)}
            <div className="spread-row">
              <span>fund</span>
              <span style={{ color: 'var(--success)' }}>+0.012%</span>
            </div>
            {hlBids.map((r, i) => <BookRow key={`hl-b-${i}`} row={r} />)}
          </div>
        </div>
      </div>

      <div className="terminal-footer">
        <div className="tf-route">
          route <span className="v">2.0 BTC</span>
          <span className="arrow">→</span>
          <span className="v">Bybit</span>
          <span className="arrow">·</span>
          <span>fee 0.018%</span>
        </div>
        <div className="tf-rebate">
          <Rebate />
          <span>+ ${ticker.rebate.toFixed(2)} rebate</span>
        </div>
      </div>
    </div>
  );
}
