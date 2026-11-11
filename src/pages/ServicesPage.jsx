import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { SERVICES } from '../data/servicesData';

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive B2B email lists, data management, enrichment, cleansing, and appending services."
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((service) => (
              <div key={service.slug} className="card">
                <img src={service.heroImage} alt={service.title} className="card__img" />
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <Link to={`/${service.slug}`} className="btn btn--primary">
                  Learn More <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

