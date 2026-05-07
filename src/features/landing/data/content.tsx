import type { ReactNode } from 'react';

/* ───── Stats ───────────────────────────────────────────────── */
export type Stat = {
  label: string;
  prefix?: string;
  target: number;
  decimals: number;
  unit?: string;
  suffix?: string;
  accent?: boolean;
};

export const stats: Stat[] = [
  { label: 'Cumulative volume', prefix: '$', target: 4.8, decimals: 1, unit: 'B+' },
  { label: 'Rebates returned', prefix: '$', target: 14.2, decimals: 1, unit: 'M', accent: true },
  { label: 'Active traders', target: 23400, decimals: 0, suffix: '+' },
  { label: 'Median fill latency', target: 47, decimals: 0, unit: 'ms' },
];

/* ───── Trusted exchanges ───────────────────────────────────── */
export const exchanges: string[] = [
  'Binance', 'Bybit', 'OKX', 'Bitget', 'Upbit',
  'Kraken', 'Hyperliquid', 'dYdX', 'GMX',
];

/* ───── Pricing tiers ───────────────────────────────────────── */
export type Tier = {
  name: string;
  pct: number;
  vol: string;
  features: string[];
  popular?: boolean;
};

export const tiers: Tier[] = [
  {
    name: 'Starter',
    pct: 25,
    vol: '< $100K monthly volume',
    features: ['Full terminal access', '3 sub-accounts', 'Weekly USDT payout'],
  },
  {
    name: 'Active',
    pct: 35,
    vol: '$100K – $1M monthly',
    features: ['Everything in Starter', '5 sub-accounts', 'Priority data feeds'],
  },
  {
    name: 'Pro',
    pct: 45,
    vol: '$1M – $10M monthly',
    features: [
      'Everything in Active',
      '8 sub-accounts',
      'Smart routing engine',
      'Daily payout option',
    ],
    popular: true,
  },
  {
    name: 'Whale',
    pct: 50,
    vol: '$10M+ monthly',
    features: [
      'Everything in Pro',
      'Unlimited sub-accounts',
      'Direct line to founders',
      'Custom rebate negotiation',
    ],
  },
];

/* ───── FAQs ────────────────────────────────────────────────── */
export type Faq = {
  q: string;
  a: ReactNode;
};

export const faqs: Faq[] = [
  {
    q: 'Do you ever hold my funds or my private keys?',
    a: (
      <>
        No. CEX connections use API keys <em>you</em> generate, with IP whitelisting and withdrawal disabled by default. Perp DEX trading signs locally with your own wallet — we never see the seed. API keys are encrypted with a per-user key and visible in your in-app audit log.
      </>
    ),
  },
  {
    q: 'Is execution actually faster than the native exchange app?',
    a: (
      <>
        Median order placement is <em>47ms</em>, measured at the gateway. Co-located WebSocket feeds, no UI render overhead, hotkeys default-on. You can run the latency benchmark inside the terminal — it pings every connected venue and shows the trace.
      </>
    ),
  },
  {
    q: 'Which exchanges and DEXs are supported?',
    a: (
      <>
        18 venues today: Binance, Bybit, OKX, Bitget, Upbit, Kraken, Kucoin, Gate.io, Mexc on the CEX side; Hyperliquid, dYdX, GMX, Drift, Vertex, Aevo, Paradex, Apex, Backpack on the perp DEX side. New venues ship every 4–6 weeks based on user votes — <a href="#">see the queue</a>.
      </>
    ),
  },
  {
    q: 'How is this different from Coinglass, Hyperdash, or TradingView?',
    a: (
      <>
        Those tools each do one job — data, charts, or signals. ReboundX is the only workspace that unifies cross-exchange data <em>and</em> execution <em>and</em> position lifecycle <em>and</em> rebates in a single keyboard-driven terminal. <a href="#">Side-by-side comparison →</a>
      </>
    ),
  },
  {
    q: 'What does it actually cost?',
    a: (
      <>
        Free. No subscription, no card, no minimums. We earn from rebate-share with partner exchanges — your fees stay the same as native, and you receive 25–50% back depending on your monthly volume tier (see <a href="#tiers">tiers above</a>).
      </>
    ),
  },
  {
    q: 'How and when do I receive my rebates?',
    a: (
      <>
        Rebates accrue per-fill in real time, settle weekly, and pay out every Friday in USDT. Send to any wallet you control on Ethereum, Arbitrum, Solana, or Base. Pro and Whale tiers can opt for daily payout. No claim flow, no minimum, no expiry.
      </>
    ),
  },
  {
    q: 'What happens if a feed lags during volatility?',
    a: (
      <>
        Redundant WebSocket connections per exchange (primary + 2 fallbacks). Stale-data warnings on every panel when a feed exceeds 200ms drift. One hotkey (<em>⌘+F</em>) falls back to direct-exchange routing. Live status at <a href="#">status.reboundx.io</a>.
      </>
    ),
  },
  {
    q: 'Can I bring TradingView charts and webhook alerts?',
    a: (
      <>
        Yes. TradingView charts embed natively — saved layouts and indicators carry over. Webhook alerts ingest from TradingView, Coinalyze, or custom sources. Read-only API ships today; write API is on the Q3 roadmap.
      </>
    ),
  },
];

