export const SERVICES = [
  {
    slug: 'geo-targeted-email-list',
    title: 'Geo-Targeted Email List',
    shortDescription:
      'Boost your campaigns with verified country-wise, state-wise, and region-specific B2B contact lists.',
    heroImage: '/images/service-geo.jpg',
    secondaryImage: '/images/ind-finance.jpg',
    intro:
      'It can get challenging to maintain legitimate dataset quality, but with our Geo-Targeted Email List and Data Appending Services, you can make your existing and outreach data truly valuable—delivering reliable, qualitative results to fuel your marketing campaigns and funnel quality leads.',
    sections: [
      {
        heading: 'Our Mailing List of Geo-Targeted Professionals Includes',
        items: [
          'Country-wise data',
          'State-wise data',
          'State-wise data with zip code',
          'Industry-specific data',
          'Region-specific data',
        ],
      },
      {
        heading: 'Key Benefits of Our Geo-Targeted Mailing Database',
        items: [
          'Owning business email addresses of geo-targeted professionals',
          'Owning country-wise email lists',
          'Fueling your pipeline with high-quality region-specific sales leads',
          'High ROI and better conversion rates',
          'Gearing up email marketing campaigns with accurate, authentic data',
        ],
      },
    ],
    closing:
      'Boost your business with our B2B mailing lists, reach the right decision-makers in your targeted geographic area, and convert them into long-term clients.',
  },
  {
    slug: 'b2b-list-building',
    title: 'B2B List Building',
    shortDescription:
      'Custom-built prospect lists tailored by industry, geography, job role, and verified contact channels.',
    heroImage: '/images/service-b2b-1.jpg',
    secondaryImage: '/images/service-b2b-2.jpg',
    intro:
      'B2B List Building is the process of compiling verified contacts of decision-makers who match your ideal customer profile. A progressive B2B database gives your sales and marketing teams accurate direct access to key professionals in your chosen industry without wasting weeks on stale records.',
    sections: [
      {
        heading: 'Customize Your List Building Services By',
        items: [
          'Company Names',
          'Industry Professionals',
          'Geographic Location',
          'Demographics',
          'Job Role & Seniority',
          'Phone Numbers',
          'Verified Emails',
        ],
      },
      {
        heading: 'Benefits of B2B List Building',
        items: [
          'Easily deliver messages directly to target customers inboxes',
          'Bring website visitors back with targeted follow-ups',
          'Personalized, direct 1-to-1 communication',
          'Full ownership of your marketing list—immune to social algorithm changes',
          'Build long-term trust and accelerate customer acquisition',
          'Reduce prospect acquisition cost and expand market influence',
        ],
      },
    ],
    closing:
      'Whether you run email marketing, telemarketing, or direct mail campaigns, our custom list building services align cleanly with your exact business goals.',
  },
  {
    slug: 'data-enrichment',
    title: 'Data Enrichment',
    shortDescription:
      'Supplement and verify existing CRM records with missing contact, company, and behavioral attributes.',
    heroImage: '/images/service-data-enrichment.jpg',
    secondaryImage: '/images/service-data-enrichment-2.jpg',
    intro:
      'Data enhancement simplifies your database for consistent, efficient, and accurate reporting. Through multi-level market research and verification, we augment your existing records with fresh public and verified fields—so even when contacts change roles or companies relocate, your CRM stays actionable.',
    sections: [
      {
        heading: 'Benefits of B2B Data Enhancement Services',
        items: [
          'Improves your business decisions',
          'Boosts business productivity',
          'Improves customer experience and client trust',
          'Upscales the overall value of your CRM data',
          'Helps you understand your customers better',
          'Drives higher campaign response rates',
          'Simplifies data management and employee workflows',
        ],
      },
      {
        heading: 'How We Improve Your Database',
        items: [
          'Adding relevant fields to your customer file and cleaning outdated data',
          'Scanning the entire database and maintaining consistent formatting',
          'Verifying the accuracy of each record and removing duplicates',
          'Reducing bad contacts and delivering fast turnaround savings',
        ],
      },
    ],
    closing:
      'Keeping your data clean, current, ethically acquired, and complete is the most effective way to combat data decay and outperform competitors.',
  },
  {
    slug: 'data-cleansing',
    title: 'Data Cleansing',
    shortDescription:
      'Detect, correct, and remove corrupt, duplicate, or outdated records to eliminate data decay.',
    heroImage: '/images/service-data-cleansing.jpg',
    secondaryImage: '/images/service-data-cleansing-2.jpg',
    intro:
      'Data cleansing is the systematic process of detecting, correcting, and removing incomplete, inaccurate, duplicate, or obsolete records from your database. Clean data protects your sender reputation, stops wasted outreach spend, and keeps you ahead of rapid data decay.',
    sections: [
      {
        heading: 'What Our Data Cleansing & Licensing Services Ensure',
        items: [
          'Eliminating stale records before they pollute your CRM',
          'Standardized, uniform formatting across all fields',
          'Monthly, quarterly, and annual database licensing updates',
          'Higher email deliverability and stronger campaign ROI',
        ],
      },
      {
        heading: 'Licensee & Cleansing Services Include',
        items: [
          'Mailing lists & Master Databases',
          'Fulfillment & Consultation',
          'Specialized Market Research',
          'Email Campaigns & Tele-verification',
          'Information Processing & Deduplication',
        ],
      },
    ],
    closing:
      'We run our master database through frequent electronic and phone verification cycles so your team always campaigns with valid, up-to-date contacts.',
  },
  {
    slug: 'data-appending',
    title: 'Data Appending',
    shortDescription:
      'Fill missing emails, phone numbers, social profiles, and URLs in your existing B2B database.',
    heroImage: '/images/service-data-appending.jpg',
    secondaryImage: '/images/service-email-global.jpg',
    intro:
      'Your operational and marketing success depends heavily on having complete prospect contact points. With our B2B Data Appending Services, we match your existing customer or prospect records against our verified master database to fill missing email addresses, phone numbers, and profile attributes.',
    sections: [
      {
        heading: 'Benefits of B2B Data Appending',
        items: [
          'Reaching the right customers and prospects at the relevant time',
          'Increasing engagement across multi-channel marketing campaigns',
          'Improving the accuracy, relevancy, and value of your database',
          'Reducing data management costs through higher data quality',
        ],
      },
      {
        heading: 'Our Data Appending Capabilities',
        items: [
          'Contact Appending',
          'Email Appending',
          'Social Profile Appending',
          'URL Appending',
          'Phone Appending',
          'Exhibitors Data Appending',
        ],
      },
    ],
    closing:
      'Revamp your existing prospect list and unlock multi-channel B2B outreach without starting from scratch.',
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

