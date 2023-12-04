/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createPage({
    path: "/property-details",
    matchPath: "/property-details/:property_id",
    component: require.resolve("./src/templates/property-details.js")
  })
  createPage({
    path: "/property-results",
    component: require.resolve("./src/templates/property-results.js")
  })
  createPage({
    path: "/news",
    component: require.resolve("./src/templates/news-result.js")
  })
  createPage({
    path: "/news-details",
    matchPath: "/news/:id",
    component: require.resolve("./src/templates/news-details.js")
  })
  createPage({
    path: "/property-locations",
    component: require.resolve("./src/templates/property-location.js")
  })
  createPage({
    path: "/property-location-details",
    matchPath: "/property-location-details/:id",
    component: require.resolve("./src/templates/property-location-details.js")
  })

}
