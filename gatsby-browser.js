import React from "react";
import PageWrapper from './src/components/PageWrapper';

import { PageTransitionProvider } from './src/context/PageTransition';

export const wrapPageElement = ({element}) => (
  <PageTransitionProvider>
    <PageWrapper>
      {element}
    </PageWrapper>
  </PageTransitionProvider>
);