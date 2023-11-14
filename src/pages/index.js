import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo"
import Banner from '../components/section-components/banner-v3';
import SearchForm from '../components/section-components/search-form';
import Features from '../components/section-components/features-v1';
import ProductSlider from '../components/section-components/product-slider-v3';
import FeaturedItem from '../components/section-components/featured-item-v1';
import Video from '../components/section-components/video-v1';
import Testimonial from '../components/section-components/testimonial-v3';
import Sponsor from '../components/section-components/sponsor-v1';
import BlogSlider from '../components/blog-components/blog-slider-v1';
import CallToActionV1 from '../components/section-components/call-to-action-v1';

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
                gatsbyImageData(height: 900, width: 1920)
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
          <Banner HomeArtl={HomeArticleData} />
        }
        {Module_Enabled && Module_Enabled.map((module, index) => (
          <>
            {module?.Enabled === true &&
              <>
                {module && module?.Collection_Name === "Search_Form" &&
                  <SearchForm />
                }
                {module && module?.Collection_Name === "Property_Type" &&
                  <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
                }
                {module && module?.Collection_Name === "Area" &&
                  <ProductSlider title={module?.Name} />
                }
                {module && module?.Collection_Name === "Latest_Property" &&
                  <FeaturedItem />
                }
                {module && module?.Collection_Name === "Video" &&
                  <Video />
                }
                {module && module?.Collection_Name === "Clients_Feedback" &&
                  <Testimonial />
                }
                {module && module?.Collection_Name === "Builder" &&
                  <Sponsor />
                }
                {module && module?.Collection_Name === "News" &&
                  <BlogSlider sectionClass="pt-120" />
                }
                {module && module?.Collection_Name === "Call_To_Action" &&
                  <CallToActionV1 />
                }
              </>
            }
          </>
        ))
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
