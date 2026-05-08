export type BookRow = {
  kind: 'ask' | 'bid';
  price: string;
  qty: string;
  depth: number;
};

export const binanceAsks: BookRow[] = [
  { kind: 'ask', price: '68,742.30', qty: '0.412', depth: 28 },
  { kind: 'ask', price: '68,741.10', qty: '0.890', depth: 42 },
  { kind: 'ask', price: '68,740.20', qty: '0.205', depth: 18 },
];

export const binanceBids: BookRow[] = [
  { kind: 'bid', price: '68,740.10', qty: '0.318', depth: 22 },
  { kind: 'bid', price: '68,739.60', qty: '0.742', depth: 38 },
  { kind: 'bid', price: '68,738.40', qty: '0.501', depth: 28 },
];

export const bybitAsks: BookRow[] = [
  { kind: 'ask', price: '68,741.80', qty: '0.534', depth: 30 },
  { kind: 'ask', price: '68,740.40', qty: '1.120', depth: 48 },
];

export const bybitBids: BookRow[] = [
  { kind: 'bid', price: '68,739.45', qty: '0.645', depth: 32 },
  { kind: 'bid', price: '68,738.90', qty: '0.412', depth: 26 },
  { kind: 'bid', price: '68,737.60', qty: '0.318', depth: 22 },
];

export const hlAsks: BookRow[] = [
  { kind: 'ask', price: '68,742.00', qty: '0.380', depth: 24 },
  { kind: 'ask', price: '68,741.20', qty: '0.612', depth: 36 },
  { kind: 'ask', price: '68,740.80', qty: '0.290', depth: 22 },
];

export const hlBids: BookRow[] = [
  { kind: 'bid', price: '68,739.20', qty: '0.502', depth: 28 },
  { kind: 'bid', price: '68,738.40', qty: '0.880', depth: 44 },
  { kind: 'bid', price: '68,737.10', qty: '0.218', depth: 18 },
];
