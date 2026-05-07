import { footerCols } from '@/features/landing/data/content';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <a href="#" className="logo">
              <span className="logo-mark" />
              ReboundX
            </a>
            <p className="foot-brand">
              Trading terminal + rebate engine. One workspace, every venue, fees back on every fill.
            </p>
          </div>
          {footerCols.map((col) => (
            <div className="foot-col" key={col.heading}>
              <h5>{col.heading}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© 2026 ReboundX Labs · Trading involves risk · Not financial advice</span>
          <span className="status">
            <span className="dot" />All systems operational · 99.97% uptime
          </span>
        </div>
      </div>
    </footer>
  );
}
