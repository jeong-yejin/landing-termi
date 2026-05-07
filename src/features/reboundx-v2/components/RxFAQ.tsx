import { useState } from 'react';
import { Plus } from './RxIcons';

const faqs = [
  {
    q: 'How do rebates actually work?',
    a: "ReboundX is integrated with each exchange's rebate program at the API level. A portion of every fee you pay routes back to your exchange wallet on a 24-hour settlement cycle. There are no claims, codes, or referral steps — the rebate accrues automatically as you trade. Rebate rates per venue are published in real time inside the app.",
  },
  {
    q: 'What happens if my machine crashes mid-trade?',
    a: 'Open orders live on the exchange, not in ReboundX. If the app crashes, your orders remain active on the venue. Reopen ReboundX and your full state — positions, orders, alerts — restores in under 2 seconds. For mission-critical setups, Pro tier offers headless cloud execution so your strategies keep running even if your laptop sleeps.',
  },
  {
    q: 'Can I run automated strategies or connect bots?',
    a: 'Yes. ReboundX exposes a local WebSocket bridge that any bot can connect to. Strategies can subscribe to unified market data, place orders, and read fills through one API instead of integrating each exchange separately. Pro tier adds scheduling, conditional alerts, and multi-leg automations.',
  },
  {
    q: 'Do I need a separate API key per exchange?',
    a: 'You provide one API key per exchange you want to trade on. ReboundX stores keys encrypted in your OS keychain and only requests the minimum scopes needed (read + trade — never withdraw). You can revoke keys from the exchange dashboard at any time.',
  },
  {
    q: 'Is there a mobile or web version?',
    a: 'ReboundX is desktop-native (macOS today, Windows beta, Linux soon). Mobile is read-only via web — checking positions and rebates on the go — full mobile execution is on the 2026 roadmap.',
  },
];

export default function RxFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="rx-faq" id="faq">
      <div className="rx-container">
        <div className="rx-eyebrow">
          <span className="tag">FAQ</span>
          <h2>Still wondering?</h2>
          <p>Detailed answers for the questions that matter to active traders.</p>
        </div>

        <div className="rx-faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`rx-faq-item ${isOpen ? 'open' : ''}`}>
                <button className="rx-faq-q" onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{f.q}</span>
                  <span className="icon"><Plus /></span>
                </button>
                <div className="rx-faq-a">
                  <div className="rx-faq-a-inner">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
