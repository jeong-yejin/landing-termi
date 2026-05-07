import { Apple } from './RxIcons';

type FK = { x: number; y: number; w?: number; h?: number; glyph?: string; lime?: boolean; dim?: boolean };

const finalKeys: FK[] = [
  { x: 60, y: 0, glyph: 'Q', dim: true },
  { x: 110, y: 0, glyph: 'W', dim: true },
  { x: 160, y: 0, glyph: 'E', dim: true },
  { x: 210, y: 0, glyph: 'R', dim: true },
  { x: 260, y: 0, glyph: 'T', dim: true },
  { x: 310, y: 0, glyph: 'Y', dim: true },
  { x: 360, y: 0, glyph: 'U', dim: true },
  { x: 410, y: 0, glyph: 'I', dim: true },
  { x: 460, y: 0, glyph: 'O', dim: true },
  { x: 510, y: 0, glyph: 'P', dim: true },

  { x: 80, y: 50, glyph: 'A', dim: true },
  { x: 130, y: 50, glyph: 'S', dim: true },
  { x: 180, y: 50, glyph: 'D', dim: true },
  { x: 230, y: 50, glyph: 'F', dim: true },
  { x: 280, y: 50, glyph: 'G', dim: true },
  { x: 330, y: 50, glyph: 'H', dim: true },
  { x: 380, y: 50, glyph: 'J', dim: true },
  { x: 430, y: 50, glyph: 'K', lime: true },
  { x: 480, y: 50, glyph: 'L', dim: true },

  { x: 100, y: 100, glyph: 'Z', dim: true },
  { x: 150, y: 100, glyph: 'X', dim: true },
  { x: 200, y: 100, glyph: 'C', dim: true },
  { x: 250, y: 100, glyph: 'V', dim: true },
  { x: 300, y: 100, glyph: 'B', lime: true },
  { x: 350, y: 100, glyph: 'N', dim: true },
  { x: 400, y: 100, glyph: 'M', dim: true },

  { x: 0, y: 150, glyph: 'fn', dim: true },
  { x: 50, y: 150, glyph: '⌃', dim: true },
  { x: 100, y: 150, glyph: '⌥', dim: true },
  { x: 150, y: 150, w: 60, glyph: '⌘', lime: true },
  { x: 210, y: 150, w: 240, glyph: 'EXECUTE', lime: true },
  { x: 450, y: 150, w: 60, glyph: '⌘', dim: true },
  { x: 510, y: 150, glyph: '⌥', dim: true },
];

export default function RxFinalCTA() {
  return (
    <section className="rx-final" id="download">
      <div className="rx-final-bg" />
      <div className="rx-container">
        <div className="rx-final-kbd">
          <div className="stage">
            {finalKeys.map((k, i) => {
              const w = k.w ?? 42;
              const h = k.h ?? 42;
              return (
                <div
                  key={i}
                  className={`key ${k.lime ? 'lime' : ''} ${k.dim ? 'dim' : ''}`}
                  style={{ left: k.x, top: k.y, width: w, height: h, fontSize: k.glyph && k.glyph.length > 2 ? 10 : 12 }}
                >
                  {k.glyph}
                </div>
              );
            })}
          </div>
        </div>

        <h2>Trade everywhere. <span className="accent">Get paid back.</span></h2>
        <p>Free to start. Connect your first exchange in 30 seconds.</p>

        <div className="rx-final-ctas">
          <a href="#download" className="rx-btn-primary"><Apple /> Download for macOS</a>
          <a href="#pricing" className="rx-btn-ghost">⌘ View pricing</a>
        </div>

        <div className="rx-final-version">
          <span>v0.9.4</span>
          <span className="sep">·</span>
          <span>macOS 13+</span>
          <span className="sep">·</span>
          <span>Windows beta</span>
          <span className="sep">·</span>
          <span>Linux soon</span>
        </div>
      </div>
    </section>
  );
}
