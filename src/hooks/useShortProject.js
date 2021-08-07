import { useStaticQuery, graphql } from "gatsby"

export const useShortProject = () => {
  const { allSanityProject } = useStaticQuery(
    graphql`
      query {
        allSanityProject {
          nodes {
            id
            name
            synopsis: _rawSynopsis
          }
        }
      }
    `
  )
  return allSanityProject.nodes
}