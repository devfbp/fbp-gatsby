import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo"
import Banner from '../components/section-components/banner-v3';
import SearchForm from '../components/section-components/search-form';
import PropertyType from '../components/section-components/property-type';
import PropertyLocation from '../components/section-components/propperty-location';
import FeaturedItem from '../components/section-components/featured-item-v1';
import VideoBanner from '../components/section-components/video-banner';
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
          Name
          Menu_Link {
            Menu_Link
            Name
            Menu_Type
            Menu_Link_Type
          }
          Banners {
            Image {
              file {
                childImageSharp {
                  gatsbyImageData(width: 1920, height: 900)
                }
              }
            }
            Description
            Line_1
            Line_2
            Line_3
            Line_4
          }
          Module_Enabled {
            Enabled
            Name
            Collection_Name
          }
          Video_Banners {
            Name
            URL
            Image {
              file {
                childImageSharp {
                  gatsbyImageData(width: 1923, height: 443)
                }
              }
            }
          }
        }
      }
    `);
  const HomeArticleData = qryData?.strapiArticle;
  const Module_Enabled = HomeArticleData?.Module_Enabled;
  return (
    <Layout>
      <>
        {HomeArticleData?.Banners &&
          <Banner Banners={HomeArticleData?.Banners} />
        }
        {Module_Enabled && Module_Enabled.map((module, index) => (
          <>
            {module?.Enabled === true &&
              <>
                {module && module?.Collection_Name === "Search_Form" &&
                  <SearchForm />
                }
                {module && module?.Collection_Name === "Property_Type" &&
                  <PropertyType customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
                }
                {module && module?.Collection_Name === "Area" &&
                  <PropertyLocation title={module?.Name} />
                }
                {module && module?.Collection_Name === "Latest_Property" &&
                  <FeaturedItem />
                }
                {module && module?.Collection_Name === "Video_Banners" &&
                  <VideoBanner Video={HomeArticleData?.Video_Banners} />
                }
                {module && module?.Collection_Name === "Clients_Feedback" &&
                  <Testimonial title={module?.Name} />
                }
                {module && module?.Collection_Name === "Builder" &&
                  <Sponsor />
                }
                {module && module?.Collection_Name === "News" &&
                  <BlogSlider sectionClass="pt-120" title={module?.Name} />
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
