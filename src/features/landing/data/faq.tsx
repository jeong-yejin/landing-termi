import type { FaqItem } from './types';

export const faqItems: FaqItem[] = [
  {
    q: 'Q. Does ReboundX execute real trades?',
    a: (
      <>
        A. Yes. ReboundX executes real orders through your connected exchange.{' '}
        <strong>Orders are placed in ReboundX and executed on the exchange.</strong>
      </>
    ),
  },
  {
    q: "Q. My Google account on ReboundX is different from my exchange account.",
    a: (
      <>
        {"A. That's fine. "}
        <strong>As long as your exchange account was created through ReboundX</strong>
        {" (using the ReboundX referral code), you'll receive rebates on every trade."}
      </>
    ),
  },
  {
    q: 'Q. Can I connect more than one exchange?',
    a: (
      <>
        {'A. Yes. You can '}
        <strong>connect multiple exchanges</strong>
        {' and choose where to place each order.'}
      </>
    ),
  },
  {
    q: 'Q. Do I deposit or withdraw funds on ReboundX?',
    a: (
      <>
        <span style={{ display: 'block' }}>A. No. ReboundX does not hold assets.</span>
        <strong>
          Funds come from your exchange account. Withdrawals must be done on the exchange.
        </strong>
      </>
    ),
  },
  {
    q: 'Q. What happens if I leave the page or refresh during a trade?',
    a: (
      <>
        {'A. Nothing changes. Orders and positions '}
        <strong>remain active on the exchange.</strong>
      </>
    ),
  },
];
