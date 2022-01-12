import styled from "styled-components";
import React from "react";

// eslint-disable-next-line limited-exports-page-templates
export const GreetingWrapper = styled.div`
    height: 75vh;
    display: grid;
    place-items: center;

    h1 {
        color: var(--foreground-accent);
    }
`;

const Component = () => (<span></span>);
export default Component