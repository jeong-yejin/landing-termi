const EXCHANGES = [
  { alt: 'Bybit',   src: '/guide/logos/bybit.svg',   width: 108, height: 36 },
  { alt: 'OKX',     src: '/guide/logos/okx.svg',     width: 107, height: 30 },
  { alt: 'Binance', src: '/guide/logos/binance.svg', width: 180, height: 36 },
];

export default function Proof() {
  return (
    <section className="rx-lproof">
      <div className="rx-lproof-inner">

        <div className="rx-lproof-text">
          <p className="rx-lproof-text-dim">Trusted by traders worldwide.</p>
          <p className="rx-lproof-text-bright">Verified futures exchanges integrated with ReboundX Terminal</p>
        </div>

        <div className="rx-lproof-logos">
          {EXCHANGES.map(e => (
            <span key={e.alt} className="rx-lproof-logo">
              <img src={e.src} alt={e.alt} width={e.width} height={e.height} />
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
