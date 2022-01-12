import React from "react"
import BodyCopy from "../../components/BodyCopy"
import Page from "../../components/Page"
import Image from 'gatsby-image';
import Grid from "../../components/Grid";
import { ProjectGridItem, ProjectGridItemTitle } from "./StyledComponents"
import { useShortProject } from "../../hooks/useShortProject"
import { useCursorText } from "../../hooks/useCursorText";
import { useProjectsImage } from "../../hooks/useProjectsImage";
import ImageBox from "../../components/ImageBox";

const ProjectsPage = () => {

  const projects = useShortProject();
  const projectsImage = useProjectsImage();
  const { applyHoverText } = useCursorText();

  return (
    <Page>

      <h2>Projects</h2>

      <ImageBox
        fluid={{...projectsImage.asset.fluid, aspectRatio: 1/1}}
      >
        <BodyCopy
            sections={[
              `Below are a collection of web projects that range from simple tools for personal use to
              real client projects.`,
              `I have not included any work projects, but some of the technologies we've used are: React, 
              Typescript, GraphQL, Python, Ruby-on-Rails, Docker, Postgres, and MySQL.`,
              `My work has always been as a full-stack developer, which means that I can handle any layer of the
              website: I can work on the UI/UX of the website, the very technical backend, and everything in between.`,
              `I am still a student but I have over 4 years of experience as a web developer. I have been consistently
              working full-time and part-time since January 2nd of 2018.`,
              `To the left is a photo I took back in 2018 at my old job where this all started. I worked on the 7th floor
              and had an amazing view of the river and the east side of Cincinnati. This photo shows my workspace: placed
              on the corner of my Mac Mini is a Chinese 1¥ coin that my co-worker gave me.`
            ]}
          />
      </ImageBox>

      <Grid>
        { projects.map((project, i) => (
          <ProjectGridItem 
            href={`projects/${project.slug.current}`} 
            key={i}
            {...applyHoverText(`➯ Open ${project.name}`)}
          >
            <Image fluid={project.thumbnail.asset.fluid}/>
            <ProjectGridItemTitle>
              { project.name }
              <p>➯</p>
            </ProjectGridItemTitle>
          </ProjectGridItem>
        ))}
      </Grid>

    </Page>
  )
}

export default ProjectsPage
