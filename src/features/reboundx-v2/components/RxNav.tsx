export default function RxNav() {
  return (
    <nav className="rx-nav">
      <div className="rx-nav-inner">
        <a href="#" className="rx-nav-logo">
          <span className="mark">R</span>
          ReboundX
        </a>
        <div className="rx-nav-links">
          <a href="#features">Product</a>
          <a href="#exchanges">Exchanges</a>
          <a href="#rebates">Rebates</a>
          <a href="#faq">FAQ</a>
          <a href="#docs">Docs</a>
        </div>
        <div className="rx-nav-cta">
          <a href="#login" style={{ fontSize: 14, color: 'var(--rx-text-soft)' }}>Sign in</a>
          <a href="#download" className="rx-btn-primary" style={{ padding: '8px 14px', fontSize: 13 }}>Download</a>
        </div>
      </div>
    </nav>
  );
}
