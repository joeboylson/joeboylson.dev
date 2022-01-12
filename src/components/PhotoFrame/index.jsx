import React from "react";
import styled from "styled-components";

const WebsiteFrameContainer = styled.div`
    border: 1px solid black;
    max-width: 750px;
`;

const WebsiteFrameHeader = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    padding: 12px;
    gap: 12px;

    span {
        border: 1px solid black;
        display: block;
        width: 12px;
        height : 12px;
        border-radius: 24px;
    }
`;

const PhotoFrame = ({ children }) => {
    return (
        <WebsiteFrameContainer>
            <WebsiteFrameHeader>
                <span/>
                <span/>
                <span/>
            </WebsiteFrameHeader>
            { children }
        </WebsiteFrameContainer>
    )
}

export default PhotoFrame;