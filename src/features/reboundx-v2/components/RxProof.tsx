const logos = [
  { code: 'BN', name: 'Binance' },
  { code: 'BB', name: 'Bybit' },
  { code: 'OK', name: 'OKX' },
  { code: 'BG', name: 'Bitget' },
  { code: 'CB', name: 'Coinbase' },
  { code: 'KR', name: 'Kraken' },
  { code: 'HL', name: 'Hyperliquid' },
  { code: 'DX', name: 'dYdX' },
  { code: 'GM', name: 'GMX' },
  { code: 'DR', name: 'Drift' },
  { code: 'VT', name: 'Vertex' },
  { code: 'JP', name: 'Jupiter' },
];

export default function RxProof() {
  return (
    <section className="rx-proof">
      <div className="rx-container">
        <div className="rx-proof-head">Trade across the markets that move</div>
        <div className="rx-proof-row">
          {logos.map(l => (
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
