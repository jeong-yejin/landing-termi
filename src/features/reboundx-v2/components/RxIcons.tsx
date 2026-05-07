export const ArrowRight = ({ width = 12, height = 12 }: { width?: number; height?: number }) => (
  <svg width={width} height={height} viewBox="0 0 12 12" fill="none">
    <path d="M2 6h8m0 0L6 2m4 4L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Apple = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 12.04c-.03-3.04 2.49-4.5 2.61-4.57-1.42-2.08-3.64-2.36-4.42-2.39-1.88-.19-3.67 1.11-4.62 1.11-.97 0-2.43-1.08-4-1.05-2.05.03-3.96 1.19-5.02 3.03-2.14 3.71-.55 9.21 1.54 12.22 1.02 1.48 2.24 3.13 3.85 3.07 1.55-.06 2.13-1 4-1 1.86 0 2.4 1 4.03.97 1.66-.03 2.71-1.5 3.72-2.99 1.18-1.71 1.66-3.36 1.69-3.45-.04-.01-3.24-1.24-3.27-4.91zM14.43 4.05C15.27 3.03 15.83 1.62 15.68.21c-1.21.05-2.67.8-3.54 1.82-.78.91-1.46 2.36-1.28 3.74 1.34.1 2.71-.68 3.57-1.72z" />
  </svg>
);

export const Plus = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path d="M5.5 1.83v7.34M1.83 5.5h7.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Play = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
    <path d="M2 1.5v7L8.5 5 2 1.5z" />
  </svg>
);

export const Sparkline = ({ trend = 'up' }: { trend?: 'up' | 'dn' }) => {
  const path = trend === 'up'
    ? 'M0 28 L10 24 L20 26 L30 18 L40 20 L50 12 L60 14 L70 6 L80 8 L90 2'
    : 'M0 4 L10 8 L20 6 L30 14 L40 12 L50 20 L60 18 L70 26 L80 24 L90 30';
  const color = trend === 'up' ? 'var(--rx-up)' : 'var(--rx-down)';
  return (
    <svg viewBox="0 0 90 32" preserveAspectRatio="none">
      <path d={path} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
