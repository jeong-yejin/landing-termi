import { useState } from 'react';
import { faqItems } from '../data/faq';
import { ChevronDown } from '../ui/Icons';
import type { FaqItem } from '../data/types';

function FaqRow({ item, defaultOpen = false }: { item: FaqItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rx-faq-guide-item">
      <button
        type="button"
        className="rx-faq-guide-q"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span>{item.q}</span>
        <ChevronDown
          size={20}
          style={{
            flexShrink: 0,
            marginTop: 2,
            color: 'var(--rx-text-muted)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ overflow: 'hidden', minHeight: 0 }}>
          <p className="rx-faq-guide-a">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="rx-faq-guide" id="faq">
      <div className="rx-section-head">
        <h2>FAQ</h2>
        <p>Quick answers to common questions about trading, accounts, and limits.</p>
      </div>
      <div className="rx-faq-guide-list">
        {faqItems.map((item, i) => (
          <FaqRow key={i} item={item} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
