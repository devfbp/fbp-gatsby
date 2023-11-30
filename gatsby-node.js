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
  const PropertyTemplate = path.resolve("./src/templates/property-details.js");
  const NewsDetailsTemplate = path.resolve("./src/templates/news-details.js");
  const PropertyLocationDetails = path.resolve("./src/templates/property-location-details.js");
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createPage({
    path: "/product-details",
    matchPath: "/product-details/:property_id",
    component: PropertyTemplate,
  })
  createPage({
    path: "/news",
    component: require.resolve("./src/templates/news-result.js"),
    context: {},
    defer: true,
  })
  createPage({
    path: "/news-details",
    matchPath: "/news/:id",
    component: NewsDetailsTemplate,
  })
  createPage({
    path: "/properties-by-location",
    component: require.resolve("./src/templates/property-location.js"),
    context: {},
    defer: true,
  })
  createPage({
    path: "/property-location",
    matchPath: "/property-location/:id",
    component: PropertyLocationDetails,
  })
}
