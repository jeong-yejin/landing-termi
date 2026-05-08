import { workflowSteps } from '../data/features';

export default function FeatureWorkflow() {
  return (
    <section className="rx-feat">
      <div className="rx-container">
        <div className="rx-feat-grid reverse">
          <div className="rx-feat-text rx-feat-text--end">
            <span className="tag"><span className="num">06</span> Connected workflow</span>
            <h3>Discovery → Trade → Track. One thread.</h3>
            <p>
              Positions stay anchored to the signal that opened them. P&amp;L lives next to the chart.
              Performance attribution maps trades back to the data that triggered them.
            </p>
            <div className="rx-feat-bullets">
              <div className="b"><span className="check">✓</span> Trade context preserved across sessions</div>
              <div className="b"><span className="check">✓</span> Replay any trade with the original market state</div>
              <div className="b"><span className="check">✓</span> Per-strategy P&amp;L without spreadsheet math</div>
            </div>
          </div>

          <div className="rx-feat-vis">
            <div className="rx-flow">
              {workflowSteps.map(s => (
                <div className="rx-flow-step" key={s.ix}>
                  <span className="ix">{s.ix}</span>
                  <div>
                    <div className="nm">{s.nm}</div>
                    <div className="ds">{s.ds}</div>
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
