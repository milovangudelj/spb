import { Link } from "@phosphor-icons/react";
import { groq } from "next-sanity";
import { Reference, defineArrayMember, defineField, defineType } from "sanity";
import { client } from "~/sanity/lib/client";

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
            defineField({
              name: "linkToModule",
              title: "Link to Module",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "moduleId",
              title: "Module ID",
              type: "string",
              hidden: ({ parent }) => !parent?.linkToModule,
            }),
          ],
          validation: (Rule) =>
            Rule.custom(async (fields) => {
              if (!fields || !fields.linkToModule) return true;

              if (!fields.moduleId || (fields.moduleId as string).length === 0)
                return "If 'Link to Module' is checked, 'Module ID' must be filled out.";

              if (!fields.page) return "Page is required.";

              const pageModules = await client.fetch(
                groq`
                *[_type == "page" && _id == $pageId][0].modules[]{
                  _type == "reference" => @->content[0]{moduleId},
                  _type != "reference" => @{"moduleId": content[0]{moduleId}},
                }
              `,
                { pageId: (fields.page as Reference)._ref },
              );

              if (pageModules.length === 0) return "Page has no modules.";

              const moduleExists = pageModules.some(
                (module: any) => module.moduleId === fields.moduleId,
              );

              if (!moduleExists) return "Module ID does not exist.";

              return true;
            }),
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
