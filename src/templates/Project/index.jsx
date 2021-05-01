import React from "react";
import PortableText from "../../components/PortableText";
import Image from 'gatsby-image';
import { graphql } from "gatsby";

import './style.scss';
import TitledBlock from "../../components/TitledBlock";

export const query = graphql`
  query ($slug: String!) {
    project: sanityProject(slug: {current: {eq: $slug}}) {
      ...SanityProjectFragment
    }
  }
`;

const Project = (props) => {

  const { project } = props.data;
  const { description, impact, name, photos, synopsis, technologyThoughts, thumbnail, externalLinks } = project;

  return (
    <div className="project">

        <div className="header">
          <h1>{name}</h1>
          <Image fluid={{...thumbnail.asset.fluid }}/>
        </div>

        <div className="body">
          <TitledBlock title="Synopsis">
            <PortableText blocks={synopsis}/>
          </TitledBlock>

          <TitledBlock title="Description">
            <PortableText blocks={description}/>
          </TitledBlock>

          <TitledBlock title="Impact">
            <PortableText blocks={impact}/>
          </TitledBlock>

          <TitledBlock title="Technology Thoughts">
            <PortableText blocks={technologyThoughts}/>
          </TitledBlock>
        </div>

        { externalLinks.map( (externalLink, i) => (
          <a 
            href={externalLink.linkUrl || ''}
            target="__blank"
          >{externalLink.linkText}</a>
        ) ) }

        <TitledBlock title="Gallery">
          <div className="gallery">
            { photos.map( (photo, i) => <Image key={i} fluid={{ ...photo.asset.fluid }}/>) }
          </div>
        </TitledBlock>

    </div>
  )
};

export default Project;