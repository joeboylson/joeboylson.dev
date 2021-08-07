import React from "react";
import PageWrapper from './src/components/PageWrapper';
import './src/utils/common.scss';

export const wrapPageElement = ({element}) => (
    <PageWrapper>
      {element}
    </PageWrapper>
);