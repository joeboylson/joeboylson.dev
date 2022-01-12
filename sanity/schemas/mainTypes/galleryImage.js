const blockType = {
  title: 'Block',
  type: 'block',
  styles: [{
    title: 'Normal',
    value: 'normal'
  }],
  lists: []
};

export const galleryImage = {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [{
      name: 'name',
      title: 'Gallery Image Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'array',
      of: [blockType]
    }
  ]
}