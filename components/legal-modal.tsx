'use client';

import { useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type Policy = { key: 'privacy' | 'terms' | 'refund'; title: string; sections: Array<[string, string]> };

export const policies: Policy[] = [
  { key: 'privacy', title: 'Privacy policy', sections: [['Information we collect', 'Cocuria may collect details shared through programme enquiries or support requests, such as name, contact information, age group, area and programme preferences.'], ['How we use information', 'Information is used to understand your request, respond to support questions and coordinate programme discovery.'], ['Children and parent enquiries', 'Enquiries for anyone under 18 should be submitted by a parent or legal guardian.'], ['Your choices', 'You may contact support@cocuria.com to request correction or deletion of information, subject to applicable legal requirements.']] },
  { key: 'terms', title: 'Terms & conditions', sections: [['Cocuria’s role', 'Cocuria is a programme discovery and coordination platform. An enquiry does not guarantee a booking, trainer assignment or programme availability.'], ['Programme availability', 'Options depend on location, programme suitability and qualified trainer or academy availability.'], ['User responsibilities', 'Please provide accurate contact and location details, and ensure that a parent or legal guardian submits an enquiry for a minor.'], ['Safety and complaints', 'Safety standards and complaint handling are part of our operating framework. Please use the support page to raise a concern.']] },
  { key: 'refund', title: 'Refund & cancellation policy', sections: [['Current Phase 1 position', 'This website collects programme enquiries only. It does not process online programme payments, bookings or automated refunds.'], ['Future programme terms', 'When Cocuria begins accepting payments, programme-specific cancellation and refund terms will be shared before payment.'], ['Review note', 'This is an editable draft for review and should be finalised with applicable statutory consumer rights before payment collection begins.']] },
];

export function LegalModal({ policy, open, onOpenChange }: { policy: Policy | null; open: boolean; onOpenChange: (open: boolean) => void }) {
  useEffect(() => { if (!open) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onOpenChange(false); }; document.addEventListener('keydown', onKeyDown); return () => document.removeEventListener('keydown', onKeyDown); }, [open, onOpenChange]);
  if (!policy) return null;
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="legal-dialog"><DialogHeader><p className="eyebrow">Policy draft for review</p><DialogTitle>{policy.title}</DialogTitle><DialogDescription>This draft reflects the current enquiry-only experience and should be reviewed before production launch.</DialogDescription></DialogHeader><div className="legal-scroll">{policy.sections.map(([heading, text]) => <section key={heading}><h3>{heading}</h3><p>{text}</p></section>)}</div><a className="text-link" href="/support">Questions? Contact support</a></DialogContent></Dialog>;
                                                            }
