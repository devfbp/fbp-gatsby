/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env`,
});
module.exports = {
  siteMetadata: {
    title: `${process.env.GATSBY_SITE_NAME}`,
    description: `Full Basket Property is The Fastest-Growing Company in The Online Real Estate Space, With The Vision to Become a One-Stop-Shop for All Kinds of Real Estate Need`,
    author: `@gatsbyjs`,
    siteUrl: `${process.env.GATSBY_SITE_URL}`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F8A386`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fbp-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-strapi-graphql',
      options: {
        apiURL: process.env.GATSBY_STRAPI_SITE_URL,
        collectionTypes: ['article','menu'],
        singleTypes: ['site-configuration'],
        // Extract images from markdown / richtext fields.
        inlineImages: {
          typesToParse: {
            Article: ['body'],
            ComponentBlockBody: ['text'],
          },
        },
        // Only include specific locales.
        locale: ['en', 'sv'], // defaults to 'all'
        // Include drafts in build.
        preview: true, // defaults to false
        // Use application token.
        token: process.env.GATSBY_STRAPI_ACCESS_TOKEN,
        // Add additional headers.
        //headers: {},
        // headers: {
        //   // Learn about environment variables: https://gatsby.dev/env-vars
        //   Authorization: `Bearer ${process.env.GATSBY_STRAPI_ACCESS_TOKEN}`,
        // },
        // Enable/disable cache.
        cache: false,
      },
    }
  ],
}
