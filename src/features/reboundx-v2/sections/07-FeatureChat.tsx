import { chatMessages } from '../data/features';

export default function FeatureChat() {
  return (
    <section className="rx-feat">
      <div className="rx-container">
        <div className="rx-feat-grid">
          <div className="rx-feat-text">
            <span className="tag"><span className="num">03</span> Live trader rooms</span>
            <h3>Read the room — <span className="rx-accent">from the terminal.</span></h3>
            <p>
              Per-symbol rooms with verified traders, whale alerts, and funding shifts —
              right next to the order ticket. Stop flipping between Discord, X, and Telegram for context.
            </p>
            <div className="rx-feat-bullets">
              <div className="b"><span className="check">✓</span> Per-symbol rooms · verified-trader signals</div>
              <div className="b"><span className="check">✓</span> Whale moves and funding flips auto-pinned</div>
              <div className="b"><span className="check">✓</span> Slash-share size, entry, PNL — no screenshots</div>
            </div>
          </div>

          <div className="rx-feat-vis">
            <div className="rx-chat">
              <div className="rx-chat-head">
                <span className="sym">BTC/USDT</span>
                <span className="dot" />
                <span className="status">live</span>
                <span className="grow" />
                <span className="count">247 traders</span>
              </div>

              <div className="rx-chat-stream">
                {chatMessages.map((m, i) =>
                  m.kind === 'sys' ? (
                    <div key={i} className="rx-chat-msg sys">
                      <span className="ico">▲</span>
                      <span>{m.body}</span>
                      <span className="pin">pinned</span>
                    </div>
                  ) : (
                    <div key={i} className="rx-chat-msg">
                      <div className="rx-chat-msg-head">
                        <span className="who">
                          @{m.who}
                          {m.verified && <span className="verified">✓</span>}
                        </span>
                        <span className="time">{m.time}</span>
                      </div>
                      <div className="body">{m.body}</div>
                      {m.chipPos && (
                        <div className="rx-chat-chip pos">
                          <span className="lbl">{m.chipPos.side}</span>
                          <span className="val">{m.chipPos.size}</span>
                          <span className="px">@ {m.chipPos.px}</span>
                        </div>
                      )}
                      {m.chipPnl && (
                        <div className="rx-chat-chip pnl">
                          <span className="lbl">PNL</span>
                          <span className="val">{m.chipPnl.value}</span>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>

              <div className="rx-chat-input">
                <span className="cmd"><em>/share</em> 0.5 BTC long @ 67,140 …</span>
                <span className="hint">⏎</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
