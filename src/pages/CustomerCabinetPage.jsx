import { useState } from 'react';
import { Lock } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function CustomerCabinetPage() {
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [notice, setNotice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotice(
      'Customer portal access requires an active Glow Digi Marketers account. Please contact info@glowdigimarketers.com for assistance.'
    );
  };

  return (
    <>
      <PageBanner
        title="Customer Cabinet"
        subtitle="Access your purchased B2B datasets, invoices, and delivery status."
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 520 }}>
          <form className="form-card" onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div className="card__icon" style={{ marginBottom: 0 }}>
                <Lock size={20} />
              </div>
              <h2 style={{ marginBottom: 0, fontSize: '1.4rem' }}>Customer Dashboard</h2>
            </div>

            {notice && <div className="alert-success">{notice}</div>}

            <div className="form-group">
              <label htmlFor="cabinet-email">Registered Email</label>
              <input
                id="cabinet-email"
                type="email"
                required
                className="form-control"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cabinet-order">Order / Reference ID</label>
              <input
                id="cabinet-order"
                type="text"
                required
                className="form-control"
                placeholder="e.g. GDM-2026-001"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

