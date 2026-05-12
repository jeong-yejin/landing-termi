import { useEffect } from 'react';
import './styles/landing.css';

import Nav         from './sections/01-Nav';
import Hero        from './sections/02-Hero';
import Proof       from './sections/03-Proof';
import Features    from './sections/05-Features';
import OneTerminal from './sections/07-FeatureChat';
import Bento       from './sections/06-FeatureCompare';
import CTABanner   from './sections/14-CTABanner';
import Footer      from './sections/15-Footer';

export default function LandingPage() {
  useEffect(() => {
    document.body.classList.add('rx-body');
    return () => { document.body.classList.remove('rx-body'); };
  }, []);

  return (
    <div className="rx">
      <Nav />
      <Hero />
      <Proof />
      <Features />
      <OneTerminal />
      <Bento />
      <CTABanner />
      <Footer />
    </div>
  );
}
