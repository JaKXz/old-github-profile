module.exports = {
  siteMetadata: {
    title: `Jason Kurian`,
    description: `Welcome to my portfolio, enjoy your stay!`,
    author: `@JaKXz92`,
  },
  plugins: [
    `gatsby-plugin-page-transitions`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [
          require("remark-breaks"),
          require("remark-external-links"),
        ],
      },
    },
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
        name: `jason-kurian-portfolio`,
        short_name: `jk-portfolio`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
