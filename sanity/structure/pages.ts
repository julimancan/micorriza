import { StructureBuilder } from "sanity/desk";
import { homepageSchema } from "../schema/pages/homepageSchema";
import { BookIcon } from "@sanity/icons";

export default (S: StructureBuilder) => {
  const homepageListItem = S.listItem()
    .title(homepageSchema.title || "")
    .icon(homepageSchema.icon)
    .child(
      S.editor()
        .id(homepageSchema.name)
        .schemaType(homepageSchema.name)
        .documentId(homepageSchema.name)
    );

  const pages = S.listItem()
    .title("Pages")
    .icon(BookIcon)
    .child(S.list().title("Pages").items([homepageListItem]));

  return pages;
};
