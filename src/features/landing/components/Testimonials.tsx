import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import { testimonials } from '@/features/landing/data/testimonials';

export default function Testimonials() {
  const quoteRef = useScrollReveal<HTMLParagraphElement>();
  const authorRef = useScrollReveal<HTMLDivElement>();
  const trioRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bigquote">
      <div className="container-narrow">
        <p className="bigquote-text reveal" ref={quoteRef}>
          "I cut my per-trade decision time from <em>~40s to ~8s.</em> The rebate is gravy — I came for the terminal."
        </p>
        <div className="bigquote-author reveal" ref={authorRef}>
          <div className="bigquote-avatar">CD</div>
          <div className="bigquote-meta">
            <div className="h">@cryptodelta_</div>
            <div className="r">Multi-exchange trader · $2.1M monthly volume</div>
          </div>
        </div>

        <div className="t-trio reveal-stagger" ref={trioRef}>
          {testimonials.map((t) => (
            <div className="t-mini" key={t.handle}>
              <p className="q">{t.quote}</p>
              <div className="au">
                <div className="av">{t.initials}</div>
                <div>
                  <div className="h">{t.handle}</div>
                  <div className="r">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
