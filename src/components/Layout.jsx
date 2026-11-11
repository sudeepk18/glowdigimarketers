import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { SERVICES } from '../data/servicesData';
import { INDUSTRIES } from '../data/industriesData';

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <div className="topbar">
          <div className="container topbar__inner">
            <div className="topbar__info">
              <span className="topbar__item">
                <MapPin size={14} /> {COMPANY_INFO.address}
              </span>
              <a className="topbar__item" href={`mailto:${COMPANY_INFO.email}`}>
                <Mail size={14} /> {COMPANY_INFO.email}
              </a>
            </div>
            <div className="topbar__info">
              <span className="topbar__item">
                <Phone size={14} /> {COMPANY_INFO.phone}
              </span>
              <Link className="topbar__item" to="/customer-cabinet">
                Customer Cabinet
              </Link>
            </div>
          </div>
        </div>

        <div className="container navbar">
          <Link to="/" className="brand">
            <img src="/images/logo.png" alt="Glow Digi Marketers" />
            <span>Glowdigimarketers</span>
          </Link>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">
                About Us <ChevronDown size={14} />
              </NavLink>
              <div className="dropdown">
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/our-team">Our Team</NavLink>
                <NavLink to="/faqs">FAQ&apos;s</NavLink>
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Services <ChevronDown size={14} />
              </NavLink>
              <div className="dropdown">
                {SERVICES.map((service) => (
                  <NavLink key={service.slug} to={`/${service.slug}`}>
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/industries" className="nav-link">
                Industries <ChevronDown size={14} />
              </NavLink>
              <div className="dropdown">
                {INDUSTRIES.map((ind) => (
                  <NavLink key={ind.slug} to={`/${ind.slug}`}>
                    {ind.title}
                  </NavLink>
                ))}
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" className="brand" style={{ color: '#fff', marginBottom: 14 }}>
                <img src="/images/logo.png" alt="Glow Digi Marketers" />
                <span>Glowdigimarketers</span>
              </Link>
              <p style={{ fontSize: '0.9rem' }}>{COMPANY_INFO.summary}</p>
            </div>

            <div>
              <h4>Company</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/our-team">Our Team</Link></li>
                <li><Link to="/faqs">FAQ&apos;s</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4>Services</h4>
              <ul className="footer-links">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link to={`/${service.slug}`}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Contact Information</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 10 }}>
                Feel free to contact &amp; reach us!
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: 8 }}>{COMPANY_INFO.address}</p>
              <p style={{ fontSize: '0.9rem', marginBottom: 8 }}>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#fff' }}>
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p style={{ fontSize: '0.9rem' }}>Tel: {COMPANY_INFO.phone}</p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>{COMPANY_INFO.copyright}</span>
            <span>B2B Data Solutions &amp; Direct Marketing</span>
          </div>
        </div>
      </footer>
    </>
  );
}

