import { ArrowLeft } from 'lucide-react';
import { CocuriaFooter } from '@/components/cocuria-footer';
import { CocuriaHeader } from '@/components/cocuria-header';

export function PolicyPage({ title, eyebrow, sections }) {
  return (
    <>
      <CocuriaHeader />
      <main className="simple-page">
        <div className="container">
          <a href="/" className="back-link">
            <ArrowLeft size={16} /> Back to home
          </a>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <div className="policy-content">
            {sections.map((section, index) => (
              <section key={index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <CocuriaFooter />
    </>
  );
                }
