import { useSmoothScroll } from '@/shared/hooks/useSmoothScroll';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Stats from './components/Stats';
import BentoGrid from './components/BentoGrid';
import Hotkeys from './components/Hotkeys';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Landing() {
  useSmoothScroll();

  return (
    <>
      <Nav />
      <Hero />
      <TrustedBy />
      <Stats />
      <BentoGrid />
      <Hotkeys />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
