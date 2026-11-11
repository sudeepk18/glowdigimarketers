import { Link, Navigate, useParams } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import LeadForm from '../components/LeadForm';
import { SERVICE_BY_SLUG, SERVICES } from '../data/servicesData';

export default function ServiceDetailPage({ fixedSlug }) {
  const params = useParams();
  const slug = fixedSlug || params.slug;
  const service = SERVICE_BY_SLUG[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.shortDescription}
        parentLabel="Services"
        parentTo="/services"
      />

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Glowdigimarketers Service</span>
            <h2>{service.title}</h2>
            <p>{service.intro}</p>
            <p>{service.closing}</p>
            <Link to="/contact-us" className="btn btn--primary" style={{ marginTop: 8 }}>
              Request Custom Quote
            </Link>
          </div>

          <div>
            <img
              src={service.heroImage}
              alt={service.title}
              style={{ borderRadius: 16, boxShadow: 'var(--shadow-md)' }}
            />
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          {service.sections.map((section) => (
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
            <img
              src={service.secondaryImage}
              alt={`${service.title} workflow`}
              style={{ borderRadius: 16, boxShadow: 'var(--shadow-md)', marginBottom: 24 }}
            />
            <h3>Explore Other Data Services</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link key={s.slug} to={`/${s.slug}`} className="btn btn--outline">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <LeadForm
            heading={`Get Started with ${service.title}`}
            defaultService={service.title}
          />
        </div>
      </section>
    </>
  );
}

