import type {
  MarketRow,
  CompareExchange,
  ChatMsg,
  InfoCard,
  RebateVenue,
  WorkflowStep,
} from './types';

// ─── s05 State-aware ─────────────────────────────────────────────────────────
export const marketRows: MarketRow[] = [
  { sym: 'BTC-USD',  px: '67,140.10', delta: '+1.42%' },
  { sym: 'ETH-USD',  px: '3,492.40',  delta: '+0.84%' },
  { sym: 'SOL-USD',  px: '184.20',    delta: '+2.10%' },
  { sym: 'HYPE-USD', px: '24.80',     delta: '+5.20%' },
];

// ─── s06 Cross-exchange compare ──────────────────────────────────────────────
export const compareExchanges: CompareExchange[] = [
  { code: 'HL', name: 'Hyperliquid', px: '67,139.80', spread: '0.20', funding: '+0.012%', best: true  },
  { code: 'BN', name: 'Binance',     px: '67,140.10', spread: '0.30', funding: '+0.018%', best: false },
  { code: 'BB', name: 'Bybit',       px: '67,141.20', spread: '0.35', funding: '+0.024%', best: false },
  { code: 'OK', name: 'OKX',         px: '67,142.50', spread: '0.45', funding: '+0.028%', best: false },
];

// ─── s07 Live trader chat ────────────────────────────────────────────────────
export const chatMessages: ChatMsg[] = [
  {
    kind: 'msg',
    who: 'alphawhale',
    verified: true,
    time: '14:02',
    body: 'long here, stops 66.8 — invalidation tight.',
    chipPos: { side: 'long', size: '0.6 BTC', px: '67,140.20' },
  },
  { kind: 'sys', body: 'Whale alert · 480 BTC market buy on Binance' },
  {
    kind: 'msg',
    who: '0xpepe',
    verified: false,
    time: '14:03',
    body: 'funding flipped negative on HL — carry window open.',
  },
  {
    kind: 'msg',
    who: 'trader_jp',
    verified: true,
    time: '14:05',
    body: 'closed 50% — clean scalp.',
    chipPnl: { value: '+$1,240' },
  },
];

// ─── s08 Information density ─────────────────────────────────────────────────
export const infoCards: InfoCard[] = [
  { title: 'Funding 8h · BTC', value: '+0.012%', delta: '+4.2 bps vs 24h', trend: 'up' },
  { title: 'Open interest · BTC', value: '$24.8B', delta: '+8.4% · 24h',     trend: 'up' },
  { title: 'Vol delta · ETH',    value: '+62%',   delta: 'vs 7d avg',        trend: 'up' },
  { title: 'Cross-venue spread', value: '0.20',   delta: '-12% · narrowing', deltaClass: 'dn', trend: 'dn' },
];

// ─── s09 Rebates engine ──────────────────────────────────────────────────────
export const rebateBars: number[] = [40, 52, 38, 64, 71, 58, 82, 70, 88, 76, 94, 100];

export const rebateVenues: RebateVenue[] = [
  { name: 'Binance',      pct: '0.012%', meter: 78 },
  { name: 'Bybit',        pct: '0.018%', meter: 64 },
  { name: 'OKX',          pct: '0.015%', meter: 52 },
  { name: 'Hyperliquid',  pct: '0.020%', meter: 88 },
];

// ─── s10 Connected workflow ──────────────────────────────────────────────────
export const workflowSteps: WorkflowStep[] = [
  { ix: '01', nm: 'Discover', ds: 'Browse markets, funding, sentiment across every venue.' },
  { ix: '02', nm: 'Trade',    ds: 'Execute with one keystroke. Routes to best venue automatically.' },
  { ix: '03', nm: 'Track',    ds: 'Positions, P&L, and rebates stay anchored to the original signal.' },
];
