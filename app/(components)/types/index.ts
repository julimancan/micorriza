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