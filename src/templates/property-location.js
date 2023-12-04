import * as React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Seo from "../components/seo"
import Layout2 from '../components/layout2'
import PageHeader from "../components/global-components/page-header"
import PropertyLocation from '../components/property-location/location-grid';
import BlogSlider from "../components/blog-components/blog-slider-v1";
import FeaturedItemV1 from "../components/section-components/featured-item-v1"
import Contact from "../components/property-location/location-contact"

const PropertyLocations = () => {
  const { loading, error, data } = useQuery(PROPERTY_LOCATION);
  if (loading) {
    return <></>
  }
  if (error) {
    return <>error</>
  }
  const locationResult = data?.propertyLocations?.data
  return (
    <>
      {locationResult &&
        <Layout2>
          <PageHeader headertitle="Properties Locations" />
          <div className="ltn__shop-details-area pb-10">
            <div className="container">
              <div className="row">
                <PropertyLocation locationresults={locationResult} />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <FeaturedItemV1 sectionClass="pt-120" title={"Upcoming Projects"} />
              </div>
            </div>
          </div>
          <Contact />
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


const PROPERTY_LOCATION = gql`
query LocationResults {
  propertyLocations{
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
`
export const Head = () => <Seo title="News" />

export default PropertyLocations
