import { PARTNERS } from '../data/siteData';

export default function PartnersStrip() {
  return (
    <section className="section section--lavender">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="eyebrow">Our Trusted Partners</span>
          <h2>Data &amp; Marketing Ecosystem</h2>
        </div>

        <div className="partners-grid">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="partner-box">
              <img src={partner.image} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

