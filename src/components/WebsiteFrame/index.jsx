import React from 'react';
import { WebsiteFrameContainer, WebsiteFrameHeader } from './StyledComponents';

const WebsiteFrame = ({ children }) => {
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

export default WebsiteFrame;