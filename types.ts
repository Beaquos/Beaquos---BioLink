
export enum LinkType {
  SIMPLE = 'SIMPLE',
  FEATURED = 'FEATURED',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO'
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  type: LinkType;
  imageUrl?: string;
  subtitle?: string;
}

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'youtube' | 'twitter' | 'linkedin' | 'email' | 'whatsapp';
  url: string;
}

export interface UserProfile {
  name: string;
  bio: string;
  avatarUrl: string;
  theme: string;
  links: LinkItem[];
  socials: SocialLink[];
}

export interface ThemeConfig {
  id: string;
  name: string;
  background: string;
  cardBackground: string;
  textColor: string;
  accentColor: string;
  buttonRadius: string;
}
