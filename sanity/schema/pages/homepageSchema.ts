import { defineType, defineField, defineArrayMember } from "sanity";
import { HomeIcon } from "@sanity/icons";
import { preview } from "sanity-plugin-icon-picker";


export const homepageSchema = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  groups: [
    { title: "SEO", name: "SEO" },
    { title: "Hero", name: "hero" },
    { title: "Bio", name: "bio" },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      group: "SEO",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }),
        defineField({
          name: "bgVideo",
          title: "Background Video",
          description: "Upload a WEBM video format.",
          type: "file",
          options: {
            accept: "video/webm",
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            }),
            defineField({
              name: "fallback",
              title: "Fallback Video",
              description: "Upload a MP4 video format.",
              type: "file",
              options: {
                accept: "video/mp4",
              },
            }),
            defineField({
              name: "fallbackImage",
              title: "Fallback Image",
              type: "image",
            }),

          ],

        }),
        defineField({
          type: "array",
          name: "socialLinks",
          title: "Hero Links",
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
      ],
    }),
    
    defineField({
      name: "bio",
      title: "Bio",
      type: "object",
      group: "bio",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "text",
          title: "Text",
          type: "array",
          of: [
            {type: "block"}
          ]
        }),
      ]
    }),

  ],
  preview: {
    select: {
      title: "seo.title",
    },
  },
  // @ts-ignore
  prepare({ title }: { title: string }) {
    return {
      title,
    };
  }
    
});

