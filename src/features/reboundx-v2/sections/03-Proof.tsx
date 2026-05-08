import { exchangeLogos } from '../data/proof';

export default function Proof() {
  return (
    <section className="rx-proof">
      <div className="rx-container">
        <div className="rx-proof-head">Trade across the markets that move</div>
        <div className="rx-proof-row">
          {exchangeLogos.map(l => (
            <span key={l.code} className="logo">
              <span className="swatch">{l.code}</span>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
