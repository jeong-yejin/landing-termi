const imgRLogo = 'https://www.figma.com/api/mcp/asset/5baf5f9f-48b9-4101-b771-74411c78be2a';

export default function CTABanner() {
  return (
    <section className="rx-lcta">
      <div className="rx-lcta-glow" aria-hidden />

      {/* App icon */}
      <div className="rx-lcta-icon">
        <img src={imgRLogo} alt="ReboundX" width="52" height="52" />
      </div>

      <h2 className="rx-lcta-h2">
        Built for pro traders.<br />Ready today
      </h2>

      <div className="rx-lcta-actions">
        <a href="/trade" className="rx-lcta-btn rx-lcta-btn--border">
          <span>Start trading</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
