import styled from "styled-components";
import React from "react";

export const NavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: var(--background);
    border-bottom: 1px solid black;
    z-index: +1;
`;
    
export const NavLinkListWrapper = styled.div`
    padding: 12px 36px;
    display: flex;
    gap: 6px;
    margin: auto;
    max-width: calc(1400px - 48px);
`

const Component = () => (<span></span>);
export default Component