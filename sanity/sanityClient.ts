import { createClient } from "next-sanity";
import { sanityConfig } from "./config";
export default createClient({
  ...sanityConfig
});