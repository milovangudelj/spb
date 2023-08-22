import { Star } from "@phosphor-icons/react";
import { defineField, defineType } from "sanity";
import customImage from "~/sanity/lib/custom-image";

export const heroModule = defineType({
  title: "Hero",
  name: "hero",
  type: "object",
  icon: Star,
  fields: [
    defineField({
      title: "Overlay Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Overlay Content",
      name: "content",
      type: "string",
    }),
    defineField({
      title: "With Button",
      name: "withButton",
      type: "boolean",
    }),
    defineField({
      title: "Button Text",
      name: "buttonText",
      type: "string",
      hidden: ({ parent }) => !parent?.withButton,
    }),
    customImage({
      title: "Background Photo",
      name: "photo",
    }),
  ],
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (
        fields?.withButton &&
        (!fields.buttonText || (fields.buttonText as string).length === 0)
      )
        return "If 'With Button' is checked, 'Button Text' must be filled out.";
      return true;
    }),
  initialValue: {
    withButton: false,
  },
  preview: {
    select: {
      photo: "photo",
      content: "content.0.children",
    },
    prepare({ photo, content }) {
      return {
        title: "Hero",
        subtitle: content && content[0]?.text,
        media: photo,
      };
    },
  },
});
