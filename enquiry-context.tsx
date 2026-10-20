'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { Activity } from '@/lib/cocuria-data';

type FormData = {
  ageGroup: 'under-18' | 'adult' | '';
  activity: string;
  subStyle: string;
  mode: 'home' | 'academy' | '';
  userName: string;
  parentName: string;
  phone: string;
  pincode: string;
  area: string;
  address: string;
  consent: boolean;
  guardianConfirmed: boolean;
  marketingConsent: boolean;
};

type EnquiryContextValue = {
  isOpen: boolean;
  step: number;
  formData: FormData;
  submittedRef: string | null;
  openEnquiryModal: (activity?: Activity) => void;
  closeEnquiryModal: () => void;
  updateForm: (values: Partial<FormData>) => void;
  nextStep: () => void;
  previousStep: () => void;
  showSuccess: (reference: string) => void;
  resetEnquiry: () => void;
};

const emptyForm: FormData = { ageGroup: '', activity: '', subStyle: '', mode: '', userName: '', parentName: '', phone: '', pincode: '', area: '', address: '', consent: false, guardianConfirmed: false, marketingConsent: false };
const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const openEnquiryModal = (activity?: Activity) => {
    setFormData({ ...emptyForm, activity: activity?.title ?? '' });
    setStep(1);
    setSubmittedRef(null);
    setIsOpen(true);
  };
  const closeEnquiryModal = () => setIsOpen(false);
  const updateForm = (values: Partial<FormData>) => setFormData((current) => ({ ...current, ...values }));
  const nextStep = () => setStep((current) => Math.min(current + 1, 4));
  const previousStep = () => setStep((current) => Math.max(current - 1, 1));
  const showSuccess = (reference: string) => setSubmittedRef(reference);
  const resetEnquiry = () => { setFormData(emptyForm); setStep(1); setSubmittedRef(null); };
  const value = useMemo(() => ({ isOpen, step, formData, submittedRef, openEnquiryModal, closeEnquiryModal, updateForm, nextStep, previousStep, showSuccess, resetEnquiry }), [isOpen, step, formData, submittedRef]);
  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error('useEnquiry must be used within EnquiryProvider');
  return context;
}
