import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PartnersStrip from '../components/PartnersStrip';
import { FAQS } from '../data/siteData';

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageBanner
        title="Frequently Asked Questions!"
        subtitle="Answers to common questions about data accuracy, verification, formats, compliance, and delivery."
        parentLabel="About Us"
        parentTo="/about-us"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className="faq-item">
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span>{item.question}</span>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {isOpen && <div className="faq-body">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </section>

      <PartnersStrip />
    </>
  );
}

