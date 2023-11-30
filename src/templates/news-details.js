import * as React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Seo from "../components/seo"
import Layout2 from '../components/layout2'
import PageHeader from "../components/global-components/page-header"
import BlogSlider from "../components/blog-components/blog-slider-v1"
import BlogDetails from "../components/blog-components/blog-details"

const NewsDetailsTemplate = () => {
  const pageurl = typeof window !== "undefined" ? window.location.href : "";
  const spliturl = pageurl.split("/");
  const slugtext = spliturl[(spliturl.length) - 2];

  const { loading, error, data } = useQuery(NewsDetails, {
    variables: { Slug: slugtext },
    fetchPolicy: "no-cache"
  });

  if (loading) {
    return <></>
  }
  if (error) {
    return <>error</>
  }

  const newslists = data?.blogs?.data;
  console.log("newslists=>", newslists);

  return (
    <>
      {newslists &&
        <Layout2>
          {/* <PageHeader headertitle="News Details" /> */}
          <div className="ltn__shop-details-area pb-10">
            <div className="container">
              <div className="row">
                <div className="ltn__breadcrumb-inner">
                  <h2 className="ltn__blog-title">{newslists[0]?.attributes?.Title}</h2>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li><a href="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</a></li>
                      <li>{"News"}</li>
                    </ul>
                  </div>
                </div>
                <BlogDetails newsdetail={newslists[0]?.attributes} />
              </div>
            </div>
            <BlogSlider sectionClass="pt-120" title={"Leatest News"} />
          </div>
        </Layout2>
      }
    </>

  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

//(filter: {drupal_id: {eq: $id}}) 
const NewsDetails = gql`
  query NewsDetails($Slug: String!) {
    blogs(filters:{Slug:{eq: $Slug}}) {
      data {
        id
        attributes {
          Title
          Slug
          Description
          Posted_At
          Tags {
            id
            Tag{
              data{
                attributes{
                  Name
                }
              }
            }
          }
          Image{
            data{
              attributes{
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;
export const Head = () => <Seo title="News Details" />

export default NewsDetailsTemplate
