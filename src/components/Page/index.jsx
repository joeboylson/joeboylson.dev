import React from 'react';
import styled from 'styled-components';

export const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 144px;
`

const Page = ({children}) => (
    <StyledPage>
        { children }
    </StyledPage>
)

export default Page;