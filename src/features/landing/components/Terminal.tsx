import { useTicker } from '@/shared/context/TickerContext';
import { Rebate } from '@/shared/ui/icons/LandingIcons';
import {
  binanceAsks, binanceBids,
  bybitAsks, bybitBids,
  hlAsks, hlBids,
  type BookRow,
} from './terminal/bookData';

type CSSWithDepth = React.CSSProperties & { '--depth': string };

function BookRow({ row }: { row: BookRow }) {
  return (
    <div
      className={`row ${row.kind}`}
      style={{ '--depth': `${row.depth}%` } as CSSWithDepth}
    >
      <span className="price">{row.price}</span>
      <span className="qty">{row.qty}</span>
    </div>
  );
}

export default function Terminal() {
  const ticker = useTicker();
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
            {binanceAsks.map((r, i) => <BookRow key={`bn-a-${i}`} row={r} />)}
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
            {bybitAsks.map((r, i) => <BookRow key={`by-a-${i}`} row={r} />)}
            <div
              className="row ask"
              style={{ '--depth': '40%' } as CSSWithDepth}
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
            {hlAsks.map((r, i) => <BookRow key={`hl-a-${i}`} row={r} />)}
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
