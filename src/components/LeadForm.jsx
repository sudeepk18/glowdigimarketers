import { useState } from 'react';
import { Send } from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function LeadForm({
  heading = 'Get Started with Your Data Services',
  defaultService = 'Geo-Targeted Email List',
  showServiceSelect = true,
}) {
  const [form, setForm] = useState({
    service: defaultService,
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      service: defaultService,
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: 18 }}>{heading}</h3>

      {submitted && (
        <div className="alert-success" role="status">
          Thank you! Your request has been received. Our B2B data specialists will respond shortly.
        </div>
      )}

      {showServiceSelect && (
        <div className="form-group">
          <label htmlFor="service-select">Select Service</label>
          <select
            id="service-select"
            name="service"
            className="form-control"
            value={form.service}
            onChange={handleChange}
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="lead-name">Your Name</label>
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          className="form-control"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lead-email">Your Email</label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          className="form-control"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lead-subject">Subject</label>
        <input
          id="lead-subject"
          name="subject"
          type="text"
          required
          className="form-control"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lead-message">Your Message (optional)</label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          className="form-control"
          placeholder="Tell us about your target audience, geography, or data goals..."
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
        <Send size={16} /> Submit Inquiry
      </button>
    </form>
  );
}

