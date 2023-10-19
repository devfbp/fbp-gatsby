import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageBanner from '../components/HomePageBanner/HomePageBanner';
import LatestProperty from '../components/LatestProperty/LatestProperty';
import { useStaticQuery, graphql } from "gatsby";
import '../scss/common.scss';

const IndexPage = () => {
  const qryData = useStaticQuery(graphql`
      query HomeArticleData {
        strapiArticle(Alias: {eq: "home"}) {
          id
          Alias
          Banner_Image {
            id
            file {
              childImageSharp {
                gatsbyImageData(height: 420, width: 1300)
              }
            }
          }
          Name
          Menu_Link {
            Menu_Link
            Name
            Menu_Type
            Menu_Link_Type
          }
          Description
          Banner_Text
          Banner_Image_Mobile {
            file {
              childImageSharp {
                gatsbyImageData(height: 420, width: 378)
              }
            }
          }
        }
      }
    `);
  const HomeArticleData = qryData?.strapiArticle;
  return (
    <Layout>
      <>
      {HomeArticleData?.Banner_Image &&
        <HomePageBanner dataV={HomeArticleData} />
      }
      </>
    </Layout>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
