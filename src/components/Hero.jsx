export default function Hero({ config }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__eyebrow">{config.label}</p>
        <h1 className="hero__title" id="hero-title">
          {config.title}
        </h1>
        <p className="hero__subtitle">{config.subtitle}</p>
      </div>

      <a href="#timeline" className="hero__scroll" aria-label="Scroll to timeline">
        <span className="hero__scroll-text">Scroll</span>
        <svg
          className="hero__scroll-arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <line x1="8" y1="2" x2="8" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          <polyline points="4,9 8,13 12,9" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
