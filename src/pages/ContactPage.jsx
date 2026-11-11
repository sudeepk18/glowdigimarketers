import { Mail, MapPin, Phone } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import LeadForm from '../components/LeadForm';
import { COMPANY_INFO } from '../data/siteData';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="For further queries, custom B2B data counts, or project estimates, reach out to our team."
      />

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: 48 }}>
            <div className="card">
              <div className="card__icon">
                <MapPin size={22} />
              </div>
              <span className="eyebrow">Location</span>
              <h3>Visit Us At</h3>
              <p style={{ marginBottom: 0 }}>{COMPANY_INFO.address}</p>
            </div>

            <div className="card">
              <div className="card__icon">
                <Mail size={22} />
              </div>
              <span className="eyebrow">Drop A Line</span>
              <h3>Mail Address</h3>
              <p style={{ marginBottom: 0 }}>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </p>
            </div>

            <div className="card">
              <div className="card__icon">
                <Phone size={22} />
              </div>
              <span className="eyebrow">24*7 Service</span>
              <h3>Call Us On</h3>
              <p style={{ marginBottom: 0 }}>Tel: {COMPANY_INFO.phone}</p>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2>For Further Queries, Contact For Info!</h2>
              <blockquote
                style={{
                  margin: '20px 0',
                  padding: '18px 22px',
                  borderLeft: '4px solid var(--color-accent)',
                  background: 'var(--color-surface-pink)',
                  borderRadius: '0 10px 10px 0',
                  color: 'var(--color-primary)',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;Marketing is no longer about the stuff that you make, but about the stories
                you tell.&rdquo; — Seth Godin
              </blockquote>
              <p>{COMPANY_INFO.summary}</p>
            </div>

            <LeadForm heading="Send Us a Message" />
          </div>
        </div>
      </section>
    </>
  );
}

