import type { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah K.',
    role: 'Multi-exchange CEX trader',
    initials: 'SK',
    quote: <>I had four windows open every morning. Now I have <strong>one</strong>.</>,
    meta: 'Trades 4 venues · 60+ trades/day',
  },
  {
    name: 'TR Wallace',
    role: 'Perp-native trader',
    initials: 'TR',
    quote: (
      <>The funding-rate compare alone saved me <strong>3% APR</strong>. ReboundX paid for itself in week one.</>
    ),
    meta: 'Hyperliquid · dYdX · GMX',
  },
  {
    name: '@0xpneuma',
    role: 'High-frequency trader',
    initials: '0x',
    quote: <>Rebates fund my coffee budget. <strong>Every. Single. Day.</strong></>,
    meta: '$340k notional/day · maker-only',
  },
  {
    name: 'Marcus T.',
    role: 'Momentum scalper',
    initials: 'MT',
    quote: <>I cut my per-trade decision time from ~40s to ~8s. <strong>The rebate is gravy — I came for the terminal.</strong></>,
    meta: 'BTC/ETH perps · 12–30 trades/day',
  },
];
