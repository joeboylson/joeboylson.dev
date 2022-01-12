import styled from "styled-components";
import React from "react";

// eslint-disable-next-line limited-exports-page-templates
export const GalleryRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

// eslint-disable-next-line limited-exports-page-templates
export const SelectedImageContainer = styled.div`
    width: ${props => props.orientation === "portrait" ? "40%" : "60%" };
`;

// eslint-disable-next-line limited-exports-page-templates
export const CloseImageLabel = styled.p`
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    padding: 4px;
    margin: 4px;
    font-size: 10px;
`;

const Component = () => (<span></span>);
export default Component