import { ArrowRight } from '@/shared/ui/icons/LandingIcons';

export default function FinalCTA() {
  return (
    <section className="cta-final" id="cta-final">
      <div className="container">
        <h2>
          Stop running six tabs. <em>Start earning.</em>
        </h2>
        <p>
          Connect your first exchange in 30 seconds. Read-only API key works.
          No card. Disconnect any time, no data retained.
        </p>
        <div className="btns">
          <a href="#" className="btn btn-primary btn-large">
            Open the terminal — free
            <ArrowRight className="btn-arrow" />
          </a>
          <a href="#" className="btn btn-ghost btn-large">Read the docs</a>
        </div>
        <div className="cta-microcopy">
          Or <a href="#">join the Discord →</a> · 23,400+ traders already connected
        </div>
      </div>
    </section>
  );
}
