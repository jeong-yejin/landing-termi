import type { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    initials: 'MZ',
    quote: (
      <>"Funding compare across Hyperliquid + GMX + Drift in one panel. <em>$8,420 in rebates</em> last quarter on top of saved spread."</>
    ),
    handle: '@mz_perpdegen',
    role: 'Perp-native · HL leaderboard',
  },
  {
    initials: 'RV',
    quote: (
      <>"OI, funding, basis side-by-side with execution. I cancelled <em>two other tools</em>. Hotkey layer is what hooked me."</>
    ),
    handle: '@runevolatility',
    role: 'Quant · 4-CEX desk',
  },
  {
    initials: 'AK',
    quote: (
      <>"Connected three CEX sub-accounts and four wallets in 8 minutes. <em>$1,840/mo</em> in rebates I wasn't getting before."</>
    ),
    handle: '@anonkrypto',
    role: 'Multi-account · arb desk',
  },
];
