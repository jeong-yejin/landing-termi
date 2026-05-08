import type { Stat } from './types';

export const stats: Stat[] = [
  { label: 'Cumulative volume', prefix: '$', target: 4.8, decimals: 1, unit: 'B+' },
  { label: 'Rebates returned', prefix: '$', target: 14.2, decimals: 1, unit: 'M', accent: true },
  { label: 'Active traders', target: 23_400, decimals: 0, suffix: '+' },
  { label: 'Median fill latency', target: 47, decimals: 0, unit: 'ms' },
];
