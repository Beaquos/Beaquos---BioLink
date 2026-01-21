
import React from 'react';

interface IconProps {
  sizeClass?: string;
}

export const VerifiedIcon = ({ sizeClass = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={sizeClass}><path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.26-1.11.17-2.3-.35-3.32-.52-1.01-1.42-1.74-2.52-2-.7-.13-1.47-.11-2.18.04C14.54 2.3 13.33 1.5 12 1.5s-2.54.8-3.27 2.06c-.71-.15-1.48-.17-2.18-.04-1.1.26-2 .99-2.52 2-.52 1.02-.61 2.21-.35 3.32C2.38 9.55 1.5 10.92 1.5 12.5c0 1.58.88 2.95 2.18 3.66-.26 1.11-.17 2.3.35 3.32.52 1.01 1.42 1.74 2.52 2 .7.13 1.47.11 2.18-.04.73 1.26 1.94 2.06 3.27 2.06s2.54-.8 3.27-2.06c.71.15 1.48.17 2.18.04 1.1-.26 2-.99 2.52-2 .52-1.02.61-2.21.35-3.32 1.3-.71 2.18-2.08 2.18-3.66zM10 17.5l-4.5-4.5 1.5-1.5L10 14.5l7-7 1.5 1.5-8.5 8.5z"></path></svg>
);

export const TruckIcon = ({ sizeClass = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);

export const LockIcon = ({ sizeClass = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

export const PackageIcon = ({ sizeClass = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><path d="M12.89 2.16a2 2 0 0 0-1.78 0l-7 3.5A2 2 0 0 0 3 7.43v9.14a2 2 0 0 0 1.11 1.77l7 3.5a2 2 0 0 0 1.78 0l7-3.5a2 2 0 0 0 1.11-1.77V7.43a2 2 0 0 0-1.11-1.77l-7-3.5Z"></path><path d="m7.5 4.27 9 4.5"></path><path d="m3.29 7 9 4.5 9-4.5"></path><path d="M12 12v9"></path></svg>
);

export const ClockIcon = ({ sizeClass = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

export const WhatsAppIcon = ({ sizeClass = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={sizeClass}>
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

export const StoreIcon = ({ sizeClass = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
);

export const StarIcon = ({ sizeClass = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

export const PaletteIcon = ({ sizeClass = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.61 1.92-1.47l.16-.6c.22-.86 1-1.47 1.92-1.47h3c1.1 0 2-.9 2-2 0-2.48-3.58-6-7-6-2.21 0-4-1.79-4-4s1.79-4 4-4z"></path></svg>
);

export const InvitationIcon = ({ sizeClass = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export const GlobeIcon = ({ sizeClass = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

export const InstagramIcon = ({ sizeClass = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export const EmailIcon = ({ sizeClass = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={sizeClass}><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><rect x="2" y="5" width="20" height="14" rx="2"></rect></svg>
);

export const ArrowRightIcon = ({ sizeClass = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={sizeClass}><path d="M9 18l6-6-6-6"></path></svg>
);

export const ArrowUpRightIcon = ({ sizeClass = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={sizeClass}><path d="M7 17L17 7M7 7h10v10"></path></svg>
);
