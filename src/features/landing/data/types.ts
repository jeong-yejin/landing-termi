import type { ReactNode } from 'react';

export type Stat = {
  label: string;
  prefix?: string;
  target: number;
  decimals: number;
  unit?: string;
  suffix?: string;
  accent?: boolean;
};

export type Tier = {
  name: string;
  pct: number;
  vol: string;
  features: string[];
  popular?: boolean;
};

export type Faq = {
  q: string;
  a: ReactNode;
};

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

export type Testimonial = {
  initials: string;
  quote: ReactNode;
  handle: string;
  role: string;
};

export type Step = {
  num: string;
  title: string;
  body: string;
  icon: 'plus' | 'chart' | 'download';
};

export type FooterCol = {
  heading: string;
  links: { label: string; href: string }[];
};
