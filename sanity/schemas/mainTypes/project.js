const blockType = {
  title: 'Block',
  type: 'block',
  styles: [{
    title: 'Normal',
    value: 'normal'
  }],
  lists: []
};

export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [{
      name: 'name',
      title: 'Project Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'synopsis',
      title: 'Synopsis',
      type: 'array',
      of: [blockType]
    },
    {
      name: 'technologyThoughts',
      title: 'Technology Thoughts',
      type: 'array',
      of: [blockType]
    },
    {
      name: 'impact',
      title: 'Impact',
      type: 'array',
      of: [blockType]
    },
    {
      name: 'description',
      type: 'array',
      of: [blockType]
    },
    {
      name: 'external_links',
      title: 'Project Links',
      type: 'array',
      of: [{ type: 'external_link' }]
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }]
    }
  ]
}