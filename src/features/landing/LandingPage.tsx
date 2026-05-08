import { useSmoothScroll } from '@/shared/hooks/useSmoothScroll';
import { TickerProvider } from '@/shared/context/TickerContext';
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
    <TickerProvider>
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
    </TickerProvider>
  );
}
