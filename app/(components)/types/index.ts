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
  bio: BioType;
  youtubePlaylist: {
    titulo: string;
    youtubePlaylistLink: string;
  };
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

export interface YoutubeVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
  };
}
