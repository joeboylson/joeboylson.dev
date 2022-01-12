module.exports = {
  siteMetadata: {
    title: `Joe Boylson`,
    description: `A showcase select projects and photographs`,
    author: `Joe Boylson`,
  },
  plugins: [{
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass')
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `public/joeboylson.dev-icon.ico`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "3x16lepa",
        dataset: "production"
      }
    }
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}