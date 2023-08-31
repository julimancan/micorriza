import { siteSettingsSchema } from './../schema/siteSettings';
import { StructureBuilder } from "sanity/desk";
import { homepageSchema } from "../schema/pages/homepageSchema";
import pages from "./pages";


export default (S: StructureBuilder) => {
  const siteSettingsListItem = S.listItem()
    .title(siteSettingsSchema.title || "")
    .icon(siteSettingsSchema.icon)
    .child(
      S.editor()
        .id(siteSettingsSchema.name)
        .schemaType(siteSettingsSchema.name)
        .documentId(siteSettingsSchema.name)
    );
  const hiddenDocTypes = (listItem: any) => {
    return ![
      siteSettingsSchema.name,
      homepageSchema.name,
    ].includes(listItem.getId());
  };

  return S.list()
    .title("Contenido")
    .items([
      siteSettingsListItem,
      S.divider(),
      pages(S),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
}