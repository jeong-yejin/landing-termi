import type { UsageStep } from './types';

export const usageSteps: UsageStep[] = [
  {
    num: 1,
    title: 'Trade in one workspace',
    listStyle: 'check',
    items: [
      'Select pairs and exchanges',
      'Place orders and manage open positions',
      'View orders and trade history',
    ],
  },
  {
    num: 2,
    title: 'Funding Rate',
    listStyle: 'check',
    items: [
      'Compare funding rates by exchange',
      'Check funding before trading',
    ],
  },
  {
    num: 3,
    title: 'View your activity',
    listStyle: 'check',
    items: [
      'View asset, deposit status',
      'Check funding history',
      'See trading activity summary',
    ],
  },
  {
    num: 4,
    title: 'Exchange Connection',
    listStyle: 'numbered',
    items: [
      'Select an exchange',
      'Use connected exchanges in Trade',
      'Confirm your connection to ReboundX',
    ],
  },
];
