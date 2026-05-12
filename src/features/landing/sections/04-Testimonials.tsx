import { useState } from 'react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const cur = testimonials[active];

  return (
    <section className="rx-test">
      <div className="rx-container">
        <div className="rx-eyebrow">
          <span className="tag">Trusted by traders</span>
          <h2>Built for people who count milliseconds.</h2>
          <p>Active traders across CEX and perp DEX use ReboundX as their main terminal.</p>
        </div>

        <div className="rx-test-pills">
          {testimonials.map((p, i) => (
            <button
              key={p.name}
              type="button"
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
