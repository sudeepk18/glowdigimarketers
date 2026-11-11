import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Database,
  Globe2,
  Headphones,
  Layers,
  MailCheck,
  Quote,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import { COMPANY_INFO, REGIONS_SERVED, TESTIMONIALS } from '../data/siteData';
import { SERVICES } from '../data/servicesData';
import PartnersStrip from '../components/PartnersStrip';
import LeadForm from '../components/LeadForm';

const SERVICE_ICONS = [Globe2, Users, Sparkles, CheckCircle2, Database];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Frame the Marketing',
    description:
      'Define your ideal customer profile, geography, industry verticals, and multi-channel campaign objectives.',
  },
  {
    step: '02',
    title: 'Data Collection',
    description:
      'Compile and cross-verify business decision-makers from trusted opt-in and public B2B intelligence sources.',
  },
  {
    step: '03',
    title: 'Process and Delivery',
    description:
      'Cleanse, deduplicate, and deliver ready-to-launch CSV/XLS databases tailored to your workflow.',
  },
];

const WHY_CHOOSE = [
  {
    icon: Layers,
    title: 'First Working Process',
    description:
      'For startups and growing businesses, an online specialist develops a focused digital marketing and data plan to help you scale.',
  },
  {
    icon: Users,
    title: 'Dedicated Team Member',
    description:
      'Your dedicated consultant kickstarts campaigns and maximizes the return on your marketing budget.',
  },
  {
    icon: Headphones,
    title: '24/7 Hours Support',
    description:
      'We deliver reliable data products backed by responsive, round-the-clock client support.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">Glowdigimarketers • Since {COMPANY_INFO.since}</span>
            <h1>{COMPANY_INFO.tagline}</h1>
            <p>
              We believe growth is achieved when an organization has a clear strategy and delivers
              exceptional customer experiences—through strategy, creativity, and technology that
              drives brand growth.
            </p>
            <p>
              We help clients discover new customer opportunities with verified B2B postal and email
              lists, data enrichment services, and direct marketing solutions delivered on time.
            </p>
            <div className="hero__actions">
              <Link to="/contact-us" className="btn btn--accent">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)' }}>
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero__media">
            <img src="/images/hero-home.jpg" alt="Glow Digi Marketers B2B Data Solutions" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <img
              src="/images/creating-email.jpg"
              alt="B2B email marketing and data solutions"
              style={{ borderRadius: 16, boxShadow: 'var(--shadow-md)' }}
            />
          </div>

          <div>
            <span className="eyebrow">About Us</span>
            <h2>We Help Clients Discover New Customer Opportunities</h2>
            <p>
              We&apos;re in this business since {COMPANY_INFO.since} providing verified B2B data and
              marketing services that connect organizations with the right decision-makers.
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

            <Link to="/about-us" className="btn btn--primary" style={{ marginTop: 10 }}>
              More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PartnersStrip />

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Popular Services</span>
            <h2>We Provide Awesome Service With Our Tools</h2>
          </div>

          <div className="grid-3">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
              return (
                <div key={service.slug} className="card">
                  <div className="card__icon">
                    <Icon size={24} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <Link
                    to={`/${service.slug}`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600 }}
                  >
                    Learn More <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}

            <div className="card">
              <div className="card__icon">
                <TrendingUp size={24} />
              </div>
              <h3>Digital Market Planning</h3>
              <p>
                Analytics-driven multi-channel campaign planning tailored to convert target B2B
                decision-makers efficiently.
              </p>
              <Link
                to="/contact-us"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600 }}
              >
                Learn More <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Our Working Process</span>
            <h2>From Strategy to Verified Data Delivery</h2>
          </div>

          <div className="grid-3">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="card"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  borderColor: 'rgba(255,255,255,0.14)',
                }}
              >
                <span className="eyebrow">Step {item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Save Time &amp; Effort With Glow Digi Marketers</h2>
          </div>

          <div className="grid-3">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card">
                  <div className="card__icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--pink">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Client Feedback</span>
            <h2>Our Clients&apos; Testimonials</h2>
          </div>

          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="card">
                <Quote size={28} style={{ color: 'var(--color-accent)', marginBottom: 12 }} />
                <p style={{ fontStyle: 'italic', color: 'var(--color-secondary)' }}>{t.quote}</p>
                <div style={{ marginTop: 18 }}>
                  <strong style={{ color: 'var(--color-primary)', display: 'block' }}>
                    {t.author}
                  </strong>
                  <span style={{ fontSize: '0.88rem' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Global Coverage</span>
            <h2>Regions We Serve</h2>
          </div>

          <div className="grid-4">
            {REGIONS_SERVED.map((item) => (
              <div key={item.region} className="card" style={{ textAlign: 'center' }}>
                <div className="card__icon" style={{ marginInline: 'auto' }}>
                  <Globe2 size={24} />
                </div>
                <h3>{item.region}</h3>
                <p style={{ marginBottom: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2>Get Started With Your Favorite Data Services</h2>
            <p>{COMPANY_INFO.summary}</p>
            <div className="card" style={{ marginTop: 24 }}>
              <p style={{ marginBottom: 8 }}>
                <strong>Main Office:</strong> {COMPANY_INFO.address}
              </p>
              <p style={{ marginBottom: 8 }}>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Phone:</strong> {COMPANY_INFO.phone}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 18, marginTop: 18, fontSize: '0.9rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <MailCheck size={16} color="var(--color-purple)" /> Verified B2B Contacts
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Clock size={16} color="var(--color-purple)" /> Fast Turnaround
              </span>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>
    </>
  );
}

