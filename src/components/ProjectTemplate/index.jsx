import React from "react";
import styled from "styled-components";
import SpacedContent from "../../components/SpacedContent";
import ImageBox from "../../components/ImageBox";
import Page from "../Page";
import BodyCopy from "../BodyCopy";
import WebsiteFrame from '../WebsiteFrame';
import Image from 'gatsby-image';
import PortableText from "../PortableText";
import Grid from "../Grid";
import { graphql } from 'gatsby';

const ProjectTextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;

    div:nth-child(2) {
        align-self: flex-end;
    }
`;

const ProjectTextContentItem = styled.div`
    width: 100%;
    max-width: 700px;
`;

export const query = graphql`
  query ($id: String!) {
    sanityProject(id: {eq: $id}) {
      description: _rawDescription
      impact: _rawImpact
      synopsis: _rawSynopsis
      technologyThoughts: _rawTechnologyThoughts
      name
      id
      slug {
        current
      }
      externalLinks: external_links {
        linkText: link_text
        linkUrl: link_url
      }
      photos {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      thumbnail {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }    
    }
  }
`;

const ProjectTemplate = ({data: { sanityProject }}) => {

  const { description, impact, synopsis, technologyThoughts, name, externalLinks, photos, thumbnail} = sanityProject;

  return (
    <Page>

        {/* Project Name */}
        <h2>{name}</h2>

        {/* Project Image, Synopsis, Links */}
        <ImageBox fluid={thumbnail.asset.fluid}>
            <SpacedContent>
                <BodyCopy>
                  <PortableText blocks={ synopsis }/>
                </BodyCopy>

                { externalLinks.map((link, i) => (
                  <a href={link.linkUrl} key={i}>{link.linkText}</a>
                ))}
            </SpacedContent>
        </ImageBox>

        <ProjectTextContent>

            {/* Description */}
            <ProjectTextContentItem>
                <SpacedContent>
                    <h3>Description</h3>
                    <PortableText blocks={ description }/>
                </SpacedContent>
            </ProjectTextContentItem>

            {/* Impact */}
            <ProjectTextContentItem>
                <SpacedContent>
                    <h3>Impact</h3>
                    <PortableText blocks={ impact }/>
                </SpacedContent>
            </ProjectTextContentItem>

            {/* Technology Thoughts */}
            <ProjectTextContentItem>
                <SpacedContent>
                    <h3>Technology Thoughts</h3>
                    <PortableText blocks={ technologyThoughts }/>
                </SpacedContent>
            </ProjectTextContentItem>

        </ProjectTextContent>
        

        <Grid>
            { photos.map((photo, i) => (
              <WebsiteFrame key={i}>
                <Image fluid={{...photo.asset.fluid, aspectRatio: 16/9}}/>
              </WebsiteFrame> 
            ))}
        </Grid>

    </Page>
  )
}

export default ProjectTemplate
