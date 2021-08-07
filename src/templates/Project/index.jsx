import React from "react";
import { graphql } from "gatsby";

import Tabs from "../../components/Tabs"
import WebScreenshot from "../../components/WebScreenshot";
import FlexTitle from "../../components/FlexTitle";

import './style.scss';

export const query = graphql`
  query ($slug: String!) {
    project: sanityProject(slug: {current: {eq: $slug}}) {
      ...SanityProjectFragment
    }
  }
`;

const Project = ({data: {project}}) => {

  // const { project } = data;
  const { description, impact, name, photos, synopsis, technologyThoughts, thumbnail, externalLinks } = project;

  return (
    <div className="project">

      <FlexTitle text={`Hi, I'm Joe`}/>

      <h1>Hi, I'm Joe</h1>
      <h2>Hi, I'm Joe</h2>

      <Tabs
        title="Likes & Dislikes"
        tabs={[
          { title: "What I like" },
          { title: "What I dislike" },
        ]}
      />

      <WebScreenshot fluid={{...thumbnail.asset.fluid }}/>
      <WebScreenshot fluid={{...thumbnail.asset.fluid }}/>
      <WebScreenshot fluid={{...thumbnail.asset.fluid }}/>
      <WebScreenshot fluid={{...thumbnail.asset.fluid }}/>
      <WebScreenshot fluid={{...thumbnail.asset.fluid }}/>

        {/* <div className="header">
          <h1>{name}</h1>
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
        </TitledBlock> */}

    </div>
  )
};

export default Project;