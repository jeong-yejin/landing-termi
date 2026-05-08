import { compareExchanges } from '../data/features';

export default function FeatureCompare() {
  return (
    <section className="rx-feat" id="exchanges">
      <div className="rx-container">
        <div className="rx-feat-grid reverse">
          <div className="rx-feat-text rx-feat-text--end">
            <span className="tag"><span className="num">02</span> Cross-exchange comparison</span>
            <h3>See every market at once.</h3>
            <p>
              Compare prices, depth, funding, and fees across 12+ venues in real time.
              Route to the best venue with a single keystroke.
            </p>
            <div className="rx-feat-bullets">
              <div className="b"><span className="check">✓</span> Real-time spread &amp; depth across CEX and perp DEX</div>
              <div className="b"><span className="check">✓</span> Funding-rate diff alerts for arbitrage windows</div>
              <div className="b"><span className="check">✓</span> One-key routing to the best-priced venue</div>
            </div>
          </div>

          <div className="rx-feat-vis">
            <div className="rx-ex-grid">
              {compareExchanges.map(e => (
                <div key={e.code} className={`rx-ex-card ${e.best ? 'best' : ''}`}>
                  <div className="name">
                    <span className="swatch">{e.code}</span>
                    {e.name}
                  </div>
                  <div className="px">{e.px}</div>
                  <div className="meta">
                    <span><b>spr</b> <span className="v">{e.spread}</span></span>
                    <span>
                      <b>fund</b>{' '}
                      <span className={`v ${parseFloat(e.funding) > 0.02 ? 'dn' : 'up'}`}>
                        {e.funding}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
