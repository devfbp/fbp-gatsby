import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageBanner from '../components/HomePageBanner/HomePageBanner';
import PropertyType from "../components/PropertyType/PropertyType";
import CallService from "../components/CallService/CallService"
import LatestProperty from '../components/LatestProperty/LatestProperty';
import { useStaticQuery, graphql } from "gatsby";
import '../scss/common.scss';
import Container from "react-bootstrap/esm/Container";


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
          Module_Enabled {
            Enabled
            Name
            Collection_Name
          }
        }
      }
    `);
  const HomeArticleData = qryData?.strapiArticle;
  const Module_Enabled = HomeArticleData?.Module_Enabled;
  return (
    <Layout>
      <>
        {HomeArticleData?.Banner_Image &&
          <HomePageBanner dataV={HomeArticleData} />
        }
        <Container>
          {Module_Enabled && Module_Enabled.map((module, index) => (
            <>
              {module?.Enabled == true &&
                <>
                  {module && module?.Collection_Name === "Property_Type" &&
                    <PropertyType title={module?.Name} />
                  }
                </>
              }
            </>
          ))
          }
          <a href="#" className="a-tag">
            <CallService />
          </a>
        </Container>

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
