import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Category Label (e.g., HIGH-RISE)',
      type: 'string',
      description: 'Short category or project type',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City or region',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Project category (RESIDENTIAL, COMMERCIAL, etc)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display in the featured carousel on homepage?',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order for carousel and grid display',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      featured: 'featured',
      image: 'image',
    },
    prepare({ title, featured, image }) {
      return {
        title,
        subtitle: featured ? '★ Featured' : 'In Grid',
        media: image,
      }
    },
  },
})
