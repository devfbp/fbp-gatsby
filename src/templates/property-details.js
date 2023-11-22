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
          <Slider images={propertyDetail?.Images} />
          <div className="ltn__shop-details-area pb-10">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                    <h1>{propertyDetail?.Name}</h1>
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
                    <Detail detail={propertyDetail} title={"Property Detail"} />
                    <Description desc={propertyDetail?.Description} title={"Property Description"} />
                    <Features features={propertyDetail?.Features} title={"Features"} />
                    <Amenities amenities={propertyDetail?.Amenities} title={"Amenities"} />
                    <h4 className="title-2">Location</h4>
                    <div className="property-details-google-map mb-60">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                    <FloorPlan floorplans={propertyDetail?.Floor_Plans} title={"Floor Plans"} />
                    <Video video={propertyDetail?.Video} title={"Video"} mimage={propertyDetail?.Main_Image} />



                    <h4 className="title-2">Related Properties</h4>
                    <div className="row">
                      {/* ltn__product-item */}
                      <div className="col-xl-6 col-sm-6 col-12 go-top">
                        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                          <div className="product-img">
                            <a href="/shop"><img src={PublicUrl + "assets/img/product-3/1.jpg"} alt="#" /></a>
                            <div className="real-estate-agent">
                              <div className="agent-img">
                                <a href="/team-details"><img src={PublicUrl + "assets/img/blog/author.jpg"} alt="#" /></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badg">For Rent</li>
                              </ul>
                            </div>
                            <h2 className="product-title"><a href="/shop">New Apartment Nice View</a></h2>
                            <div className="product-img-location">
                              <ul>
                                <li>
                                  <a href="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
                                </li>
                              </ul>
                            </div>
                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                              <li><span>3 </span>
                                Bedrooms
                              </li>
                              <li><span>2 </span>
                                Bathrooms
                              </li>
                              <li><span>3450 </span>
                                square Ft
                              </li>
                            </ul>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                    <i className="flaticon-expand" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                    <i className="flaticon-heart-1" /></a>
                                </li>
                                <li>
                                  <a href="/shop" title="Compare">
                                    <i className="flaticon-add" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info-bottom">
                            <div className="product-price">
                              <span>$349,00<label>/Month</label></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-xl-6 col-sm-6 col-12 go-top">
                        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                          <div className="product-img">
                            <a href="/shop"><img src={PublicUrl + "assets/img/product-3/2.jpg"} alt="#" /></a>
                            <div className="real-estate-agent">
                              <div className="agent-img">
                                <a href="/team-details"><img src={PublicUrl + "assets/img/blog/author.jpg"} alt="#" /></a>
                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badg">For Sale</li>
                              </ul>
                            </div>
                            <h2 className="product-title"><a href="/shop">New Apartment Nice View</a></h2>
                            <div className="product-img-location">
                              <ul>
                                <li>
                                  <a href="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
                                </li>
                              </ul>
                            </div>
                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                              <li><span>3 </span>
                                Bedrooms
                              </li>
                              <li><span>2 </span>
                                Bathrooms
                              </li>
                              <li><span>3450 </span>
                                square Ft
                              </li>
                            </ul>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                    <i className="flaticon-expand" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                    <i className="flaticon-heart-1" /></a>
                                </li>
                                <li>
                                  <a href="portfolio-details.html" title="Compare">
                                    <i className="flaticon-add" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info-bottom">
                            <div className="product-price">
                              <span>$349,00<label>/Month</label></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">

                    {/* Form Widget */}
                    <div className="widget ltn__form-widget">
                      <h4 className="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
                      <form action="#">
                        <input type="text" name="yourname" placeholder="Your Name*" />

                        <input type="text" name="yourphone" placeholder="Your Phone Number*" />
                        <input type="text" name="youremail" placeholder="Your e-Mail*" />
                        <button type="submit" className="btn theme-btn-1">Send Messege</button>
                      </form>
                    </div>

                    {/* Social Media Widget */}

                    {/* Tagcloud Widget */}

                    {/* Banner Widget */}
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
              }
            }
          }
        }
        Main_Image {
          data {
            attributes {
              url
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
