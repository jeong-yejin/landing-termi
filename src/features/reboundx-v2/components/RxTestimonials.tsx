import { useState } from 'react';

type T = { name: string; role: string; initials: string; quote: React.ReactNode; meta: string };

const people: T[] = [
  {
    name: 'Sarah K.',
    role: 'Multi-exchange CEX trader',
    initials: 'SK',
    quote: <>I had four windows open every morning. Now I have <strong>one</strong>.</>,
    meta: 'Trades 4 venues · 60+ trades/day',
  },
  {
    name: 'TR Wallace',
    role: 'Perp-native trader',
    initials: 'TR',
    quote: <>The funding-rate compare alone saved me <strong>3% APR</strong>. ReboundX paid for itself in week one.</>,
    meta: 'Hyperliquid · dYdX · GMX',
  },
  {
    name: '@0xpneuma',
    role: 'High-frequency trader',
    initials: '0x',
    quote: <>Rebates fund my coffee budget. <strong>Every. Single. Day.</strong></>,
    meta: '$340k notional/day · maker-only',
  },
];

export default function RxTestimonials() {
  const [active, setActive] = useState(1);
  const cur = people[active];
  return (
    <section className="rx-test">
      <div className="rx-container">
        <div className="rx-eyebrow">
          <span className="tag">Trusted by traders</span>
          <h2>Built for people who count milliseconds.</h2>
          <p>Active traders across CEX and perp DEX use ReboundX as their main terminal.</p>
        </div>

        <div className="rx-test-pills">
          {people.map((p, i) => (
            <button
              key={p.name}
              className={`rx-test-pill ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="av">{p.initials}</span>
              <span className="info">
                <span className="name">{p.name}</span>
                <span className="role">{p.role}</span>
              </span>
            </button>
          ))}
        </div>

        <blockquote className="rx-test-quote">"{cur.quote}"</blockquote>
        <div className="rx-test-meta">
          <span>{cur.name}</span>
          <span className="sep">·</span>
          <span>{cur.role}</span>
          <span className="sep">·</span>
          <span>{cur.meta}</span>
        </div>
      </div>
    </section>
  );
}
