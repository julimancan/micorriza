import { PortableTextBlock } from "sanity";

export type SiteSettingsType = {
  siteTitle: string;
  siteDescription: string;
  subscribe: SubscribeContentType;
  socialLinks: SocialLink[];
  ogImage: {
    url: string;
  };
};

export type SocialLink = {
  url: string;
  _type: string;
  icon: {
    provider: string;
    _type: string;
    name: string;
  };
  _key: string;
  title: string;
};

export type SubscribeContentType = {
  title: string;
  subscribedMessage: string;
};

export type HomepageContentType = {
  seo: {
    title: string;
    description: string;
  };
  hero: HeroProps;
  youtubePlaylistId: string;
  bio: BioType;
};

export type HeroProps = {
  title: string;
  subtitle: string;
  bgVideo: VideoType;
  socialLinks: SocialLink[]
};

export type VideoType = {
  url: string;
  alt: string;
  fallback: string;
  fallbackImage: string;
};


export type BioType = {
  title: string;
  text: PortableTextBlock[];
};

