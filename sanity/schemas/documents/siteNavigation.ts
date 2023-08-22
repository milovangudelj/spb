import { Link } from "@phosphor-icons/react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const siteNavigation = defineType({
  name: "siteNavigation",
  title: "Site Navigation",
  type: "document",
  icon: Link,
  fields: [
    defineField({
      name: "links",
      title: "Navigation Links",
      type: "array",
      of: [
        defineArrayMember({
          name: "pageLink",
          title: "Page Link",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "page",
              title: "Page",
              type: "reference",
              to: [{ type: "page" }],
            }),
          ],
        }),
        defineArrayMember({
          name: "externalLink",
          title: "External Link",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
            defineField({
              name: "newTab",
              title: "Open in new tab",
              type: "boolean",
            }),
          ],
        }),
      ],
    }),
  ],
});
