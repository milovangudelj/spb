import {
  File,
  Folder,
  Gear,
  House,
  Image,
  Link,
  Palette,
  Pencil,
  PencilLine,
  Tag,
  Warning,
} from "@phosphor-icons/react";
import { DefaultDocumentNodeResolver, StructureResolver } from "sanity/desk";
import { pagesMenu } from "~/sanity/desk/pages";
import { settingsMenu } from "~/sanity/desk/settings";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
  return S.document().views([S.view.form().icon(PencilLine)]);
};

export const structure: StructureResolver = (S, context) => {
  return S.list()
    .title("Content")
    .items([settingsMenu(S), S.divider(), pagesMenu(S)]);
};
