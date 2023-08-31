import { defineType, defineField, defineArrayMember } from "sanity";
import { CogIcon } from "@sanity/icons";
import { preview } from "sanity-plugin-icon-picker";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "string",
    }),
    defineField({
      type: "array",
      name: "socialLinks",
      title: "Social Links",
      of: [
        defineArrayMember({
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
            defineField({
              title: "Icon",
              name: "icon",
              type: "iconPicker",
            }),
          ],
          preview: {
            select: {
              provider: "icon.provider",
              name: "icon.name",
            },
            prepare(icon) {
              return {
                // @ts-ignore
                media: preview(icon),
                title: icon.name
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "subscribe",
      title: "Subscribe",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subscribedMessage",
          title: "Subscribed Message",
          type: "string",
        })
      ]
    })
  ],
});
