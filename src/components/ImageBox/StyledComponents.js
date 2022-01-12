import styled from "styled-components";
import React from "react";

export const ImageBoxContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid black;
    padding: 24px;
    gap: 24px;

    &.skewright {
        grid-template-columns: 3fr 1fr;
    }

    &.skewleft {
        grid-template-columns: 1fr 3fr;
    }
`;

export const ImageBoxImage = styled.img`
    width: 100%;
`;

const Component = () => (<span></span>);
export default Component;