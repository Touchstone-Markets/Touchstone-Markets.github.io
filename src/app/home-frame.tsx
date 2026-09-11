import Image from "next/image";
import { MarketTickers } from "./market-tickers";

export function HomeFrame() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="brand-mark">
          <span>touchstone markets</span>
        </div>
        <span className="masthead-note">Market verification layer</span>
      </header>

      <section
        className="hero-stage"
        aria-label="Touchstone Markets slogan"
      >
        <Image
          src="/brand/hero-mountain.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="hero-kicker">Independent resolution infrastructure</p>
          <h1 className="hero-title">
            <span>Open infrastructure for</span>
            <span>verifiable markets.</span>
          </h1>
        </div>
      </section>

      <MarketTickers />
    </main>
  );
}
