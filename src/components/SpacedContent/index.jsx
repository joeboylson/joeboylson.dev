import React from 'react';
import styled from 'styled-components';

const StyledSpacedContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const SpacedContent = ({children}) => (
    <StyledSpacedContent>
        { children }
    </StyledSpacedContent>
)

export default SpacedContent;