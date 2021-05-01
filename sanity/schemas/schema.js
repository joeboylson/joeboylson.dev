import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { blockContent, externalLink } from './subTypes';
import { project } from './mainTypes';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // subtypes
    blockContent,
    externalLink,

    // main types
    project

  ])
});