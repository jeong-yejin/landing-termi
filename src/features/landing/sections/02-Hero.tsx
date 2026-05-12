export default function Hero() {
  return (
    <section className="rx-lhero">
      {/* Purple radial glow — top centre */}
      <div className="rx-lhero-glow" aria-hidden />

      {/* ── Top badge + heading + subtitle ── */}
      <div className="rx-lhero-upper">
        <div className="rx-lhero-container">

          {/* Pill badge */}
          <div className="rx-lhero-badge">
            <span>All-in-One Trading Hub</span>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden>
              <path d="M1.5 1L6.5 6L1.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="rx-lhero-h1">
            Trade<br />multiple exchanges<br />from one terminal
          </h1>

          {/* Subtitle */}
          <p className="rx-lhero-sub">
            Real-time charts, order books, and execution — all in one focused workspace.<br />
            Connect exchanges only when you trade.
          </p>

          {/* CTA */}
          <a href="/trade" className="rx-lhero-cta">
            <span>Get started</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

        </div>
      </div>

      {/* ── Screenshot + stars + arc ── */}
      <div className="rx-lhero-shot-wrap">
        {/* Star particles */}
        <div className="rx-lhero-stars" aria-hidden>
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '30%',  top: '55%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '32%',  top: '57%' }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '28%',  top: '60%' }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '19%',  top: '65%', opacity: 0.11 }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '23%',  top: '58%' }} />
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '13%',  top: '66%', opacity: 0.11 }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '15%',  top: '70%' }} />
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '43%',  top: '47%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '47%',  top: '43%' }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '55%',  top: '37%' }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '60%',  top: '28%' }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '63%',  top: '32%' }} />
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '70%',  top: '20%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '75%',  top: '15%' }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '80%',  top: '18%' }} />
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '85%',  top: '12%', opacity: 0.11 }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '52%',  top: '50%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '66%',  top: '42%' }} />
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '78%',  top: '25%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '38%',  top: '52%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '90%',  top: '10%', opacity: 0.11 }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '8%',   top: '72%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '22%',  top: '62%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '36%',  top: '44%' }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '48%',  top: '40%', opacity: 0.11 }} />
          <div className="rx-lhero-star" style={{ width: 2.35, height: 2.35, left: '58%',  top: '22%', opacity: 0.30 }} />
          <div className="rx-lhero-star" style={{ width: 1.76, height: 1.76, left: '72%',  top: '8%'  }} />
          <div className="rx-lhero-star" style={{ width: 1.17, height: 1.17, left: '88%',  top: '5%', opacity: 0.30 }} />
        </div>

        <div className="rx-lhero-shot">
          <div className="rx-lhero-shot-overlay rx-lhero-shot-overlay--left"   aria-hidden />
          <div className="rx-lhero-shot-overlay rx-lhero-shot-overlay--purple" aria-hidden />
          <div className="rx-lhero-shot-overlay rx-lhero-shot-overlay--top"    aria-hidden />
          <img
            src="/guide/Asset/Step-1.webp"
            alt="ReboundX Terminal"
            className="rx-lhero-shot-img"
          />
        </div>

        {/* Dark oval arc — separates hero from next section */}
        <div className="rx-lhero-arc" aria-hidden />
      </div>
    </section>
  );
}
