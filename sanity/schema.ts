import { SchemaPluginOptions, type SchemaTypeDefinition } from "sanity";

import { singletonTypes } from "~/sanity/lib/singletons";

import {
  page,
  reusableSection,
  siteNavigation,
  siteSettings,
  homePage,
  errorPage,
} from "~/sanity/schemas/documents";
import { heroModule, marqueeModule } from "~/sanity/schemas/modules";
import { seo } from "~/sanity/schemas/objects";

export const schema: SchemaPluginOptions = {
  types: [
    // Singleton documents
    siteSettings,
    siteNavigation,
    homePage,
    errorPage,

    // Documents
    page,
    reusableSection,

    // Modules
    heroModule,
    marqueeModule,

    // Objects
    seo,
  ],
  // Filter out singleton types from the global “New document” menu options
  templates: (prev) =>
    prev.filter(({ schemaType, id }) => !singletonTypes.has(schemaType)),
};
