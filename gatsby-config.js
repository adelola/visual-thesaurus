module.exports = {
  siteMetadata: {
    title: `Visual Thesaurus`,
    description: `A visual (optical ocular perceptible imaged viewable) way to get synonyms`,
    author: `Adelola`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `visual-thesaurus`,
        short_name: `vhesaurus`,
        start_url: `/`,
        background_color: `#FF3F00`,
        theme_color: `#FF7F11`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
