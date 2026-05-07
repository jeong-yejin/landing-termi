const browseRows = [
  { sym: 'BTC-USD', px: '67,140.10', delta: '+1.42%' },
  { sym: 'ETH-USD', px: '3,492.40', delta: '+0.84%' },
  { sym: 'SOL-USD', px: '184.20', delta: '+2.10%' },
  { sym: 'HYPE-USD', px: '24.80', delta: '+5.20%' },
];
const liveRows = browseRows;

export default function RxFeatureStateAware() {
  return (
    <section className="rx-feat" id="features">
      <div className="rx-container">
        <div className="rx-feat-grid">
          <div className="rx-feat-text">
            <span className="tag"><span className="num">01</span> State-aware terminal</span>
            <h3>Discover, then trade. Without switching tools.</h3>
            <p>
              Before connection, ReboundX is a market explorer. After connection, every cell is actionable.
              Same workspace. No mode switching. No second app.
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
                  <span style={{ fontSize: 9, color: 'var(--rx-text-dim)' }}>browse only</span>
                </h6>
                {browseRows.map(r => (
                  <div className="row" key={r.sym}>
                    <span>{r.sym}</span>
                    <span className="px">{r.px}</span>
                    <span style={{ color: 'var(--rx-up)' }}>{r.delta}</span>
                  </div>
                ))}
                <div style={{ marginTop: 'auto', paddingTop: 8, fontSize: 10, color: 'var(--rx-text-dim)', borderTop: '1px dashed var(--rx-border)' }}>
                  Connect API to trade →
                </div>
              </div>

              <div className="rx-state-col live">
                <h6>
                  <span>Connected · Hyperliquid</span>
                  <span style={{ fontSize: 9 }}>live</span>
                </h6>
                {liveRows.map(r => (
                  <div className="row" key={r.sym}>
                    <span>{r.sym}</span>
                    <span className="px">{r.px}</span>
                    <span className="act">⌘B trade</span>
                  </div>
                ))}
                <div style={{ marginTop: 'auto', paddingTop: 8, fontSize: 10, color: 'var(--rx-lime)', fontFamily: 'var(--rx-font-mono)' }}>
                  ▸ ⌘K to open command palette
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
