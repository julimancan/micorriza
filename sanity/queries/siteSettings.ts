

import sanityClient from "../sanityClient";
import { videoObject } from "./objects/video";

const socialIconsQuery = `*[_type == "siteSettings"] {
  socialLinks
}`;

const siteSettingsQuery = `*[_type == "siteSettings"] {
  siteTitle,
  siteDescription,
  "subscribe": subscribe {
    title,
    subscribedMessage,
  },
  socialLinks,
  "ogImage": *[_type == "homepage"] {"url": hero.bgVideo.fallbackImage.asset->url}
}`;

export const getSiteSettings = async () => {
  try {
    const result = await sanityClient.fetch(siteSettingsQuery);
    return result[0];
  } catch (error) {
    console.error(error);
  }
}

export const getSocialIcons = async () => {
  try {
    const result = await sanityClient.fetch(socialIconsQuery);
    return result[0];
  } catch (error) {
    console.error(error);
  }
};