/* ───── Hotkeys ─────────────────────────────────────────────── */
export type HotkeyTabId = 'orders' | 'markets' | 'positions' | 'layout';

export type HotkeyRow = {
  keys: string[];
  desc: ReactNode;
};

export type HotkeyTab = {
  id: HotkeyTabId;
  label: string;
  side: {
    title: string;
    body: string;
    tipKey: string;
    tipDesc: string;
  };
  rows: HotkeyRow[];
};

export const hotkeyTabs: HotkeyTab[] = [
  {
    id: 'orders',
    label: 'Orders',
    side: {
      title: 'Fire orders without leaving the keyboard.',
      body: 'Buy at best, sell at best, modify, cancel — all one keystroke. Modifier keys override smart routing or split across venues.',
      tipKey: '⌘K',
      tipDesc: 'opens command palette',
    },
    rows: [
      { keys: ['B'], desc: <><strong>Buy</strong> at best ask · auto-routed</> },
      { keys: ['S'], desc: <><strong>Sell</strong> at best bid · auto-routed</> },
      { keys: ['⌘', 'B'], desc: <><strong>Buy</strong> · open full ticket with size + venue</> },
      { keys: ['⌘', 'R'], desc: <><strong>Override route</strong> · pick a venue manually</> },
      { keys: ['⌘', 'X'], desc: <><strong>Cancel all</strong> open orders for current pair</> },
      { keys: ['M'], desc: <><strong>Modify</strong> last order · price + size inline</> },
    ],
  },
  {
    id: 'markets',
    label: 'Markets',
    side: {
      title: 'Switch markets, venues, and watchlists at speed.',
      body: 'Cycle through your watchlist, jump to any pair by ticker, or compare three exchanges side by side without losing your place.',
      tipKey: '/',
      tipDesc: 'focus search · type ticker',
    },
    rows: [
      { keys: ['/'], desc: <><strong>Search</strong> · jump to any pair by ticker</> },
      { keys: ['J'], desc: <><strong>Next pair</strong> in watchlist</> },
      { keys: ['K'], desc: <><strong>Previous pair</strong> in watchlist</> },
      { keys: ['⌘', '1'], desc: <><strong>Switch venue</strong> to slot 1 · Bybit</> },
      { keys: ['⌘', '2'], desc: <><strong>Switch venue</strong> to slot 2 · Binance</> },
      { keys: ['C'], desc: <><strong>Compare mode</strong> · 3 venues side-by-side</> },
    ],
  },
  {
    id: 'positions',
    label: 'Positions',
    side: {
      title: 'Manage every open position with two fingers.',
      body: "Close, flip, reduce, or set TP/SL inline — without leaving the position panel. Funding and rebates update in real time.",
      tipKey: 'P',
      tipDesc: 'opens position drawer',
    },
    rows: [
      { keys: ['P'], desc: <><strong>Open position drawer</strong> · all venues</> },
      { keys: ['X'], desc: <><strong>Close current position</strong> at market</> },
      { keys: ['⌘', 'X'], desc: <><strong>Close all positions</strong> · all venues</> },
      { keys: ['F'], desc: <><strong>Flip</strong> direction · close + reverse</> },
      { keys: ['T'], desc: <><strong>Set TP/SL</strong> inline · drag on chart</> },
      { keys: ['⌘', 'L'], desc: <><strong>Add to position</strong> · pyramid in</> },
    ],
  },
  {
    id: 'layout',
    label: 'Layout',
    side: {
      title: 'Workspace layouts that follow your trade flow.',
      body: 'Save and recall workspace presets per strategy. Per-pair memory remembers the layout you last used for BTC vs ETH.',
      tipKey: '⌘⇧K',
      tipDesc: 'cycle workspace presets',
    },
    rows: [
      { keys: ['⌘', '⇧', '1'], desc: <><strong>Workspace</strong> · scalp · 4 charts + ladder</> },
      { keys: ['⌘', '⇧', '2'], desc: <><strong>Workspace</strong> · perp · funding + OI</> },
      { keys: ['⌘', '⇧', '3'], desc: <><strong>Workspace</strong> · arb · 3 venues + spread</> },
      { keys: ['⌘', 'D'], desc: <><strong>Detach panel</strong> to a new monitor</> },
      { keys: ['⌘', ','], desc: <><strong>Settings</strong> · hotkeys, theme, payouts</> },
      { keys: ['?'], desc: <><strong>Show all hotkeys</strong> · in-app cheat sheet</> },
    ],
  },
];

