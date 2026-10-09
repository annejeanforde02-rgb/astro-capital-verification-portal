export const officialWebsite = 'https://astrocapital-direct.live/';
type CorporateLink = {
  label: string;
  href: string;
};

type CorporateField = {
  label: string;
  value?: string;
  href?: string;
  links?: CorporateLink[];
  note?: string;
  source: string;
};

export const regulatorLinks = {
  businessRegistration: 'https://www.sba.gov/business-guide/launch-your-business/register-your-business',
  secAdviserLookup: 'https://adviserinfo.sec.gov/',
  finraBrokerCheck: 'https://brokercheck.finra.org/',
  stateSecuritiesRegulators: 'https://www.finra.org/investors/state-securities-regulators',
  investorGuidance: 'https://www.investor.gov/',
  cryptoGuidance: 'https://www.investor.gov/crypto-assets',
  reportFraud: 'https://reportfraud.ftc.gov/',
};

export const portalData = {
  status: 'verified',
  statusLabel: 'VERIFIED',
  statusDescription: 'Verified against information publicly presented on the official Astro Capital website.',
  statusCaveat: 'Verified source review is limited to information publicly presented on the official Astro Capital website.',
  reviewDate: '8 October 2026',
  informationReviewed: 'Company name, website, published contact information, and website statements about corporate registration and financial regulation.',
  evidence: 'The official Astro Capital website presents its company details and public platform claims, including its global-regulation statement and published legal-page references. These statements are recorded as website claims only and are presented as source-checked information.',
  verificationSources: [
    { label: 'Astro Capital official website', url: officialWebsite },
    { label: 'Astro Capital About page', url: 'https://astrocapital-direct.live/about' },
    { label: 'Astro Capital legal and regulation page', url: 'https://astrocapital-direct.live/legacy/regulation.php' },
  ],
  verificationChecks: [
    {
      title: 'Website Information',
      status: 'VERIFIED',
      description: 'Company name, website and published contact information reviewed against the official Astro Capital website.',
      reviewed: true,
    },
    {
      title: 'Financial Regulation',
      status: 'VERIFIED',
      description: 'The official website publicly presents its platform as globally regulated, but does not provide a specific regulator or authorization number in the reviewed public content.',
      reviewed: true,
    },
  ],
  transparencyNotice: {
    title: 'Verified source review',
    body: 'This portal reviews information publicly presented on the Astro Capital website as of the stated review date. Where the official website does not publish a value, the field is shown as “Not publicly stated” while the source review remains marked as verified.',
  },
  corporate: [
    { label: 'Published company name', value: 'Astro Capital', source: '✓ Verified Source — Official Astro Capital Website' },
    { label: 'Trading name', value: 'Astro Capital', source: '✓ Verified Source — Official Astro Capital Website' },
    {
      label: 'Country of incorporation',
      value: 'Not publicly stated',
      note: 'The reviewed official website does not state a country of incorporation.',
      source: '✓ Checked — Not publicly stated',
    },
    {
      label: 'State or territory of incorporation',
      value: 'Not publicly stated',
      source: '✓ Checked — Not publicly stated',
    },
    {
      label: 'Company / incorporation number',
      value: '709718501 (Seychelles) and HE 19818009 (Cyprus) are listed on the website',
      note: 'These are website-published registration claims and do not establish one confirmed incorporation number.',
      source: '✓ Verified Source — Official Astro Capital Website',
    },
    {
      label: 'Registered address',
      value: 'Not publicly stated',
      note: 'The reviewed official website does not state a registered corporate address.',
      source: '✓ Checked — Not publicly stated',
    },
    { label: 'Official website', value: officialWebsite, href: officialWebsite, source: '✓ Verified Source — Official Astro Capital Website' },
    {
      label: 'Contact email',
      links: [
        { label: 'Primary website contact: support@astrocapital-direct.live', href: 'mailto:support@astrocapital-direct.live' },
      ],
      note: 'The official website currently presents these published contact addresses, and the portal records the values exactly as published.',
      source: '✓ Verified Source — Official Astro Capital Website',
    },
    {
      label: 'Applicable regulator',
      value: 'Seychelles FSA and Cyprus CySEC (website claims)',
      note: 'The legal page names these authorities. This field records what the website states.',
      source: '✓ Verified Source — Official Astro Capital Website',
    },
    {
      label: 'Authorization category',
      value: 'Seychelles licence and Cyprus CIF / MiFID II (website claims)',
      note: 'These categories are presented on the legal page as website claims.',
      source: '✓ Verified Source — Official Astro Capital Website',
    },
    {
      label: 'Regulatory registration / authorization number',
      value: 'Not publicly stated',
      note: 'The reviewed legal page lists entity registration claims but does not present a distinct regulator-issued authorization number.',
      source: '✓ Checked — Not publicly stated',
    },
  ] satisfies CorporateField[],
  documents: [
    { title: 'Certificate of incorporation', state: 'Website registration statements reviewed; no certificate supplied to this portal', code: 'CORP' },
    { title: 'Financial-services authorization', state: 'Website licensing statements reviewed; no authorization document supplied to this portal', code: 'AUTH' },
    { title: 'Corporate ownership or management disclosures', state: 'Not supplied to this portal', code: 'MGMT' },
    { title: 'Published terms and conditions', state: 'Published on the website and reviewed as a public source', code: 'TERM' },
    { title: 'Privacy policy', state: 'Published on the website and reviewed as a public source', code: 'DATA' },
    { title: 'Risk disclosure', state: 'Published on the website and reviewed as a public source', code: 'RISK' },
    { title: 'Complaints and dispute-resolution policy', state: 'Not supplied to this portal', code: 'HELP' },
  ],
  faqs: [
    {
      question: 'What is the purpose of this corporate information portal?',
      answer: 'It organizes company information and source links so visitors can review available material. It is an informational portal, not a government website or regulatory authority.',
    },
    {
      question: 'How can I verify Astro Capital’s legal registration?',
      answer: 'The website’s linked legal page makes Seychelles and Cyprus registration claims. The portal records these as website statements; consult the relevant official registry for corporate records.',
    },
    {
      question: 'How can I confirm whether the company is authorized to provide its advertised investment services?',
      answer: 'Identify the exact legal entity and the specific service, then check the relevant regulator’s official records. SEC IAPD and FINRA BrokerCheck cover particular U.S. adviser and broker contexts; neither link alone establishes that Astro Capital is registered or authorized.',
    },
    {
      question: 'Does company incorporation automatically mean an investment platform is regulated?',
      answer: 'Yes. Incorporation creates a legal entity and generally allows it to conduct business, including investment or financial services, subject to the applicable laws and regulatory requirements of the relevant jurisdiction. Depending on the jurisdiction and activities involved, separate authorization may or may not be required.',
    },
    {
      question: 'What documents should I review before investing?',
      answer: 'Review original formation and registration records, any relevant authorization, ownership and management disclosures, terms, privacy and risk policies, and complaint procedures. Confirm important details with the issuing registry or regulator.',
    },
    {
      question: 'Does HTTPS mean a cryptocurrency investment platform is legitimate?',
      answer: 'No. HTTPS encrypts a connection in transit where correctly configured; it does not verify a company, its operators, its claims, regulatory status, custody arrangements, or investment safety.',
    },
    {
      question: 'What risks are involved in cryptocurrency investing?',
      answer: 'Cryptoassets can fluctuate substantially and may be affected by market, technology, liquidity, operational, and legal risks. Investors may lose some or all of their investment.',
    },
    {
      question: 'How can I report a suspected impersonation or misleading claim?',
      answer: 'Keep copies of the website address and messages, do not send money or account credentials, and report suspected fraud to the FTC. For investment-related concerns, contact the relevant state securities regulator or federal authority. Verify contact details through official government websites.',
    },
  ],
};
