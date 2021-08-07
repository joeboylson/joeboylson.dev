import { useStaticQuery, graphql } from "gatsby"

export const useProfilePhoto = () => {
  const { sanityContentImage } = useStaticQuery(
    graphql`
      query {
        sanityContentImage(slug: {current: {regex: "/profile-photo/"}}) {
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
  return sanityContentImage.contentImageItem.asset.fluid
}