import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
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
      title: 'Image of the restaurant',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    },
    {
      name: 'lng',
      title: 'Longitude of the restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter a number 1 to 5',
      type: 'number',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please enter a value between 1 to 5.'),
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (rule) => rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
