import type { ReactNode } from 'react';

// ─── Hero ────────────────────────────────────────────────────────────────────
export type HeroExchange = {
  code: string;
  name: string;
  vol: string;
  active?: boolean;
};

export type OrderLevel = {
  px: string;
  sz: string;
  total: string;
  d: number;
};

export type CompareRow = {
  ex: string;
  sw: string;
  px: string;
  spr: string;
  best: boolean;
};

export type Position = {
  sym: string;
  side: 'l' | 's';
  sideLabel: string;
  size: string;
  entry: string;
  pnl: string;
  pnlDir: 'up' | 'dn';
};

// ─── Proof ───────────────────────────────────────────────────────────────────
export type ExchangeLogo = {
  code: string;
  name: string;
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  quote: ReactNode;
  meta: string;
};

// ─── Features ────────────────────────────────────────────────────────────────
export type MarketRow = {
  sym: string;
  px: string;
  delta: string;
};

export type CompareExchange = {
  code: string;
  name: string;
  px: string;
  spread: string;
  funding: string;
  best: boolean;
};

export type ChatMsg =
  | {
      kind: 'msg';
      who: string;
      verified: boolean;
      time: string;
      body: string;
      chipPos?: { side: string; size: string; px: string };
      chipPnl?: { value: string };
    }
  | { kind: 'sys'; body: string };

export type InfoCard = {
  title: string;
  value: string;
  delta: string;
  deltaClass?: string;
  trend: 'up' | 'dn';
};

export type RebateVenue = {
  name: string;
  pct: string;
  meter: number;
};

export type WorkflowStep = {
  ix: string;
  nm: string;
  ds: string;
};

// ─── Terminal Usage ───────────────────────────────────────────────────────────
export type StepListStyle = 'check' | 'numbered';

export type UsageStep = {
  num: number;
  title: string;
  listStyle: StepListStyle;
  items: string[];
};

// ─── Benefits ────────────────────────────────────────────────────────────────
export type Benefit = {
  title: string;
  body: string;
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export type FaqItem = {
  q: string;
  a: ReactNode;
};

// ─── Footer ──────────────────────────────────────────────────────────────────
export type FooterCol = {
  h: string;
  links: string[];
};
