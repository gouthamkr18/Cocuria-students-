'use client';

import { createContext, useContext, useState } from 'react';
import { EnquiryProvider } from '@/components/enquiry-context';
import { EnquiryModal } from '@/components/enquiry-modal';
import { LegalModal, policies } from '@/components/legal-modal';

type PolicyKey = typeof policies[number]['key'];
const LegalContext = createContext<((key: PolicyKey) => void) | null>(null);

export function CocuriaProviders({ children }: { children: React.ReactNode }) {
  const [policyKey, setPolicyKey] = useState<PolicyKey | null>(null);
  const policy = policies.find((item) => item.key === policyKey) ?? null;
  return <EnquiryProvider><LegalContext.Provider value={setPolicyKey}><LegalModal policy={policy} open={Boolean(policy)} onOpenChange={(open) => { if (!open) setPolicyKey(null); }} /><EnquiryModal />{children}</LegalContext.Provider></EnquiryProvider>;
}

export function useLegalModal() {
  const openLegalModal = useContext(LegalContext);
  if (!openLegalModal) throw new Error('useLegalModal must be used within CocuriaProviders');
  return { openLegalModal };
}
