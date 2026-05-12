const EXCHANGE_ICONS = [
  { code: 'BY', label: 'Bybit',       size: 48, color: '#F7A600' },
  { code: 'OX', label: 'OKX',         size: 64, color: '#E8E8E8' },
  { code: 'BN', label: 'Binance',     size: 80, color: '#F0B90B' },
  { code: 'HL', label: 'Hyperliquid', size: 64, color: '#00CFAB' },
  { code: 'CB', label: 'Coinbase',    size: 48, color: '#5B8DEF' },
];

export default function Integrations() {
  return (
    <section className="rx-lsect">
      <div className="rx-lsect-inner">

        <div className="rx-lsect-head">
          <h2>One terminal. Every market.</h2>
          <p>From exchange connections to live trader chat, ReboundX Terminal brings trading and community into one workflow.</p>
        </div>

        {/* Exchange cluster with R logo in center */}
        <div className="rx-linteg-cluster">
          {EXCHANGE_ICONS.slice(0, 2).map(e => (
            <div
              key={e.code}
              className="rx-linteg-circle"
              title={e.label}
              style={{ '--sz': `${e.size}px`, '--clr': e.color } as React.CSSProperties}
            >
              <span>{e.code}</span>
            </div>
          ))}

          {/* Center R logo */}
          <div className="rx-linteg-circle rx-linteg-circle--r" title="ReboundX">
            <span>R</span>
          </div>

          {EXCHANGE_ICONS.slice(2).map(e => (
            <div
              key={e.code}
              className="rx-linteg-circle"
              title={e.label}
              style={{ '--sz': `${e.size}px`, '--clr': e.color } as React.CSSProperties}
            >
              <span>{e.code}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
