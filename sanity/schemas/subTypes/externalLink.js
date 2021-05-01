export const externalLink = {
    name: 'external_link',
    title: 'External Link',
    type: 'object',
    fields: [
      {
        title: 'Link Text',
        name: 'link_text',
        description: `The Text that the link will display (i.e. "Click Here!")`,
        type: 'string'
      },
      {
        name: 'link_url',
        title: 'Link URL',
        description: `The url the link will open to (i.e. https://www.google.com/)`,
        type: 'string',
      }
    ]
  }