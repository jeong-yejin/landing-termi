import { marketRows } from '../data/features';

export default function FeatureStateAware() {
  return (
    <section className="rx-feat" id="features">
      <div className="rx-container">
        <div className="rx-feat-grid">
          <div className="rx-feat-text">
            <span className="tag"><span className="num">01</span> State-aware terminal</span>
            <h3>Discover, then trade. Without switching tools.</h3>
            <p>
              Before connection, ReboundX is a market explorer. After connection, every cell is
              actionable. Same workspace. No mode switching. No second app.
            </p>
            <div className="rx-feat-bullets">
              <div className="b"><span className="check">✓</span> Read-only browse mode for unconnected markets</div>
              <div className="b"><span className="check">✓</span> One-click activation per venue once API is linked</div>
              <div className="b"><span className="check">✓</span> Visual state cues never let you trade the wrong account</div>
            </div>
          </div>

          <div className="rx-feat-vis">
            <div className="rx-state">
              <div className="rx-state-divider" />

              <div className="rx-state-col">
                <h6>
                  <span>Disconnected</span>
                  <span className="rx-state-mode">browse only</span>
                </h6>
                {marketRows.map(r => (
                  <div className="row" key={r.sym}>
                    <span>{r.sym}</span>
                    <span className="px">{r.px}</span>
                    <span className="up">{r.delta}</span>
                  </div>
                ))}
                <div className="rx-state-hint rx-state-hint--dim">Connect API to trade →</div>
              </div>

              <div className="rx-state-col live">
                <h6>
                  <span>Connected · Hyperliquid</span>
                  <span className="rx-state-live">live</span>
                </h6>
                {marketRows.map(r => (
                  <div className="row" key={r.sym}>
                    <span>{r.sym}</span>
                    <span className="px">{r.px}</span>
                    <span className="act">⌘B trade</span>
                  </div>
                ))}
                <div className="rx-state-hint rx-state-hint--lime">▸ ⌘K to open command palette</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
