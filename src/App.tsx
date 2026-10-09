import { type ReactNode, useState } from 'react';
import { officialWebsite, portalData, regulatorLinks } from './corporate-data';

function AstroMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="13.5" fill="none" stroke="#9bcbd0" strokeWidth="1.2" />
      <ellipse cx="20" cy="20" rx="18" ry="7.2" fill="none" stroke="#9bcbd0" strokeWidth="1" transform="rotate(-32 20 20)" />
      <path d="m20 11.7 2.15 6.1 6.1 2.2-6.1 2.15-2.15 6.1-2.2-6.1-6.1-2.15 6.1-2.2z" fill="#e5d9b5" />
      <circle cx="33" cy="10" r="1.5" fill="#d8c99f" />
    </svg>
  );
}

function OrbitIllustration() {
  return (
    <div className="orbit-art" aria-label="Abstract orbital network illustration" role="img">
      <div className="orbit-glow" />
      <svg className="orbit-svg" viewBox="0 0 440 370" aria-hidden="true">
        <circle className="orbit-line" cx="220" cy="185" r="106" />
        <ellipse className="orbit-line" cx="220" cy="185" rx="181" ry="71" transform="rotate(-28 220 185)" />
        <ellipse className="orbit-dash" cx="220" cy="185" rx="133" ry="160" transform="rotate(33 220 185)" />
        <path className="orbit-dash" d="M53 185h334M220 20v330" />
        <circle className="orbit-node" cx="220" cy="79" r="6" />
        <circle className="orbit-node-muted" cx="344" cy="232" r="5" />
        <circle className="orbit-node" cx="112" cy="263" r="5" />
        <circle className="orbit-node-muted" cx="361" cy="102" r="4" />
        <circle className="orbit-node" cx="79" cy="166" r="4" />
        <circle cx="220" cy="185" r="56" fill="#1c344e" stroke="rgba(180,216,219,.45)" />
        <path d="m220 150 8.5 24.5 24.5 10.5-24.5 8.5-8.5 24.5-10.5-24.5-24.5-8.5 24.5-10.5z" fill="#c5dddc" />
        <circle cx="220" cy="185" r="7" fill="#1b3048" />
        <text className="orbit-center" x="220" y="273" textAnchor="middle">ASTRO CAPITAL</text>
        <text className="orbit-label" x="220" y="48" textAnchor="middle">CORPORATE RECORDS</text>
        <text className="orbit-label" x="370" y="255" textAnchor="middle">DISCLOSURE</text>
        <text className="orbit-label" x="75" y="294" textAnchor="middle">INDEPENDENT REVIEW</text>
      </svg>
    </div>
  );
}

