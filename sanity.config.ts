/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { defaultDocumentNode, structure } from "~/sanity/desk";
import { apiVersion, dataset, projectId } from "~/sanity/env";
import { schema } from "~/sanity/schema";
import { singletonTypes, singletonActions } from "~/sanity/lib/singletons";

export default defineConfig({
  basePath: "/studio",
  title: "SPB Studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  document: {
    actions: (input, { schemaType, documentId }) => {
      // For singleton types, filter out actions that are not explicitly included
      // in the `singletonActions`
      if (singletonTypes.has(schemaType)) {
        return input.filter(
          ({ action }) => action && singletonActions.has(action),
        );
      }

      // For home page, filter out delete/unpublish actions
      if (
        schemaType === "page" &&
        documentId &&
        ["homePage", "errorPage"].includes(documentId)
      ) {
        return input.filter(
          ({ action }) => action !== "delete" && action !== "unpublish",
        );
      }

      return input;
    },
  },
  plugins: [
    deskTool({
      structure,
      defaultDocumentNode,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
