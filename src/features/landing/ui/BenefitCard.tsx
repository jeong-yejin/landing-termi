import type { Benefit } from '../data/types';

function CardShape() {
  return (
    <svg
      aria-hidden
      preserveAspectRatio="none"
      viewBox="0 0 357 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <path
        d="M327 0H30C13.4315 0 0 13.4315 0 30V270C0 286.569 13.4315 300 30 300H239.5C256.069 300 269.5 286.569 269.5 270V238.5C269.5 221.931 282.931 208.5 299.5 208.5H327C343.569 208.5 357 195.069 357 178.5V30C357 13.4315 343.569 0 327 0Z"
        fill="var(--rx-card-fill, #171717)"
        style={{ transition: 'fill 380ms cubic-bezier(0.16,1,0.3,1)' }}
      />
      <path
        d="M30 0.5H327C343.292 0.5 356.5 13.7076 356.5 30V178.5C356.5 194.792 343.292 208 327 208H299.5C282.655 208 269 221.655 269 238.5V270C269 286.292 255.792 299.5 239.5 299.5H30C13.7076 299.5 0.5 286.292 0.5 270V30C0.500004 13.7076 13.7076 0.5 30 0.5Z"
        stroke="url(#card-border)"
        strokeOpacity="0.6"
      />
      <defs>
        <linearGradient id="card-border" x1="22.9202" y1="26.5823" x2="393.902" y2="168.211" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.5" />
          <stop offset="1" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 20, height: 20 }}
    >
      <rect width="20" height="20" rx="10" fill="white" />
      <path
        d="M6 14L13.68 6.32M7.6 6H14V12.4"
        stroke="#CAFF5D"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BenefitCard({ title, body }: Benefit) {
  return (
    <div className="rx-benefit-card">
      <CardShape />

      {/* Content */}
      <div className="rx-benefit-surface">
        <span className="rx-benefit-title">{title}</span>
        <p className="rx-benefit-body">{body}</p>
      </div>

      {/* Arrow button — top-right */}
      <div className="rx-benefit-btn" style={{ top: 15, left: 278 }}>
        <ArrowIcon />
      </div>
    </div>
  );
}
