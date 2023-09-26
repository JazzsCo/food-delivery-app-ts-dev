import {defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
      validation: (rule) => rule.required(),
    },
  ],
})
