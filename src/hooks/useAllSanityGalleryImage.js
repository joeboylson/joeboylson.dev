import { useStaticQuery, graphql } from "gatsby"

export const useAllSanityGalleryImage = () => {
  const { allSanityGalleryImage } = useStaticQuery(
    graphql`
      query {
        allSanityGalleryImage {
          nodes {
            name
            caption: _rawCaption
            image {
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
  return allSanityGalleryImage.nodes
}