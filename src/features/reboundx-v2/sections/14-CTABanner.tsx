// Glow images: replace with /public/guide/glow-a.webp and glow-b.webp once assets are in place
const GLOW_A = '/guide/glow-a.webp';
const GLOW_B = '/guide/glow-b.webp';

export default function CTABanner() {
  return (
    <section className="rx-cta-section">
      <div className="rx-cta-inner">
        <img
          src={GLOW_A}
          alt=""
          aria-hidden
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            left: 172,
            top: -166,
            width: 556,
            opacity: 0.5,
            mixBlendMode: 'plus-lighter',
          }}
        />
        <img
          src={GLOW_B}
          alt=""
          aria-hidden
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            left: 123,
            top: -209,
            width: 655,
            opacity: 0.35,
            mixBlendMode: 'plus-lighter',
          }}
        />
        <div className="rx-cta-content">
          <h2>Discover Funding Rates Across Exchanges</h2>
          <p>Compare funding rates in real time and spot opportunities before you trade.</p>
          <a href="/funding-rate" className="rx-cta-btn">
            Explore Funding Rates
          </a>
        </div>
      </div>
    </section>
  );
}
