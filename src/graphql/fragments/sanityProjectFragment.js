import { graphql } from "gatsby";

export const sanityProjectFragment = graphql`
  fragment SanityProjectFragment on SanityProject {
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
`;