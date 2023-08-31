import { homepageSchema } from "./pages/homepageSchema";
import { siteSettingsSchema } from "./siteSettings";

export const schemaTypes = [
  // documents
  siteSettingsSchema,
  // pages
  homepageSchema
]