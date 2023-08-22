import { House } from "@phosphor-icons/react";
import { page } from ".";

export const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: House,
  groups: page.groups,
  fields: [...page.fields.filter((field) => field.name !== "slug")],
  preview: page.preview,
};
