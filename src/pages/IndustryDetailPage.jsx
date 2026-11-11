import { Link, Navigate, useParams } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import LeadForm from '../components/LeadForm';
import { INDUSTRIES, INDUSTRY_BY_SLUG } from '../data/industriesData';

export default function IndustryDetailPage({ fixedSlug }) {
  const params = useParams();
  const slug = fixedSlug || params.slug;
  const industry = INDUSTRY_BY_SLUG[slug];

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <>
      <PageBanner
        title={industry.title}
        subtitle="Verified, segmented decision-maker contacts tailored for multi-channel B2B outreach."
        parentLabel="Industries"
        parentTo="/industries"
      />

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Glowdigimarketers Industry Database</span>
            <h2>{industry.title}</h2>
            <p>{industry.intro}</p>
            <Link to="/contact-us" className="btn btn--primary" style={{ marginTop: 8 }}>
              Request Industry Sample
            </Link>
          </div>

          <div>
            <img
              src={industry.image}
              alt={industry.title}
              style={{ borderRadius: 16, boxShadow: 'var(--shadow-md)' }}
            />
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          {industry.sections.map((section) => (
            <div key={section.heading} style={{ marginBottom: 40 }}>
              <h3>{section.heading}</h3>
              <ul className="feature-list">
                {section.items.map((item) => (
                  <li key={item}>
                    <ShieldCheck size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h3>Other Industries We Cover</h3>
            <p>
              Looking for multi-industry B2B targeting? Browse our full catalog of verified global
              industry mailing lists.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {INDUSTRIES.filter((i) => i.slug !== industry.slug).map((i) => (
                <Link key={i.slug} to={`/${i.slug}`} className="btn btn--outline">
                  {i.title}
                </Link>
              ))}
            </div>
          </div>

          <LeadForm
            heading={`Request ${industry.title} List`}
            defaultService="Geo-Targeted Email List"
          />
        </div>
      </section>
    </>
  );
}

