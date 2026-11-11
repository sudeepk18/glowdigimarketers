import { Link } from 'react-router-dom';
import { ArrowRight, Award, Star } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PartnersStrip from '../components/PartnersStrip';
import { COMPANY_INFO, CORE_VALUES } from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="We combine strategy, creativity, and verified B2B data intelligence to accelerate client growth."
      />

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">About Us</span>
            <h2>We Use Creativity To Get Our Clients</h2>
            <p>
              We believe that growth is achieved when an organization has a clear strategy and
              delivers exceptional customer experiences. We do both, through a combination of
              strategy, creativity, and technology that helps drive growth for our clients&apos;
              brands and businesses.
            </p>
            <p>
              We help clients discover new customer opportunities with a comprehensive line of
              business postal and email lists, data services, and direct marketing solutions. With
              accurate lists compiled from trusted sources, we deliver affordable solutions on time,
              every time.
            </p>
            <p>
              We help clients unlock the full potential of their online and offline presence and
              deploy an analytics-driven, zero-friction initiative that translates into actionable
              insights in a noisy digital environment.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 20 }}>
              <Link to="/our-team" className="btn btn--primary">
                Meet Our Team <ArrowRight size={16} />
              </Link>
              <Link to="/contact-us" className="btn btn--outline">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/images/about-us.png"
              alt="About Glow Digi Marketers"
              style={{ borderRadius: 16, boxShadow: 'var(--shadow-md)' }}
            />
          </div>
        </div>
      </section>

      <PartnersStrip />

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">What We Do</span>
            <h2>Fresh Ideas for Every Business</h2>
            <p>
              Trusted by 25,000+ happy clients with 10k+ positive reviews since {COMPANY_INFO.since}.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            {CORE_VALUES.map((val) => (
              <div key={val.title} className="card">
                <div className="card__icon">
                  <Award size={22} />
                </div>
                <h3>{val.title}</h3>
                <p style={{ marginBottom: 0 }}>{val.description}</p>
              </div>
            ))}
          </div>

          <div
            className="card"
            style={{
              marginTop: 32,
              background: 'var(--color-surface-pink)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Star size={24} color="var(--color-accent)" />
              <div>
                <strong>10k+ Positive Reviews</strong>
                <div style={{ fontSize: '0.9rem' }}>
                  25,000+ happy clients growing with our B2B databases
                </div>
              </div>
            </div>
            <Link to="/services" className="btn btn--primary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

