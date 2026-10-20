'use client';

import { ArrowRight } from 'lucide-react';
import { Activity } from '@/lib/cocuria-data';
import { useEnquiry } from '@/components/enquiry-context';

export function EnquiryButton({ activity }: { activity: Activity }) {
  const { openEnquiryModal } = useEnquiry();
  return <button type="button" className="card-link" onClick={() => openEnquiryModal(activity)}>Request programme details <ArrowRight size={15} /></button>;
}
