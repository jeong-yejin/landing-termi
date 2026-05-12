const NAV_LINKS = [
  { label: 'Trade',        href: '/trade'         },
  { label: 'Funding Rate', href: '/funding-rate'  },
  { label: 'Guide',        href: '/guide', active: true },
  { label: 'Community',    href: '/community'     },
  { label: 'Event',        href: '/event'         },
];

export default function Nav() {
  return (
    <nav className="rx-gnb">
      <div className="rx-gnb-inner">

        {/* Platform switcher */}
        <div className="rx-gnb-platform">
          <a href="/" className="rx-gnb-platform-item rx-gnb-platform-logo">
            <span className="rx-gnb-umbrella-logo">REBOUNDX</span>
          </a>
          <div className="rx-gnb-platform-item rx-gnb-platform-active">
            <span className="rx-gnb-terminal-text">Terminal</span>
          </div>
        </div>

        {/* Center nav */}
        <div className="rx-gnb-menu">
          {NAV_LINKS.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`rx-gnb-link${active ? ' rx-gnb-link--active' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="rx-gnb-right">
          <div className="rx-gnb-badge">
            <span className="rx-gnb-badge-dot" />
            <span className="rx-gnb-badge-text">Today +$0.00</span>
          </div>

          <a href="/deposit" className="rx-gnb-deposit">
            Deposit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8M7.5 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <button type="button" className="rx-gnb-icon-btn" aria-label="Notifications">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </button>

          <div className="rx-gnb-avatar" aria-label="Profile" role="button" />

          <div className="rx-gnb-divider" aria-hidden />

          <div className="rx-gnb-lang">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>EN</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </div>
    </nav>
  );
}
