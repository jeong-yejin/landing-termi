import type { HeroExchange, OrderLevel, CompareRow, Position } from './types';

export const heroExchanges: HeroExchange[] = [
  { code: 'BN', name: 'Binance',      vol: '420M', active: true },
  { code: 'BB', name: 'Bybit',        vol: '188M' },
  { code: 'OK', name: 'OKX',          vol: '156M' },
  { code: 'HL', name: 'Hyperliquid',  vol: '92M' },
  { code: 'DX', name: 'dYdX',         vol: '34M' },
  { code: 'BG', name: 'Bitget',       vol: '76M' },
  { code: 'KR', name: 'Kraken',       vol: '41M' },
  { code: 'GM', name: 'GMX',          vol: '18M' },
];

export const askLevels: OrderLevel[] = [
  { px: '67,142.50', sz: '0.84', total: '12.40', d: 38 },
  { px: '67,141.20', sz: '1.20', total: '11.56', d: 52 },
  { px: '67,140.80', sz: '0.62', total: '10.36', d: 28 },
  { px: '67,140.10', sz: '2.05', total: '9.74',  d: 78 },
];

export const bidLevels: OrderLevel[] = [
  { px: '67,138.40', sz: '1.84', total: '14.20', d: 70 },
  { px: '67,137.20', sz: '0.95', total: '12.36', d: 36 },
  { px: '67,136.80', sz: '0.42', total: '11.41', d: 18 },
  { px: '67,135.60', sz: '2.10', total: '10.99', d: 80 },
];

export const compareRows: CompareRow[] = [
  { ex: 'Binance',      sw: 'BN', px: '67,140.10', spr: '0.30', best: false },
  { ex: 'Hyperliquid',  sw: 'HL', px: '67,139.80', spr: '0.20', best: true  },
  { ex: 'OKX',          sw: 'OK', px: '67,142.50', spr: '0.45', best: false },
  { ex: 'Bybit',        sw: 'BB', px: '67,141.20', spr: '0.35', best: false },
];

export const openPositions: Position[] = [
  { sym: 'BTC-PERP', side: 'l', sideLabel: 'LONG',  size: '2.4',  entry: '66,802', pnl: '+$812', pnlDir: 'up' },
  { sym: 'SOL-PERP', side: 'l', sideLabel: 'LONG',  size: '120',  entry: '184.20', pnl: '+$246', pnlDir: 'up' },
  { sym: 'ETH-PERP', side: 's', sideLabel: 'SHORT', size: '8.0',  entry: '3,492',  pnl: '-$94',  pnlDir: 'dn' },
];
