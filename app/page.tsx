'use client';

import { ArrowRight, Check, ChevronDown, Compass, Home as HomeIcon, Mail, MapPin, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { CocuriaFooter } from '@/components/cocuria-footer';
import { CocuriaHeader } from '@/components/cocuria-header';
import { EnquiryButton } from '@/components/enquiry-button';
import { useEnquiry } from '@/components/enquiry-context';
import { activities } from '@/lib/cocuria-data';

const faqs = [
  ['What is Cocuria?', 'Cocuria helps families and adults discover structured co-curricular and skill programmes based on their interests, age group and location.'],
  ['How are trainers onboarded?', 'Trainer onboarding and safety standards are part of our operating framework. Specific availability depends on the programme and location.'],
  ['Which activities are available?', 'Explore the current programme categories above. Styles and formats may vary by location and qualified trainer availability.'],
  ['What age groups can join?', 'We support programmes for children and students under 18 through a parent or legal guardian, as well as adults aged 18 and above.'],
  ['How can I find classes near my location?', 'Share your area and PIN code through an enquiry. We will review the programme options available for your location.'],
  ['Home tutoring or academy classes?', 'You can request either home tutoring or academy/studio classes. Both are subject to location and trainer availability.'],
  ['How do I receive syllabus and fee details?', 'Request programme details and our team can share relevant information based on your selected activity and location.'],
  ['What if a trainer is unavailable in my PIN code?', 'We will let you know if a suitable option is not currently available and can note your interest for future programme discovery.'],
  ['What is the cancellation and refund process?', 'This Phase 1 website collects enquiries only and does not process online programme payments. See our refund policy for the current position.'],
];

export default function Home() {
  const { openEnquiryModal } = useEnquiry();
  return (
    <main>
      <CocuriaHeader />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={15} /> Learn with intention</p>
            <h1>Unlock potential at every age.</h1>
            <p className="hero-lede">Structured co-curricular and skill programmes, thoughtfully matched to students, families and adults.</p>
            <p className="hero-note">Choose between home tutoring and academy classes, based on your location and learning goals.</p>
            <div className="hero-actions"><button className="button" type="button" onClick={() => openEnquiryModal()}>Get programme guide & pricing <ArrowRight size={17} /></button><a className="text-link" href="#activities">Explore activities <ArrowRight size={16} /></a></div>
            <div className="hero-proof"><span><Check size={15} /> Structured learning</span><span><Check size={15} /> Location-led discovery</span></div>
          </div>
          <div className="hero-art" aria-label="A colourful learning environment">
            <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85" alt="Students learning together in a bright classroom" /></div>
            <div className="floating-card floating-card-top"><span className="floating-icon"><Compass size={17} /></span><div><strong>Find your fit</strong><small>By interest, age &amp; area</small></div></div>
            <div className="floating-card floating-card-bottom"><span className="floating-icon warm"><HomeIcon size={17} /></span><div><strong>Two learning modes</strong><small>Home or academy classes</small></div></div>
          </div>
        </div>
      </section>
      <section className="trust-strip" id="safety"><div className="container trust-grid"><div><ShieldCheck size={21} /><span><strong>Trainer onboarding</strong><small>Standards-led framework</small></span></div><div><Sparkles size={21} /><span><strong>Curated programmes</strong><small>Built around real interests</small></span></div><div><MapPin size={21} /><span><strong>Location discovery</strong><small>Subject to local availability</small></span></div></div></section>
      <section className="section activities-section" id="activities"><div className="container"><div className="section-heading"><div><p className="eyebrow">Explore possibilities</p><h2>Something to grow into.</h2></div><p>From timeless arts to modern confidence-building, discover a programme that feels like a natural next step.</p></div><div className="activity-grid">{activities.map((activity) => <article className="activity-card" key={activity.title}><div className="activity-image"><img src={activity.image} alt={`${activity.title} programme`} loading="lazy" /><span className="age-pill">{activity.age}</span></div><div className="activity-content"><h3>{activity.title}</h3><p>{activity.styles}</p><EnquiryButton activity={activity} /></div></article>)}</div><div className="availability-note"><Mail size={18} /><span>Programme guide and pricing are shared on request. Availability depends on your location and qualified trainer availability.</span></div></div></section>
      <section className="section approach-section"><div className="container approach-grid"><div><p className="eyebrow">A considered beginning</p><h2>Make space for the things that make you, you.</h2></div><div><p>Whether you are nurturing a young interest or returning to one of your own, Cocuria makes the first step feel simple.</p><button className="button button-dark" type="button" onClick={() => openEnquiryModal()}>Start exploring <ArrowRight size={17} /></button></div></div></section>
      <section className="section faq-section" id="faq"><div className="container narrow-container"><div className="section-heading centered"><p className="eyebrow">Good to know</p><h2>Your questions, answered.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div><div className="help-card" id="enquire"><div><p className="eyebrow">Still need help?</p><h3>Talk to the Cocuria team.</h3><p>We can help you understand the right next step for your interests and area.</p></div><div className="help-actions"><a className="button" href="/support">Contact support <ArrowRight size={16} /></a><a className="outline-button" href="https://wa.me/919449484674" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a></div></div></div></section>
      <CocuriaFooter />
    </main>
  );
      }
      
