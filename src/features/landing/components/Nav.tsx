import { useNavScroll } from '@/shared/hooks/useNavScroll';
import { navLinks } from '@/features/landing/data/content';

export default function Nav() {
  const scrolled = useNavScroll();

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark" />
          ReboundX
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost">Sign in</a>
          <a href="#cta-final" className="btn btn-primary">Open terminal</a>
        </div>
      </div>
    </nav>
  );
}
