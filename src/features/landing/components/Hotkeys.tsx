import { useState } from 'react';
import { useScrollReveal } from '@/shared/hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import { Check, Search, Chart, Layout } from '@/shared/ui/icons/LandingIcons';
import { hotkeyTabs } from '@/features/landing/data/content';
import type { HotkeyTab, HotkeyTabId } from '@/features/landing/data/content';

const TAB_ICONS: Record<HotkeyTabId, React.ComponentType> = {
  orders: Check,
  markets: Search,
  positions: Chart,
  layout: Layout,
};

export default function Hotkeys() {
  const [active, setActive] = useState<HotkeyTabId>('orders');
  const ref = useScrollReveal<HTMLDivElement>();
  const tab: HotkeyTab = hotkeyTabs.find((t) => t.id === active)!;

  return (
    <section className="hotkeys" id="hotkeys">
      <div className="container">
        <SectionHeader
          eyebrow="Keyboard-first"
          title={<>Every action has a <em>hotkey.</em></>}
          lead="If your hands leave the keyboard, you're losing time. Every primary action — order entry, market switching, position close — is one keystroke away."
        />

        <div className="hk-wrap reveal" ref={ref}>
          <div className="hk-tabs" role="tablist">
            {hotkeyTabs.map((t) => {
              const Icon = TAB_ICONS[t.id];
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={active === t.id}
                  className={`hk-tab${active === t.id ? ' active' : ''}`}
                  onClick={() => setActive(t.id)}
                >
                  <span className="ic"><Icon /></span>
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="hk-content" role="tabpanel">
            <div className="hk-side">
              <h4>{tab.side.title}</h4>
              <p>{tab.side.body}</p>
              <div className="kbd-tip">
                <span className="accent">{tab.side.tipKey}</span>
                <span>{tab.side.tipDesc}</span>
              </div>
            </div>
            <div className="hk-list">
              {tab.rows.map((row, i) => (
                <div className="hk-row" key={`${tab.id}-${i}`}>
                  <div className="hk-keys">
                    {row.keys.map((k, ki) => (
                      <span className="kbd" key={ki}>{k}</span>
                    ))}
                  </div>
                  <span className="desc">{row.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
