import { useStaticQuery, graphql } from "gatsby"

export const useProfileImage = () => {
  const { sanityContentImage } = useStaticQuery(
    graphql`
      {
        sanityContentImage(slug: {current: {eq: "profile-image"}}) {
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