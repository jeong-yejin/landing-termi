import { useState } from 'react';
import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { Plus } from '@/shared/ui/icons/LandingIcons';
import { faqs } from '@/features/landing/data/content';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="faq" id="faq">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Things traders ask before <em>connecting.</em></>}
        />
        <div className="faq-list reveal" ref={ref}>
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <Plus className="icon" />
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
