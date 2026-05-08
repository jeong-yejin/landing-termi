import type { UsageStep } from '../data/types';
import { Check } from './Icons';

export function StepBadge({ num }: { num: number }) {
  return (
    <span className="rx-step-badge">{num}</span>
  );
}

export function StepScreenshot({ stepNum, title }: { stepNum: number; title: string }) {
  return (
    <div className="rx-step-img">
      <img src={`/guide/Asset/Step-${stepNum}.webp`} alt={`${title} screenshot`} />
      <div className="rx-step-img-gloss" />
    </div>
  );
}

export function StepCard({
  step,
  isActive,
  onActivate,
}: {
  step: UsageStep;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <div
      className={`rx-step-card ${isActive ? 'active' : ''}`}
      onMouseEnter={onActivate}
    >
      {/* Active expanded content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          gap: 24,
          padding: 32,
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? 'auto' : 'none',
          transition: 'opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: isActive ? '180ms' : '0ms',
        }}
      >
        {/* Left text panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: 16,
            paddingBottom: 16,
            flexShrink: 0,
            width: 232,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'opacity 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: isActive ? '220ms' : '0ms',
            }}
          >
            <StepBadge num={step.num} />
            <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--rx-text)', lineHeight: 1.35 }}>
              {step.title}
            </span>
          </div>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {step.items.map((item, i) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 8,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                  transition: 'opacity 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: isActive ? `${260 + i * 65}ms` : '0ms',
                }}
              >
                {step.listStyle === 'check' ? (
                  <span style={{ marginTop: 2, flexShrink: 0, color: 'var(--rx-lime)' }}>
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                ) : (
                  <span
                    style={{
                      marginTop: 2,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      border: '1px solid rgba(202,255,93,0.5)',
                      fontSize: 10,
                      fontWeight: 700,
                      color: 'var(--rx-lime)',
                      lineHeight: 1,
                    }}
                  >
                    {i + 1}
                  </span>
                )}
                <span style={{ fontSize: 14, color: 'var(--rx-text-soft)', lineHeight: 1.5 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshot */}
        <StepScreenshot stepNum={step.num} title={step.title} />
      </div>

      {/* Folded collapsed content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 24,
          paddingBottom: 24,
          opacity: isActive ? 0 : 1,
          pointerEvents: isActive ? 'none' : 'auto',
          transition: 'opacity 0.2s cubic-bezier(0.16,1,0.3,1)',
          transitionDelay: isActive ? '0ms' : '60ms',
        }}
      >
        <StepBadge num={step.num} />
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: 'var(--rx-text)',
              whiteSpace: 'nowrap',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            {step.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export function StepDots({
  active,
  count,
  onChange,
}: {
  active: number;
  count: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="rx-step-dots">
      {Array.from({ length: count }, (_, i) => i + 1).map(n => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`Go to step ${n}`}
          className={`rx-step-dot ${active === n ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
