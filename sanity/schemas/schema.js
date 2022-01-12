import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { blockContent, externalLink } from './subTypes';
import { project, contentImage, galleryImage } from './mainTypes';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // subtypes
    blockContent,
    externalLink,

    // main types
    project,
    contentImage,
    galleryImage

  ])
});