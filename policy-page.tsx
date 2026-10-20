import { ArrowLeft } from 'lucide-react';
import { CocuriaFooter } from '@/components/cocuria-footer';
import { CocuriaHeader } from '@/components/cocuria-header';

export function PolicyPage({ title, eyebrow, sections }: { title: string; eyebrow: string; sections: Array<[string, string]> }) {
  return <><CocuriaHeader /><main className="simple-page policy-page"><div className="container policy-container"><a className="back-link" href="/"><ArrowLeft size={15} /> Back to Cocuria</a><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="policy-intro">This page is a clear working draft for the current enquiry-only experience. It should be reviewed before production launch.</p><div className="policy-content">{sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}</div><a className="text-link" href="/support">Questions? Contact support <ArrowLeft size={15} className="rotate-180" /></a></div></main><CocuriaFooter /></>;
}
