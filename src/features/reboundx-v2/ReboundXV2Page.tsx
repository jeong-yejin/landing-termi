import { useEffect } from 'react';
import './styles/reboundx-v2.css';

import RxNav from './components/RxNav';
import RxHero from './components/RxHero';
import RxProof from './components/RxProof';
import RxTestimonials from './components/RxTestimonials';
import RxFeatureStateAware from './components/RxFeatureStateAware';
import RxFeatureCompare from './components/RxFeatureCompare';
import RxFeatureChat from './components/RxFeatureChat';
import RxFeatureInfo from './components/RxFeatureInfo';
import RxFeatureRebates from './components/RxFeatureRebates';
import RxFeatureWorkflow from './components/RxFeatureWorkflow';
import RxObjections from './components/RxObjections';
import RxFAQ from './components/RxFAQ';
import RxFinalCTA from './components/RxFinalCTA';
import RxFooter from './components/RxFooter';

export default function ReboundXV2() {
  useEffect(() => {
    document.body.classList.add('rx-body');
    return () => { document.body.classList.remove('rx-body'); };
  }, []);

  return (
    <div className="rx">
      <RxNav />
      <RxHero />
      <RxProof />
      <RxTestimonials />
      <RxFeatureStateAware />
      <RxFeatureCompare />
      <RxFeatureChat />
      <RxFeatureInfo />
      <RxFeatureRebates />
      <RxFeatureWorkflow />
      <RxObjections />
      <RxFAQ />
      <RxFinalCTA />
      <RxFooter />
    </div>
  );
}
