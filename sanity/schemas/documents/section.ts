import { getModuleName } from "../../lib/helpers";
import { Broadcast } from "@phosphor-icons/react";
import { defineType } from "sanity";

export const reusableSection = defineType({
  title: "Reusable Section",
  name: "section",
  type: "document",
  icon: Broadcast,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      description:
        "Provide a name to reference this section. For internal use only.",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "hero" }, { type: "marquee" }],
      validation: (Rule) =>
        Rule.length(1).error("You can only have one piece of content"),
    },
  ],
  preview: {
    select: {
      name: "name",
      type: "content.0._type",
    },
    prepare({ name, type }) {
      return {
        title: name,
        subtitle: getModuleName(type),
      };
    },
  },
});
