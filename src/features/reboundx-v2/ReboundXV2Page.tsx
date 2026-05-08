import { useEffect } from 'react';
import './styles/reboundx-v2.css';

import Nav from './sections/01-Nav';
import Hero from './sections/02-Hero';
import Proof from './sections/03-Proof';
import Testimonials from './sections/04-Testimonials';
import FeatureStateAware from './sections/05-FeatureStateAware';
import FeatureCompare from './sections/06-FeatureCompare';
import FeatureChat from './sections/07-FeatureChat';
import FeatureInfo from './sections/08-FeatureInfo';
import FeatureRebates from './sections/09-FeatureRebates';
import FeatureWorkflow from './sections/10-FeatureWorkflow';
import TerminalUsage from './sections/11-TerminalUsage';
import Benefits from './sections/12-Benefits';
import FAQ from './sections/13-FAQ';
import CTABanner from './sections/14-CTABanner';
import Footer from './sections/15-Footer';

export default function ReboundXV2() {
  useEffect(() => {
    document.body.classList.add('rx-body');
    return () => { document.body.classList.remove('rx-body'); };
  }, []);

  return (
    <div className="rx">
      <Nav />
      <Hero />
      <Proof />
      <Testimonials />
      <FeatureStateAware />
      <FeatureCompare />
      <FeatureChat />
      <FeatureInfo />
      <FeatureRebates />
      <FeatureWorkflow />
      <TerminalUsage />
      <Benefits />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
