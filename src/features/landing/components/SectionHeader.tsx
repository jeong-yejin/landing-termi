import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
};

export default function SectionHeader({ eyebrow, title, lead }: Props) {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <header className="section-header reveal" ref={ref}>
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}
