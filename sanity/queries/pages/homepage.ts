import sanityClient from "../../sanityClient";
import { videoObject } from "../objects/video";

const homepageQuery = `*[_type == "homepage"] {
  seo,
  "hero": hero {
    title,
    subtitle,
    "bgVideo": bgVideo ${videoObject},
    socialLinks
  },
  bio,
}`;

export const getHomepageContent = async () => {
  try {
    const result = await sanityClient.fetch(homepageQuery);
    return result[0];
  } catch (error) {
    console.error(error);
  }
};
