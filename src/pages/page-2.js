import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <a href="/">Go back to the homepage</a>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
