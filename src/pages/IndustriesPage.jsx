import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { INDUSTRIES } from '../data/industriesData';

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        title="Industries"
        subtitle="Targeted B2B email lists and verified decision-maker databases across key global industries."
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {INDUSTRIES.map((ind) => (
              <div key={ind.slug} className="card">
                <img src={ind.image} alt={ind.title} className="card__img" />
                <h3>{ind.title}</h3>
                <p>{ind.intro.slice(0, 130)}...</p>
                <Link to={`/${ind.slug}`} className="btn btn--primary">
                  Read More <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

