import type { FooterCol } from './types';

export const navLinks = [
  { label: 'Terminal', href: '#features' },
  { label: 'Hotkeys', href: '#hotkeys' },
  { label: 'Rebates', href: '#how' },
  { label: 'Tiers', href: '#tiers' },
  { label: 'FAQ', href: '#faq' },
];

export const exchanges: string[] = [
  'Binance', 'Bybit', 'OKX', 'Bitget', 'Upbit',
  'Kraken', 'Hyperliquid', 'dYdX', 'GMX',
];

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
