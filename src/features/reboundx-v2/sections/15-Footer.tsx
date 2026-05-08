import { footerCols } from '../data/footer';

export default function Footer() {
  return (
    <footer className="rx-footer">
      <div className="rx-container">
        <div className="rx-footer-cols">
          <div className="rx-footer-brand">
            <div className="logo"><span className="mark">R</span> ReboundX</div>
            <p>One terminal for every exchange. Built for traders who count milliseconds — and prefer their fees back.</p>
            <div className="rx-footer-version">
              v0.9.4 · status: <span className="rx-status-up">● operational</span>
            </div>
          </div>
          {footerCols.map(c => (
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
