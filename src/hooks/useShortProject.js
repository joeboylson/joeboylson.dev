import { useStaticQuery, graphql } from "gatsby"

export const useShortProject = () => {
  const { allSanityProject } = useStaticQuery(
    graphql`
      {
        allSanityProject {
          nodes {
            id
            name
            slug {
              current
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
      }
    `
  )
  return allSanityProject.nodes
}