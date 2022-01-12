import React, { useEffect } from "react"
import styled from "styled-components";
import Nav from "../Nav";
import { withPrefix } from "gatsby-link";
import { Helmet } from "react-helmet";

import "../../index.scss";

const PageWrapperContainer = styled.div`
    position: relative;
    max-width: 1400px;
    margin: auto;
`

const ScrollContainer = styled.main`
    padding: 96px 24px;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.17,0.84,0.44,1);
`;

const PageWrapper = ({children}) => {

    useEffect(() => {
        // listen to page changes
        const event = new CustomEvent('page-change');
        window.dispatchEvent(event)
    })

    return (
        <PageWrapperContainer>
            <Helmet>
                <script src={ withPrefix('scroll.js') } type="text/javascript" />
                <script src={ withPrefix('bodyCopy.js') } type="text/javascript" />
            </Helmet>

            <Nav/>

            <ScrollContainer>
                { children }
            </ScrollContainer>

        </PageWrapperContainer>
    )
};

export default PageWrapper
