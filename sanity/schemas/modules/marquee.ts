import { defineField, defineType } from "sanity";
import { Images } from "@phosphor-icons/react";

export const marqueeModule = defineType({
  title: "Marquee",
  name: "marquee",
  type: "object",
  icon: Images,
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              media: "asset",
              title: "asset.originalFilename",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      media: "images.0.asset",
    },
    prepare({ media }) {
      return {
        title: "Marquee",
        media,
      };
    },
  },
});
