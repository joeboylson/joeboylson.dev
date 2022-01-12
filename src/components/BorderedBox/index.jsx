import React from "react"
import styled from "styled-components"

const StyledBorderedBox = styled.div`
    border: 1px solid black;
    padding: 24px;
`;

const BorderedBox = ({ children }) => {   

  return (
    <StyledBorderedBox>
      { children }
    </StyledBorderedBox>
  )
}

export default BorderedBox
