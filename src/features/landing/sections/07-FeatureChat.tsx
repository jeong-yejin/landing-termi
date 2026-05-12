/* "One terminal. Every market." — planet/globe section */

const imgSphere  = 'https://www.figma.com/api/mcp/asset/33bba0e1-24b0-4a01-84bf-9bdf07f71663';
const imgDetails = 'https://www.figma.com/api/mcp/asset/38525bea-5e9a-4b9b-9263-c0288c4faf8a';
const imgRim     = 'https://www.figma.com/api/mcp/asset/e803efe5-bd46-487e-9cc3-7a4a6d65cbf3';

export default function OneTerminal() {
  return (
    <section className="rx-lonet">

      {/* Top separator gradient line */}
      <div className="rx-lonet-sep" aria-hidden />

      <div className="rx-lonet-inner">

        {/* Heading */}
        <h2 className="rx-lonet-h2">
          One terminal.<br />Every market.
        </h2>

        {/* Planet illustration */}
        <div className="rx-lonet-planet" aria-hidden>
          <div className="rx-lonet-planet-glow" />
          <img className="rx-lonet-planet-sphere"  src={imgSphere}  alt="" />
          <img className="rx-lonet-planet-details" src={imgDetails} alt="" />
          <img className="rx-lonet-planet-rim"     src={imgRim}     alt="" />
          <div className="rx-lonet-planet-fade" />
        </div>

        {/* Subtext */}
        <p className="rx-lonet-sub">
          From exchange connections to live trader chat, ReboundX Terminal brings trading and community into one workflow.
        </p>

      </div>
    </section>
  );
}
