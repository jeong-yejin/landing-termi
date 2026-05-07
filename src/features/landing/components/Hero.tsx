import Terminal from './Terminal';
import { ArrowRight, Check } from '@/shared/ui/icons/LandingIcons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <a href="#how" className="chip hero-chip">
          <span className="dot" />
          <span>$14.2M paid back to traders · live</span>
          <span className="arrow">→</span>
        </a>

        <h1>
          The terminal that <em>pays you back.</em>
        </h1>

        <p className="lead">
          Trade across 18 exchanges from one keyboard-first workspace.
          Route up to 50% of your trading fees back as rebates — automatically, on every fill.
        </p>

        <div className="hero-cta">
          <a href="#cta-final" className="btn btn-primary btn-large">
            Open the terminal — free
            <ArrowRight className="btn-arrow" />
          </a>
          <a href="#tiers" className="btn btn-ghost btn-large">
            Calculate your rebate
          </a>
        </div>

        <div className="hero-trust">
          <span><Check className="check" />Read-only API keys</span>
          <span><Check className="check" />Self-custody on DEX</span>
          <span><Check className="check" />No card required</span>
        </div>

        <div className="hero-terminal-wrap">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
