import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BannerImag from '../components/BannerImage/BannerImage';
import LatestProperty from '../components/LatestProperty/LatestProperty';
import { useStaticQuery, graphql } from "gatsby";
import '../scss/common.scss';

const IndexPage = () => {
  const qryData = useStaticQuery(graphql`
      query HomeArticleData {
        strapiArticle(Name: {eq: "Test"}) {
          id
          Alias
          Article_Component {
            ... on StrapiComponentArticleBannerImage {
              id
              Name
              Images {
                file {
                  childrenImageSharp {
                    gatsbyImageData(width: 1300, height: 520, formats: WEBP)
                  }
                }
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
        }
      }
    `);
  //console.log("log:",qryData?.glstrapi?.article?.data?.attributes?.Custom_Componetnt);
  const Article_Component = qryData?.strapiArticle?.Article_Component;
  
  return (
    <Layout>
      {Article_Component && Article_Component.map((componetnt, index) =>(
          <>
          {componetnt && componetnt.Name==="Test" &&
            <>
              {/* <BannerImag data={componetnt} /> */}
            </>
          }
          {componetnt && componetnt.Name=="Latest Properties" &&
            <>
            <LatestProperty data={componetnt} />
            </>
          }
          </>
        ))
      }
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