/* ───── Testimonials ────────────────────────────────────────── */
export type Testimonial = {
  initials: string;
  quote: ReactNode;
  handle: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    initials: 'MZ',
    quote: <>"Funding compare across Hyperliquid + GMX + Drift in one panel. <em>$8,420 in rebates</em> last quarter on top of saved spread."</>,
    handle: '@mz_perpdegen',
    role: 'Perp-native · HL leaderboard',
  },
  {
    initials: 'RV',
    quote: <>"OI, funding, basis side-by-side with execution. I cancelled <em>two other tools</em>. Hotkey layer is what hooked me."</>,
    handle: '@runevolatility',
    role: 'Quant · 4-CEX desk',
  },
  {
    initials: 'AK',
    quote: <>"Connected three CEX sub-accounts and four wallets in 8 minutes. <em>$1,840/mo</em> in rebates I wasn't getting before."</>,
    handle: '@anonkrypto',
    role: 'Multi-account · arb desk',
  },
];

/* ───── How it works steps ──────────────────────────────────── */
export type Step = {
  num: string;
  title: string;
  body: string;
  icon: 'plus' | 'chart' | 'download';
};

export const steps: Step[] = [
  {
    num: 'STEP 01',
    title: 'Sign up via ReboundX',
    body: 'Open or link your exchange account through our referral. 30 seconds. Works on Binance, Bybit, OKX, Bitget, Upbit, and 13 others.',
    icon: 'plus',
  },
  {
    num: 'STEP 02',
    title: 'Trade on Trading Studio',
    body: 'Use the unified terminal. Every fill — maker or taker, spot or perp — flows through the same rebate-aware fee model.',
    icon: 'chart',
  },
  {
    num: 'STEP 03',
    title: 'Get paid every Friday',
    body: 'Up to 50% of your trading fees returned in USDT. No claim flow, no minimum. Sends to a wallet you control.',
    icon: 'download',
  },
];

/* ───── Footer columns ──────────────────────────────────────── */
export type FooterCol = {
  heading: string;
  links: { label: string; href: string }[];
};

export const footerCols: FooterCol[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Trading Studio', href: '#' },
      { label: 'Rebates', href: '#' },
      { label: 'Smart routing', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Discord', href: '#' },
      { label: 'X / Twitter', href: '#' },
      { label: 'Telegram', href: '#' },
      { label: 'Email', href: '#' },
    ],
  },
];

/* ───── Nav links ───────────────────────────────────────────── */
export const navLinks = [
  { label: 'Terminal', href: '#features' },
  { label: 'Hotkeys', href: '#hotkeys' },
  { label: 'Rebates', href: '#how' },
  { label: 'Tiers', href: '#tiers' },
  { label: 'FAQ', href: '#faq' },
];
