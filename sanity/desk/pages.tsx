import { StructureBuilder } from "sanity/desk";
import { File, House, Warning } from "@phosphor-icons/react";
import { groq } from "next-sanity";

import { client } from "~/sanity/lib/client";

const homePage = (S: StructureBuilder) =>
  S.listItem()
    .title("Home")
    .icon(House)
    .child(
      S.document()
        .title("Home Page")
        .schemaType("homePage")
        .documentId("homePage"),
    );

const errorPage = (S: StructureBuilder) =>
  S.listItem()
    .title("Error")
    .icon(Warning)
    .child(
      S.document()
        .title("Error Page")
        .schemaType("errorPage")
        .documentId("errorPage"),
    );

export const pagesMenu = (S: StructureBuilder) =>
  S.listItem()
    .title("Pages")
    .icon(File)
    .child(
      S.list()
        .title("Pages")
        .items([
          homePage(S),
          errorPage(S),
          S.listItem()
            .title("Other")
            .schemaType("page")
            .child(
              S.documentTypeList("page")
                .title("Other Pages")
                .filter(
                  '_type == "page" && !(_id in ["homePage", "errorPage"])  && !(_id in path("drafts.**"))',
                )
                .child(async (documentId) => {
                  const doc: { _id: string; title: string } =
                    await client.fetch(
                      groq`*[_type == "page" && _id == $documentId][0]{_id,title}`,
                      { documentId },
                    );

                  return S.document()
                    .documentId(doc._id)
                    .title(`${doc.title} Page`)
                    .schemaType("page");
                })
                .canHandleIntent(
                  (intent, { type }) =>
                    ["create", "edit"].includes(intent) && type === "page",
                ),
            ),
          S.divider(),
          S.listItem()
            .title("Reusable Sections")
            .schemaType("section")
            .child(
              S.documentList()
                .id("reusable-sections")
                .title("Reusable Sections")
                .schemaType("section")
                .filter('_type == "section"'),
            ),
        ]),
    );
