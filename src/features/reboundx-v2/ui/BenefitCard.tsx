import type { Benefit } from '../data/types';

const BTN = 64;
const PAD = 15;
const NOTCH = BTN + PAD; // 79px

export function BenefitCard({ title, body }: Benefit) {
  return (
    <div className="rx-benefit-card">
      {/* Concave notch filler — covers card's rounded TR corner */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 2,
          background: 'var(--rx-bg)',
          pointerEvents: 'none',
          width: NOTCH + 1,
          height: NOTCH + 1,
          borderBottomLeftRadius: BTN,
        }}
      />

      {/* Card surface */}
      <div className="rx-benefit-surface">
        <span className="rx-benefit-title">{title}</span>
        <p className="rx-benefit-body">{body}</p>
      </div>

      {/* Circular arrow button */}
      <div
        className="rx-benefit-btn"
        style={{ width: BTN, height: BTN, top: PAD, right: PAD }}
      >
        {/* ↗ default arrow */}
        <svg
          width="32" height="32" viewBox="0 0 32 32" fill="none"
          className="rx-benefit-arrow-ne"
          aria-hidden
        >
          <path
            d="M5 15L15 5M15 5H7M15 5V13"
            stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
        {/* → hover arrow */}
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          className="rx-benefit-arrow-e"
          aria-hidden
        >
          <path
            d="M4 10H16M16 10L10 4M16 10L10 16"
            stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
