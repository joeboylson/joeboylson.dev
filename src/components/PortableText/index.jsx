import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';

const StyledBasePortableText = styled(BasePortableText)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

const PortableText = ({blocks}) => (
  <StyledBasePortableText blocks={blocks} serializers={serializers} className="js-body-copy"/>
);

export default PortableText;