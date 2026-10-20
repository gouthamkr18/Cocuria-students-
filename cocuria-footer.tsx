'use client';

import Image from 'next/image';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { useLegalModal } from '@/components/cocuria-providers';

export function CocuriaFooter() {
  const { openLegalModal } = useLegalModal();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/file_000000009eec81fabb6fae0c14453e62.png" alt="Cocuria" width={148} height={48} className="brand-logo" />
          <p>Structured co-curricular &amp; skill programmes for curious minds at every age.</p>
          <div className="footer-location"><MapPin size={16} /> Bangalore, India</div>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <a href="/#activities">Activities</a>
          <a href="/#safety">Safety standards</a>
          <a href="/#faq">FAQ</a>
        </div>
        <div>
          <p className="footer-heading">Support</p>
          <a href="/support">Contact support</a>
          <button type="button" className="footer-modal-link" onClick={() => openLegalModal('privacy')}>Privacy policy</button>
          <button type="button" className="footer-modal-link" onClick={() => openLegalModal('terms')}>Terms &amp; conditions</button>
          <button type="button" className="footer-modal-link" onClick={() => openLegalModal('refund')}>Refund policy</button>
        </div>
        <div>
          <p className="footer-heading">Get in touch</p>
          <a className="footer-contact" href="mailto:support@cocuria.com"><Mail size={16} /> support@cocuria.com</a>
          <a className="footer-contact" href="https://wa.me/919449484674" target="_blank" rel="noreferrer"><MessageCircle size={16} /> +91 94494 84674</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Cocuria. All rights reserved.</span>
        <span>Programmes subject to location and trainer availability.</span>
      </div>
    </footer>
  );
}
