'use client';

import Image from 'next/image';
import { Mail, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useEnquiry } from '@/components/enquiry-context';

const whatsappUrl = 'https://wa.me/919449484674';

export function CocuriaHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { openEnquiryModal } = useEnquiry();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="Cocuria home" onClick={closeMenu}>
          <Image src="/file_000000009eec81fabb6fae0c14453e62.png" alt="Cocuria" width={148} height={48} priority className="brand-logo" />
        </a>
        <nav className={isOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="/#activities" onClick={closeMenu}>Activities</a>
          <a href="/#safety" onClick={closeMenu}>Safety standards</a>
          <a href="/support" onClick={closeMenu}>Support</a>
          <a href="/#faq" onClick={closeMenu}>FAQ</a>
        </nav>
        <div className="header-actions">
          <a className="icon-link desktop-only" href="mailto:support@cocuria.com" aria-label="Email Cocuria">
            <Mail size={18} strokeWidth={1.8} />
          </a>
          <a className="icon-link desktop-only" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Message Cocuria on WhatsApp">
            <MessageCircle size={18} strokeWidth={1.8} />
          </a>
          <button className="button button-small header-cta" type="button" onClick={() => { closeMenu(); openEnquiryModal(); }}>Enquire Now</button>
          <button className="menu-toggle" type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
