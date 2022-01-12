import React from 'react';
import { WebsiteFrameContainer, WebsiteFrameHeader } from './StyledComponents';

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