import './UnderDevelopment.css';

export default function UnderDevelopment({title, children}) {
    return (
      <div className="container">
            <p className="under-development-banner" role="alert" aria-live="polite">
      This page is currently under development
    </p>
    <section aria-labelledby="about-title">
      <h1 id="about-title">{title}</h1>
      <div className="development-notice">
        {children}
      </div>
    </section>
      </div>
    );
  }