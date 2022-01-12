import React from "react";
import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`;

const Grid = ({ children }) => (
    <GridContainer>
        { children }
    </GridContainer>
);

export default Grid;
