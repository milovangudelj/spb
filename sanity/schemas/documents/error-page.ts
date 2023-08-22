import { Warning } from "@phosphor-icons/react";
import { page } from ".";

export const errorPage = {
  name: "errorPage",
  title: "Error Page",
  type: "document",
  icon: Warning,
  groups: page.groups,
  fields: [...page.fields.filter((field) => field.name !== "slug")],
  preview: page.preview,
};
