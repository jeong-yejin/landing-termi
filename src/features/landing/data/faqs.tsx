import type { Faq } from './types';

export const faqs: Faq[] = [
  {
    q: 'Do you ever hold my funds or my private keys?',
    a: (
      <>
        No. CEX connections use API keys <em>you</em> generate, with IP whitelisting and withdrawal
        disabled by default. Perp DEX trading signs locally with your own wallet — we never see the
        seed. API keys are encrypted with a per-user key and visible in your in-app audit log.
      </>
    ),
  },
  {
    q: 'Is execution actually faster than the native exchange app?',
    a: (
      <>
        Median order placement is <em>47ms</em>, measured at the gateway. Co-located WebSocket
        feeds, no UI render overhead, hotkeys default-on. You can run the latency benchmark inside
        the terminal — it pings every connected venue and shows the trace.
      </>
    ),
  },
  {
    q: 'Which exchanges and DEXs are supported?',
    a: (
      <>
        18 venues today: Binance, Bybit, OKX, Bitget, Upbit, Kraken, Kucoin, Gate.io, Mexc on the
        CEX side; Hyperliquid, dYdX, GMX, Drift, Vertex, Aevo, Paradex, Apex, Backpack on the perp
        DEX side. New venues ship every 4–6 weeks based on user votes —{' '}
        <a href="#">see the queue</a>.
      </>
    ),
  },
  {
    q: 'How is this different from Coinglass, Hyperdash, or TradingView?',
    a: (
      <>
        Those tools each do one job — data, charts, or signals. ReboundX is the only workspace that
        unifies cross-exchange data <em>and</em> execution <em>and</em> position lifecycle{' '}
        <em>and</em> rebates in a single keyboard-driven terminal.{' '}
        <a href="#">Side-by-side comparison →</a>
      </>
    ),
  },
  {
    q: 'What does it actually cost?',
    a: (
      <>
        Free. No subscription, no card, no minimums. We earn from rebate-share with partner
        exchanges — your fees stay the same as native, and you receive 25–50% back depending on your
        monthly volume tier (see <a href="#tiers">tiers above</a>).
      </>
    ),
  },
  {
    q: 'How and when do I receive my rebates?',
    a: (
      <>
        Rebates accrue per-fill in real time, settle weekly, and pay out every Friday in USDT. Send
        to any wallet you control on Ethereum, Arbitrum, Solana, or Base. Pro and Whale tiers can
        opt for daily payout. No claim flow, no minimum, no expiry.
      </>
    ),
  },
  {
    q: 'What happens if a feed lags during volatility?',
    a: (
      <>
        Redundant WebSocket connections per exchange (primary + 2 fallbacks). Stale-data warnings on
        every panel when a feed exceeds 200ms drift. One hotkey (<em>⌘+F</em>) falls back to
        direct-exchange routing. Live status at <a href="#">status.reboundx.io</a>.
      </>
    ),
  },
  {
    q: 'Can I bring TradingView charts and webhook alerts?',
    a: (
      <>
        Yes. TradingView charts embed natively — saved layouts and indicators carry over. Webhook
        alerts ingest from TradingView, Coinalyze, or custom sources. Read-only API ships today;
        write API is on the Q3 roadmap.
      </>
    ),
  },
];
