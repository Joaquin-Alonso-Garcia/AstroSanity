export default {
  name: 'destination',
  title: 'Destinations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Destination Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'Ecuador Mainland', value: 'mainland' },
          { title: 'Galapagos', value: 'galapagos' },
          { title: 'Amazon', value: 'amazon' }
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}