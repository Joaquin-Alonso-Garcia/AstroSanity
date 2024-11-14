export default {
  name: 'tour',
  title: 'Tours',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tour Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Day Trips', value: 'dayTrips' },
          { title: 'Ecuador Programs', value: 'ecuadorPrograms' },
          { title: 'Galapagos', value: 'galapagos' },
          { title: 'Amazon', value: 'amazon' },
          { title: 'Hiking Programs', value: 'hiking' },
          { title: 'Birding Programs', value: 'birding' }
        ]
      }
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'object',
      fields: [
        { name: 'days', type: 'number', title: 'Days' },
        { name: 'nights', type: 'number', title: 'Nights' }
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'day', type: 'string', title: 'Day' },
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'description', type: 'array', of: [{ type: 'block' }] },
          { name: 'accommodation', type: 'string', title: 'Accommodation' },
          { name: 'meals', type: 'string', title: 'Meals Included' }
        ]
      }]
    },
    {
      name: 'price',
      title: 'Starting Price',
      type: 'number'
    }
  ]
}