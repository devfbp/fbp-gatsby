import * as React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Seo from "../components/seo"
import Layout2 from '../components/layout2'
import LocationDetailsPage from "../components/property-location/location-details"
import Banner from "../components/property-location/banner"

const PropertyLocationDetails = () => {
  const pageurl = typeof window !== "undefined" ? window.location.href : "";
  const spliturl = pageurl.split("/");
  const slugtext = spliturl[(spliturl.length) - 2];
  
  const { loading, error, data } = useQuery(LocationDetails, {
    variables: { Slug: slugtext },
    fetchPolicy: "no-cache"
  });

  if (loading) {
    return <></>
  }
  if (error) {
    return <>error</>
  }
  const LocationDetail = data?.propertyLocations?.data;

  return (
    <>
      {LocationDetail &&
        <Layout2>
          {/* <PageHeader headertitle="News Details" /> */}
          <div className="ltn__shop-details-area pb-10">
               <Banner LocationDetail={LocationDetail} />
               <LocationDetailsPage LocationDetail={LocationDetail} />
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
const LocationDetails = gql`
  query PropertyLocationDetails($Slug: String!) {
    propertyLocations(filters:{Slug:{eq: $Slug}}) {
      data{
        attributes{
          Name
          Slug
          State
          Description
          Sort
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

export default PropertyLocationDetails
