import { graphql } from 'gatsby';

export const ProjectFragment = graphql`
  fragment ProjectFragment on SanityProject {
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
    _rawSynopsis
    _rawTechnologyThoughts
    _rawImpact
    _rawDescription
    external_links {
        link_text
        link_url
    }
    photos {
        asset {
            fluid {
                ...GatsbySanityImageFluid
            }
        }
    }
  }
`;