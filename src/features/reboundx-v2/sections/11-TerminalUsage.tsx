import { useState } from 'react';
import { usageSteps } from '../data/steps';
import { StepCard, StepDots } from '../ui/StepCard';

const ACTIVE_W = 700;
const FOLDED_W = 96;
const GAP = 12;
const TOTAL_W = ACTIVE_W + FOLDED_W * (usageSteps.length - 1) + GAP * (usageSteps.length - 1);

function gridCols(activeNum: number): string {
  return usageSteps.map(s => s.num === activeNum ? `${ACTIVE_W}px` : `${FOLDED_W}px`).join(' ');
}

export default function TerminalUsage() {
  const [active, setActive] = useState(1);

  return (
    <section className="rx-usage">
      <div className="rx-section-head">
        <h2>Terminal Usage</h2>
        <p>Learn how to navigate the terminal and place trades step by step.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: gridCols(active),
          gap: `${GAP}px`,
          width: `${TOTAL_W}px`,
          transition: 'grid-template-columns 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'grid-template-columns',
        }}
      >
        {usageSteps.map(step => (
          <StepCard
            key={step.num}
            step={step}
            isActive={active === step.num}
            onActivate={() => setActive(step.num)}
          />
        ))}
      </div>

      <StepDots active={active} count={usageSteps.length} onChange={setActive} />
    </section>
  );
}
