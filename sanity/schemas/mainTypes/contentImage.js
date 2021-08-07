export const contentImage = {
  name: 'contentImage',
  title: 'Content Image',
  type: 'document',
  fields: [{
      name: 'contentImageItem',
      title: 'Content Image Item',
      type: 'image',
      options: {
        hotspot: true
      }
    },{
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
  }]
}