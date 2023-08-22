import { defineField, defineType } from "sanity";
import { File } from "@phosphor-icons/react";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: File,
  groups: [
    {
      title: "Content",
      name: "content",
      default: true,
    },
    {
      title: "SEO",
      name: "seo",
    },
    {
      title: "Settings",
      name: "settings",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The title of the page",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "settings",
    }),
    defineField({
      title: "URL Slug",
      name: "slug",
      type: "slug",
      description: "(required)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: "settings",
    }),
    defineField({
      title: "Page Content",
      name: "modules",
      type: "array",
      of: [
        { type: "hero" },
        { type: "marquee" },
        {
          title: "Reusable Section",
          type: "reference",
          to: [{ type: "section" }],
        },
      ],
      group: "content",
    }),
    defineField({
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare({ title = "Untitled", slug = {} }) {
      const path = `/${slug.current}`;
      return {
        title,
        subtitle: slug.current ? path : "(missing slug)",
      };
    },
  },
});
