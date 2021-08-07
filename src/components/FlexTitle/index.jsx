import React from "react";

import { ReactFitty as Title } from "react-fitty";

import './style.scss';

const FlexTitle = ({children}) => {

  return (
    <Title className="flex-title">{children}</Title>
  );
};

export default FlexTitle;