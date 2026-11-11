import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import FaqsPage from './pages/FaqsPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import ContactPage from './pages/ContactPage';
import CustomerCabinetPage from './pages/CustomerCabinetPage';
import { SERVICES } from './data/servicesData';
import { INDUSTRIES } from './data/industriesData';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/customer-cabinet" element={<CustomerCabinetPage />} />

          {SERVICES.map((service) => (
            <Route
              key={service.slug}
              path={`/${service.slug}`}
              element={<ServiceDetailPage fixedSlug={service.slug} />}
            />
          ))}

          {INDUSTRIES.map((industry) => (
            <Route
              key={industry.slug}
              path={`/${industry.slug}`}
              element={<IndustryDetailPage fixedSlug={industry.slug} />}
            />
          ))}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