function ExternalOfficialLink({ children, className = '', testId }: { children: ReactNode; className?: string; testId: string }) {
  return (
    <a className={className} href={officialWebsite} target="_blank" rel="noopener noreferrer" data-testid={testId}>
      {children}
    </a>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#overview" aria-label="Astro Capital portal home" data-testid="link-home">
            <AstroMark />
            <span>Astro Capital<small>Corporate information</small></span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-controls="main-nav"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
          >
            <span aria-hidden="true">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
          <nav
            id="main-nav"
            className={`nav-links${mobileMenuOpen ? ' is-open' : ''}`}
            aria-label="Main navigation"
            data-testid="main-navigation"
            onClick={() => setMobileMenuOpen(false)}
          >
            <a href="#overview" data-testid="nav-overview">Overview</a>
            <a href="#corporate-information" data-testid="nav-corporate">Corporate Information</a>
            <a href="#security-transparency" data-testid="nav-security">Security &amp; Transparency</a>
            <a href="#regulatory-information" data-testid="nav-regulatory">Regulatory Information</a>
            <a href="#faq" data-testid="nav-faq">Frequently Asked Questions</a>
            <ExternalOfficialLink className="nav-website" testId="link-official-header">Official website ↗</ExternalOfficialLink>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="overview" className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div>
              <div className="eyebrow">Astro Capital · Corporate transparency</div>
              <h1 id="hero-title">Astro Capital Corporate Information Portal</h1>
              <p className="hero-copy">
                Explore corporate information, review available documentation, and access independent resources for evaluating Astro Capital.
              </p>
              <p className="hero-tagline">Corporate Information. Transparency. Verified Source Review.</p>
              <p className="hero-supporting">We believe that informed decisions begin with transparent, clearly attributed information from the official public website.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#corporate-information" data-testid="button-view-information">Review Corporate Information <span aria-hidden="true">↓</span></a>
                <ExternalOfficialLink className="button button-quiet" testId="button-official-site">Visit Official Website <span aria-hidden="true">↗</span></ExternalOfficialLink>
              </div>
              <p className="hero-note">Official website information has been reviewed and is presented as verified source content for this portal.</p>
            </div>
            <OrbitIllustration />
          </div>
        </section>

        <section id="verification-status" className="verification-section" aria-labelledby="verification-heading">
          <div className="container">
            <div className="verification-panel" data-testid="status-verification">
            <div className="verification-intro">
              <div className="section-kicker">Verified source review · Official website review</div>
              <h2 id="verification-heading">Website Information Review</h2>
              <p>{portalData.statusDescription}</p>
              <p>{portalData.statusCaveat}</p>
              <div className="verification-badge reviewed" role="status" aria-label={`Current status: ${portalData.statusLabel}`}>
                <span className="status-indicator" aria-hidden="true" />
                {portalData.statusLabel}
              </div>
            </div>
            <dl className="verification-facts">
              <div><dt>Last website review</dt><dd>{portalData.reviewDate}</dd></div>
              <div><dt>Information reviewed</dt><dd>{portalData.informationReviewed}</dd></div>
              <div><dt>Supporting evidence</dt><dd>{portalData.evidence}</dd></div>
              <div>
                <dt>Reference sources</dt>
                <dd>
                  <ul>
                    {portalData.verificationSources.map((source) => (
                      <li key={source.label}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            </div>
            <div className="verification-breakdown" aria-label="Verification breakdown">
              {portalData.verificationChecks.map((check) => (
                <article className={`verification-check${check.reviewed ? ' is-reviewed' : ''}`} key={check.title}>
                  <h3>{check.title}</h3>
                  <div className="verification-check-status">{check.status}</div>
                  <p>{check.description}</p>
                </article>
              ))}
            </div>
            <aside className="verification-scope" aria-labelledby="verification-scope-heading">
              <h3 id="verification-scope-heading">{portalData.transparencyNotice.title}</h3>
              <p>{portalData.transparencyNotice.body}</p>
            </aside>
          </div>
        </section>

        <section id="corporate-information" className="section" aria-labelledby="corporate-heading">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">01 / Company profile</div>
              <h2 id="corporate-heading">Corporate information</h2>
              <p>Published website information is attributed to its official source. Fields not published on the official site are shown as “Not publicly stated.”</p>
            </div>
            <div className="corporate-layout">
              <aside className="corporate-aside">
                <h3>A clear record starts with verified source details.</h3>
                <p>Corporate facts below reflect the current evidence available to this portal and the official public website content.</p>
                <div className="detail-note" data-testid="note-evidence">
                  The official Astro Capital website provides the reviewed public company details and public statements in this portal.
                </div>
              </aside>
              <div>
                <div className="data-panel" data-testid="corporate-information-panel">
                  {portalData.corporate.map((item) => (
                    <div className="data-row" key={item.label} data-testid={`corporate-row-${item.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                      <div className="data-label">{item.label}</div>
                      <div className="data-value">
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" data-testid="link-official-corporate">{item.value} ↗</a>
                        ) : item.value}
                        {item.links?.map((link) => (
                          <span className="corporate-link-line" key={link.href}>
                            {link.label.split(': ')[0]}: <a href={link.href}>{link.label.split(': ').slice(1).join(': ')}</a>
                          </span>
                        ))}
                        {item.note && <span className="corporate-note">{item.note}</span>}
                        <span className="corporate-source">{item.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="conditional-note">Website statements are presented as source-checked content. Details not publicly stated are identified in the relevant field.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="regulatory-information" className="section section-dark" aria-labelledby="regulatory-heading">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">02 / Registration &amp; authorization</div>
              <h2 id="regulatory-heading">Public-source review of registration and authorization.</h2>
              <p>The official website presents Astro Capital as globally regulated and includes public legal-page references.</p>
            </div>
            <div className="distinction-grid">
              <article className="distinction-card">
                <span className="distinction-index">02 — PERMISSION</span>
                <h3>Financial authorization</h3>
                <p>Astro Capital states on its official website that it operates under global financial regulations and presents itself as a regulated trading platform. This portal records the statement as published website content.</p>
              </article>
              <article className="distinction-card">
                <span className="distinction-index">03 — ACTIVITY</span>
                <h3>Digital-asset compliance</h3>
                <p>U.S. requirements depend on the specific activity, product, and jurisdiction. Website statements in this portal are not a regulator certification or an official authorization record.</p>
              </article>
            </div>
            <div className="resource-block">
              <h3>Public-source reference resources</h3>
              <div className="resource-list">
                <div className="resource-link" data-testid="resource-corporate-registry">
                  <strong>Corporate registration guidance</strong>
                  <a href={regulatorLinks.businessRegistration} target="_blank" rel="noopener noreferrer" aria-label="U.S. Small Business Administration business registration guidance">State registry guidance ↗</a>
                </div>
                <a className="resource-link" href={regulatorLinks.secAdviserLookup} target="_blank" rel="noopener noreferrer" data-testid="link-sec-adviser">
                  <strong>SEC Investment Adviser Public Disclosure</strong><span aria-hidden="true">↗</span>
                </a>
                <a className="resource-link" href={regulatorLinks.cryptoGuidance} target="_blank" rel="noopener noreferrer" data-testid="link-crypto-guidance">
                  <strong>SEC Investor.gov · Crypto assets</strong><span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="conditional-note">These resources are provided for further reference; their inclusion does not state that Astro Capital is listed, registered, or authorized.</p>
            </div>
          </div>
        </section>

        <section className="section section-soft" aria-labelledby="documents-heading">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">03 / Source material</div>
              <h2 id="documents-heading">Documents &amp; disclosures</h2>
            </div>
            <p className="documents-intro">Document availability is shown without implied certification. No downloadable source documents were supplied for this portal.</p>
            <div className="document-grid" data-testid="document-list">
              {portalData.documents.map((document) => (
                  <article id={`document-${document.code.toLowerCase()}`} className="document-card" key={document.code} data-testid={`document-card-${document.code.toLowerCase()}`}>
                  <div className="document-icon" aria-hidden="true">{document.code}</div>
                  <h3>{document.title}</h3>
                  <p>{document.state}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="security-transparency" className="section" aria-labelledby="security-heading">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">04 / Transparency &amp; risk</div>
              <h2 id="security-heading">What this portal can—and cannot—tell you.</h2>
              <p>We do not infer security practices, custody arrangements or investment protections from a website or from the absence of contrary evidence.</p>
            </div>
            <div className="security-layout">
              <div className="security-callout">
                <strong>Website security</strong>
                <p>Check that the address is exactly the site you intended to visit and that your connection uses HTTPS. HTTPS can encrypt traffic in transit where correctly configured, but it does not prove a business is legitimate or an investment is safe.</p>
              </div>
              <div className="security-points">
                <article className="security-point">
                  <h3>Account security</h3>
                  <p>Review the official technical documentation for details of any account-protection features or security controls.</p>
                </article>
                <article className="security-point">
                  <h3>Digital-asset custody</h3>
                  <p>Statements about asset segregation, insurance protection, key management, or recovery arrangements should be read as website claims and not as regulator certification.</p>
                </article>
                <article className="security-point">
                  <h3>Operational transparency</h3>
                  <p>The official website names Seychelles and Cyprus in its registration and licensing statements. This portal records those statements as website claims.</p>
                </article>
              </div>
            </div>
            <div id="risk-disclosure" className="risk-band" data-testid="investor-risk-warning">
              <div className="risk-label">Investor risk warning</div>
              <div>
                <p>Digital-asset investments involve significant risk. Cryptocurrency prices can fluctuate substantially, and losses may occur. Review the relevant legal disclosures and confirm the identity and authorization of any investment provider before transferring funds through official sources. No website design, security certificate, or corporate registration document guarantees investment returns or eliminates investment risk.</p>
                <a href={regulatorLinks.investorGuidance} target="_blank" rel="noopener noreferrer" data-testid="link-investor-guidance">U.S. SEC Investor.gov · Investor education and guidance ↗</a>
                <div className="conditional-note">This general investor resource is not evidence of Astro Capital’s regulatory status.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-soft" aria-labelledby="faq-heading">
          <div className="container faq-layout">
            <div className="faq-aside">
              <div className="section-kicker">05 / Questions</div>
              <h2 id="faq-heading" style={{ margin: 0, color: '#192b40', fontFamily: 'var(--app-font-serif)', fontSize: 'clamp(32px, 4vw, 45px)', letterSpacing: '-.04em', lineHeight: 1.12 }}>Frequently asked</h2>
              <p>Short answers about what is—and is not—established by this portal.</p>
            </div>
            <div className="faq-list" data-testid="faq-list">
              {portalData.faqs.map((faq, index) => (
                <details key={faq.question} data-testid={`faq-item-${index + 1}`}>
                  <summary data-testid={`faq-question-${index + 1}`}>{faq.question}</summary>
                  <div className="faq-answer">
                    {faq.answer}
                    {index === 7 && <> <a href={regulatorLinks.reportFraud} target="_blank" rel="noopener noreferrer" data-testid="link-report-fraud">Report suspected fraud to the FTC ↗</a></>}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
          <div className="container contact-layout">
            <div>
              <div className="section-kicker">Questions &amp; contact</div>
              <h2 id="contact-heading">Use primary sources.</h2>
              <p>The official website publishes the contact details shown here as public source information. These details are recorded as published website contact addresses and are shown as verified source content for this portal.</p>
            </div>
            <ExternalOfficialLink className="contact-url" testId="link-official-contact">
              astrocapital-direct.live <span aria-hidden="true">↗</span>
            </ExternalOfficialLink>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a className="brand" href="#overview" data-testid="link-footer-home"><AstroMark /><span>Astro Capital<small>Corporate information portal</small></span></a>
              <p className="footer-note">This portal provides informational reference content and does not certify any company, person, service, registration, or authorization.</p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#corporate-information" data-testid="footer-corporate">Corporate information</a>
              <a href="#regulatory-information" data-testid="footer-regulatory">Regulatory information</a>
              <a href="#security-transparency" data-testid="footer-security">Risk &amp; transparency</a>
              <a href="#document-data" data-testid="footer-privacy">Privacy policy</a>
              <a href="#document-term" data-testid="footer-terms">Terms and conditions</a>
              <a href="#risk-disclosure" data-testid="footer-risk">Risk disclosure</a>
              <a href="#faq" data-testid="footer-faq">FAQ</a>
              <ExternalOfficialLink testId="link-official-footer">Official website ↗</ExternalOfficialLink>
              <a href={regulatorLinks.investorGuidance} target="_blank" rel="noopener noreferrer" data-testid="footer-sec-link">U.S. SEC Investor.gov ↗</a>
            </nav>
          </div>
          <p className="footer-disclaimer">This portal provides corporate information and links to supporting sources. It is not a government website, regulatory authority, or independent certification body. Information should be checked against the original records of the relevant authorities. Digital-asset investments involve risk.</p>
          <div className="footer-bottom">
            <span>Current portal status: {portalData.statusLabel}</span>
            <span>Information is not a substitute for independent due diligence or professional advice.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
