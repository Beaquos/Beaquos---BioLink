
import React, { useState } from 'react';
import { INITIAL_DATA } from './constants.tsx';
import { 
  WhatsAppIcon, StoreIcon, StarIcon, InvitationIcon, GlobeIcon, 
  ArrowRightIcon, ArrowUpRightIcon, InstagramIcon, EmailIcon,
  VerifiedIcon, TruckIcon, LockIcon, PackageIcon, ClockIcon
} from './components/Icons.tsx';

const App: React.FC = () => {
  const [profile] = useState(INITIAL_DATA);

  const getLinkIcon = (id: string) => {
    switch (id) {
      case 'wa': return <WhatsAppIcon sizeClass="w-7 h-7" />;
      case 'store': return <StoreIcon sizeClass="w-7 h-7" />;
      case 'convites': return <InvitationIcon sizeClass="w-7 h-7" />;
      default: return <GlobeIcon sizeClass="w-7 h-7" />;
    }
  };

  const getCardStyle = (id: string) => {
    if (id === 'wa') return 'card-green';
    if (id === 'store') return 'card-orange';
    return 'card-white';
  };

  const getArrowIcon = (id: string) => {
    if (id === 'wa' || id === 'store') {
      return <ArrowRightIcon sizeClass="w-4 h-4" />;
    }
    return <ArrowUpRightIcon sizeClass="w-5 h-5 opacity-40" />;
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <InstagramIcon sizeClass="w-5 h-5" />;
      case 'email': return <EmailIcon sizeClass="w-5 h-5" />;
      default: return null;
    }
  };

  const marqueeItems = [...profile.highlights, ...profile.highlights, ...profile.highlights];

  return (
    <div className="container-bio">
      <header className="banner-header">
        <div className="share-button" onClick={() => navigator.share?.({ url: window.location.href })}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </div>
      </header>

      <div className="profile-overlap">
        <div className="logo-container">
          <div className="logo-img-content">
            Beaquos<br/>
            <span className="logo-studio">ESTÚDIO CRIATIVO</span>
          </div>
        </div>
      </div>

      <div className="content-padding mt-5">
        <div className="flex items-center justify-center mb-1">
          <h1 className="text-[26px] font-extrabold text-[#1e293b] tracking-tight">{profile.name}</h1>
          <span className="verified-badge"><VerifiedIcon /></span>
        </div>
        
        <div className="text-[13px] text-[#64748b] text-center max-w-[380px] mb-1 font-medium leading-[1.6]">
          Convites Digitais & Identidade Visual<br/>
          Design para Momentos Especiais
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="banner-item">
              {item.iconId === 'globe' && <GlobeIcon sizeClass="w-4 h-4" />}
              {item.iconId === 'lock' && <LockIcon />}
              {item.iconId === 'package' && <PackageIcon />}
              {item.iconId === 'clock' && <ClockIcon />}
              {item.text}
              <span className="opacity-30 mx-1">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 w-full">
        <div className="links-wrapper">
          {profile.links.map((link) => (
            <a 
              key={link.id}
              href={link.url}
              className={`link-card ${getCardStyle(link.id)}`}
            >
              <div className="icon-box">
                {getLinkIcon(link.id)}
              </div>
              
              <div className="text-content">
                <span className="link-title">{link.title}</span>
                {link.subtitle && (
                  <span className="link-subtitle">{link.subtitle}</span>
                )}
              </div>

              <div className="ml-2">
                {getArrowIcon(link.id)}
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-5 mt-10 mb-6">
          {profile.socials.map((social, idx) => (
            <a key={idx} href={social.url} className="social-link">
              <div className="social-icon-circle">
                {getSocialIcon(social.platform)}
              </div>
            </a>
          ))}
        </div>

        <footer className="footer-text pb-6">
          <p className="font-semibold text-[#94a3b8] opacity-80">
            {profile.footer.copyright}
          </p>
        </footer>
      </div>

      <div className="bottom-url-bar">
        <LockIcon sizeClass="w-3 h-3" />
        beaquos estudio criativo
      </div>
    </div>
  );
};

export default App;
