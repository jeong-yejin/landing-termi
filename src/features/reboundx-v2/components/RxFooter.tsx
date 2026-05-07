const cols = [
  {
    h: 'Product',
    links: ['Terminal', 'Exchanges', 'Rebates', 'Pro', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    h: 'Developers',
    links: ['Local API', 'Bot bridge', 'Docs', 'Status', 'GitHub'],
  },
  {
    h: 'Company',
    links: ['About', 'Manifesto', 'Press kit', 'Careers', 'Contact'],
  },
  {
    h: 'Legal',
    links: ['Privacy', 'Terms', 'Risk disclosure', 'Disclosures'],
  },
];

export default function RxFooter() {
  return (
    <footer className="rx-footer">
      <div className="rx-container">
        <div className="rx-footer-cols">
          <div className="rx-footer-brand">
            <div className="logo"><span className="mark">R</span> ReboundX</div>
            <p>One terminal for every exchange. Built for traders who count milliseconds — and prefer their fees back.</p>
            <div style={{ fontSize: 12, color: 'var(--rx-text-muted)', fontFamily: 'var(--rx-font-mono)', marginTop: 8 }}>
              v0.9.4 · status: <span style={{ color: 'var(--rx-up)' }}>● operational</span>
            </div>
          </div>
          {cols.map(c => (
            <div className="rx-footer-col" key={c.h}>
              <h6>{c.h}</h6>
              <ul>
                {c.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="rx-footer-bot">
          <span>© 2026 ReboundX Labs · Built for traders, paid by traders.</span>
          <div className="legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Risk</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
