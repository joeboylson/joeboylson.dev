import { useStaticQuery, graphql } from "gatsby"

export const useProjectsImage = () => {
  const { sanityContentImage } = useStaticQuery(
    graphql`
      {
        sanityContentImage(slug: {current: {eq: "projects-image"}}) {
          contentImageItem {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    `
  )
  return sanityContentImage.contentImageItem
}