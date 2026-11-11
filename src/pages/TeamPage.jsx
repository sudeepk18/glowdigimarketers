import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { COMPANY_INFO, TEAM_MEMBERS } from '../data/siteData';

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Our Team"
        subtitle="Meet the leadership and data specialists powering Glow Digi Marketers Inc."
        parentLabel="About Us"
        parentTo="/about-us"
      />

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">About Us</span>
            <h2>We Help Clients Discover New Customer Opportunities</h2>
            <p>
              We&apos;re in this business since {COMPANY_INFO.since} &amp; we provide best-in-class
              B2B data intelligence and direct marketing support.
            </p>

            <div className="skill-bar">
              <div className="skill-bar__head">
                <span>Business Skills</span>
                <span>95%</span>
              </div>
              <div className="skill-bar__track">
                <div className="skill-bar__fill" style={{ width: '95%' }} />
              </div>
            </div>

            <div className="skill-bar">
              <div className="skill-bar__head">
                <span>Successful Projects</span>
                <span>88%</span>
              </div>
              <div className="skill-bar__track">
                <div className="skill-bar__fill" style={{ width: '88%' }} />
              </div>
            </div>

            <Link to="/about-us" className="btn btn--outline" style={{ marginTop: 10 }}>
              More About Us <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <img
              src="/images/about-vvvv.jpg"
              alt="Glow Digi Marketers Team"
              style={{ borderRadius: 16, boxShadow: 'var(--shadow-md)' }}
            />
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Meet Our Team</span>
            <h2>Our Leadership Team</h2>
          </div>

          <div className="grid-3">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="card" style={{ textAlign: 'center' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="card__img"
                  style={{ height: 260, objectPosition: 'top' }}
                />
                <h3 style={{ marginBottom: 4 }}>{member.name}</h3>
                <p style={{ color: 'var(--color-purple)', fontWeight: 500, marginBottom: 0 }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

