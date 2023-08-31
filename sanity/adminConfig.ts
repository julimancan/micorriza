// sanity/studioConfig.ts
import { deskTool } from 'sanity/desk';
import { sanityConfig } from './config';
import { defineConfig } from "sanity";
import { schemaTypes } from './schema/types';
import structure from './structure';
import { iconPicker } from 'sanity-plugin-icon-picker';

export const sanityAdminConfig = {
  ...sanityConfig,
  title: "Micorriza Soundsystem Studio",
  apiVersion: "2021-10-21",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure
    }),
    iconPicker(),

  ],
  schema: {
    types: schemaTypes
  }
};

export const adminConfig = defineConfig(sanityAdminConfig);