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
import EnquiryButton from "../components/property-details/enquiry_button"
import $ from 'jquery';

const PropertyDetailsTemplate = () => {
  const pageurl = typeof window !== "undefined" ? window.location.href : "";
  const spliturl = pageurl.split("/");
  const property_id = spliturl[(spliturl.length) - 2];
  const { loading, error, data } = useQuery(PROPERTY_DETAILS, {
    variables: { id: property_id },
  });
  if (loading) {
    return <></>
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
                    <Slider images={propertyDetail?.Images} />

                    <Detail detail={propertyDetail} title={"Property Detail"} />

                    <Description desc={propertyDetail?.Description} title={"Property Description"} />

                    <FloorPlan floorplans={propertyDetail?.Floor_Plans} title={"Floor Plans"} />

                    <Features features={propertyDetail?.Features} title={"Features"} />

                    <Video video={propertyDetail?.Video} title={"Video"} mimage={propertyDetail?.Main_Image} />

                    <Amenities amenities={propertyDetail?.Amenities} title={"Amenities"} />

                    <div className="box-shadow-1">
                      <h4 className="title-2">Location</h4>
                      <div className="property-details-google-map mb-60">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                      </div>
                    </div> <RelatedProperty />
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
query PropertyDetails {
  properties (filters:{Property_Id:{eq:"akshaya-tango-21"}}) {
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
      }
    }
  }
}
`
export const Head = () => <Seo title="Home" />

export default PropertyDetailsTemplate
