import type { Tier } from './types';

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
