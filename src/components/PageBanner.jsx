import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageBanner({ title, subtitle, parentLabel, parentTo }) {
  return (
    <section className="page-banner">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          {parentLabel && parentTo && (
            <>
              <Link to={parentTo}>{parentLabel}</Link>
              <ChevronRight size={14} />
            </>
          )}
          <span>{title}</span>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

