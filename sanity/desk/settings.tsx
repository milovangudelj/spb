import { Gear, Link } from "@phosphor-icons/react";
import { StructureBuilder } from "sanity/desk";

export const settingsMenu = (S: StructureBuilder) =>
  S.listItem()
    .title("Settings")
    .icon(Gear)
    .child(
      S.list()
        .title("Settings")
        .items([
          S.listItem()
            .title("General")
            .child(
              S.document()
                .title("General Settings")
                .schemaType("siteSettings")
                .documentId("siteSettings"),
            )
            .icon(Gear),
          S.listItem()
            .title("Navigation")
            .child(
              S.document()
                .title("Navigation Settings")
                .schemaType("siteNavigation")
                .documentId("siteNavigation"),
            )
            .icon(Link),
        ]),
    );
