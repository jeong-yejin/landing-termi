import { benefits } from '../data/benefits';
import { BenefitCard } from '../ui/BenefitCard';

export default function Benefits() {
  return (
    <section className="rx-benefits">
      <div className="rx-section-head">
        <h2>Benefits of using the Terminal</h2>
        <p>Trade in one flow, make better decisions with funding data, and earn rebates.</p>
      </div>
      <div className="rx-benefit-cards">
        {benefits.map(b => (
          <BenefitCard key={b.title} title={b.title} body={b.body} />
        ))}
      </div>
    </section>
  );
}
