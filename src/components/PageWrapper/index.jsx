import React, { useEffect } from "react"
import Nav from "../Nav";
import { withPrefix } from "gatsby-link";
import { Helmet } from "react-helmet";
import { PageWrapperContainer, ScrollContainer } from "./StyledComponents";

import "../../index.scss";

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

            <ScrollContainer id="scroll-container">
                { children }
            </ScrollContainer>

        </PageWrapperContainer>
    )
};

export default PageWrapper
