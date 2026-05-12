const COLS = [
  {
    head: 'Product',
    links: [
      { label: 'Features',      href: '/trade'         },
      { label: 'Integrations',  href: '#'              },
      { label: 'Pricing',       href: '#'              },
      { label: 'Changelog',     href: '#'              },
      { label: 'Docs',          href: '#'              },
      { label: 'Download',      href: '#'              },
    ],
  },
  {
    head: 'Company',
    links: [
      { label: 'About us',   href: '#' },
      { label: 'Blog',       href: '#' },
      { label: 'Careers',    href: '#' },
      { label: 'Customers',  href: '#' },
      { label: 'Brand',      href: '#' },
    ],
  },
  {
    head: 'Resources',
    links: [
      { label: 'Community',            href: '#' },
      { label: 'Contact',              href: '#' },
      { label: 'Privacy Policy',       href: '#' },
      { label: 'Terms of service',     href: '#' },
      { label: 'Report a vulnerability', href: '#' },
    ],
  },
  {
    head: 'Developers',
    links: [
      { label: 'API',    href: '#' },
      { label: 'Status', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
];

const SOCIALS = [
  {
    label: 'Telegram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.13.57-.46.71-.93.44l-2.6-1.92-1.25 1.21c-.14.14-.26.26-.53.26l.19-2.67 4.84-4.37c.21-.19-.05-.29-.32-.1L7.9 14.27 5.33 13.5c-.56-.17-.57-.56.12-.83l9.29-3.58c.47-.17.88.11.9.71z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
        <path d="M8.24 5.93L13.41 0h-1.23L7.69 5.16 4.09 0H0l5.42 7.89L0 14h1.23l4.74-5.51L9.91 14H14L8.24 5.93z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="rx-lfooter">
      <div className="rx-lfooter-inner">

        {/* Brand row */}
        <div className="rx-lfooter-top">
          <div className="rx-lfooter-brand">
            <div className="rx-lfooter-rmark">R</div>
            <span className="rx-lfooter-brand-name">REBOUNDX</span>
            <span className="rx-lfooter-brand-sep" />
            <span className="rx-lfooter-brand-sub">Designed for traders worldwide</span>
          </div>
          <div className="rx-lfooter-socials">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className="rx-lfooter-social">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 4-column link grid */}
        <div className="rx-lfooter-cols">
          {COLS.map(col => (
            <div key={col.head}>
              <p className="rx-lfooter-col-head">{col.head}</p>
              {col.links.map(l => (
                <a key={l.label} href={l.href} className="rx-lfooter-col-link">{l.label}</a>
              ))}
            </div>
          ))}
        </div>

        <p className="rx-lfooter-copy">© 2025 ReboundX. All Rights Reserved.</p>

      </div>
    </footer>
  );
}
