import {defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the category',
      type: 'image',
      validation: (rule) => rule.required(),
    },
  ],
})
