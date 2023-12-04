import * as React from "react"
import Layout2 from "../components/layout2"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Seo from "../components/seo"
import Slider from "../components/property-details/slider"
import Detail from "../components/property-details/detail"
import Description from "../components/property-details/description"
import Features from "../components/property-details/features"
import Amenities from "../components/property-details/amenities"
import FloorPlan from "../components/property-details/floor_plans"
import Video from "../components/property-details/video"
import EnquiryForm from "../components/property-details/enquiry_form"
import RelatedProperty from "../components/property-details/related_property"
import GooglMap from "../components/property-details/map"
import Advantages from "../components/property-details/advantages"
import Downloads from "../components/property-details/downloads"
import Builder from "../components/property-details/builder"
import $ from 'jquery';

const PropertyDetailsTemplate = () => {
  const pageurl = typeof window !== "undefined" ? window.location.href : "";
  const spliturl = pageurl.split("/");
  const property_id = spliturl[(spliturl.length) - 2];
  const { loading, error, data } = useQuery(PROPERTY_DETAILS, {
    variables: { Property_Id: property_id },
  });
  if (loading) {
    return <div className="custom-loader"></div>
  }
  if (error) {
    return <>error</>
  }
  let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
  const propertyDetail = data?.properties?.data[0]?.attributes;
  console.log(propertyDetail);
  return (
    <>
      {data &&
        <Layout2>
          <div className="ltn__shop-details-area pb-10" id="property_details">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                    <h1 className="ltn__widget-title-border-2">{propertyDetail?.Name}</h1>
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-category">
                          <a href="#">{propertyDetail?.Status?.data?.attributes?.Name}</a>
                        </li>
                        <li className="ltn__blog-category">
                          <a className="bg-orange" href="#">{propertyDetail?.Type?.data?.attributes?.Name}</a>
                        </li>
                      </ul>
                    </div>

                    <label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span> {propertyDetail?.Area?.data?.attributes?.Name}, {propertyDetail?.Area?.data?.attributes?.Location?.data?.attributes?.Name}</label>
                    <Slider images={propertyDetail?.Images} main_image={propertyDetail?.Main_Image} />

                    <Detail detail={propertyDetail} title={"Property Detail"} />

                    <Description desc={propertyDetail?.Description} title={"Property Description"} />

                    <FloorPlan floorplans={propertyDetail?.Floor_Plans} unit_types={propertyDetail?.Unit_Types} title={"Floor Plans"} />

                    <Advantages advantages={propertyDetail?.Advantages} title={propertyDetail?.Advantages?.Name} />

                    <Downloads downloads={propertyDetail?.Downloads} title={"Downloads"} />

                    <Features features={propertyDetail?.Features} title={"Features"} />
                    {propertyDetail?.Video?.length > 0 &&
                      <Video video={propertyDetail?.Video} title={"Video"} mimage={propertyDetail?.Main_Image} />
                    }
                    <Amenities amenities={propertyDetail?.Amenities} title={"Amenities"} />
                    <GooglMap />

                    <Builder builder={propertyDetail?.Builder} title={"Builder"} />
                    <RelatedProperty />
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                    <EnquiryForm fdata={propertyDetail} />
                    <div className="widget ltn__banner-widget d-none go-top">
                      <a href="/shop"><img src={PublicUrl + "assets/img/banner/2.jpg"} alt="#" /></a>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
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


const PROPERTY_DETAILS = gql`
query PropertyDetails ($Property_Id: String!){
  properties (filters:{Property_Id:{eq:$Property_Id}}) {
    data {
      id 
      attributes {
        Bathrooms
        Bedrooms
        Description
        Door_No
        Latitude
        Longitude
        Name
        Posted_At
        Price
        Price_Per_Sq_Feet
        Project_Size
        Property_Id
        Publish
        Street_Name
        Total_Floors
        Unit_Size
        Video
        Images {
          data {
            attributes {
              url
              formats
            }
          }
        }
        Area {
          data {
            attributes {
              Name
              Location {
                data {
                  attributes {
                    Name                    
                  }
                }
              }
            }
          }
        }
        Builder {
          data {
            attributes {
              Name
              Description
              Image {
                data {
                  attributes {
                    url
                    formats
                  }
                }
              }
            }
          }
        }
        Downloads {
          id
          Name
          Link
        }
        Features {
          Name
          Description
        }
        Floor_Plans {
          Floor
          Description
          Image {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
        Main_Image {
          data {
            attributes {
              url
              formats
            }
          }
        }
        Status {
          data {
            attributes {
              Name
            }
          }
        }
        Unit_Types {
          Unit_Type
          Document {
            data {
              attributes {
                url
                formats
              }
            }
          }
          Saleable_Area
          RERA_Carpet_Area          
        }
        Amenities {
          Name          
        }
        Type {
          data {
            attributes {
              Name
            }
          }
        }
        Advantages {
          Description
          Name
          
        }
      }
    }
  }
}
`
export const Head = () => <Seo title="Home" />

export default PropertyDetailsTemplate
