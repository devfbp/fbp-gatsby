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
}
