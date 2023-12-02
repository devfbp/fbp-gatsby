import * as React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Seo from "../components/seo"
import Layout2 from '../components/layout2'
import { smallImg, rupeeFormatStr } from '../utils';
import { useState, useEffect } from "react";
import Pagination from "./pagination"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PropertyResults = () => {
    const [numberOfPage, setNumberOfPage] = useState(1);
    const [page, setPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(3);
    
    var pageFirstResult = (Number(page) - 1) * resultsPerPage;
    const location = "Chennai";
    const area = "";
    const ptype = "Appartments";

    const { loading: count_loading, error: count_error, data: count_data } = useQuery(PROPERTY_RESULTS_COUNT, {
        variables: {},
        fetchPolicy: "no-cache"
    });
    useEffect(() => {
        if (count_data) {
            setNumberOfPage(Math.ceil(parseInt(count_data?.properties?.data.length) / parseInt(resultsPerPage)));
            //console.log(numberOfPage)
            
        }
    }, [count_data]);

    const { loading, error, data } = useQuery(PROPERTY_RESULTS, {
        variables: { LIMIT: resultsPerPage, PAGE: page },
        fetchPolicy: "no-cache"
    });
    if (loading || count_loading) {
        return <>loading...</>
    }
    if (error || count_error) {
        return <>error</>
    }

    let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
    return (
        <>
            <Layout2>
                <div>
                    <div className="ltn__product-area ltn__product-gutter mb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltn__shop-options">
                                        <ul>
                                            <li>
                                                <div className="ltn__grid-list-tab-menu ">
                                                    <div className="nav">
                                                        <a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></a>
                                                        <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="short-by text-center">
                                                    <select className="nice-select">
                                                        <option>Default sorting</option>
                                                        <option>Sort by popularity</option>
                                                        <option>Sort by new arrivals</option>
                                                        <option>Sort by price: low to high</option>
                                                        <option>Sort by price: high to low</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="showing-product-number text-right">
                                                    <span>Showing 9 of 20 results</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content ">
                                        <div className="tab-pane fade active show" id="liton_product_grid">
                                            <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        {/* Search Widget */}
                                                        <div className="ltn__search-widget mb-30">
                                                            <form action="#">
                                                                <input type="text" name="search" placeholder="Search your keyword..." />
                                                                <button type="submit"><i className="fas fa-search" /></button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    {/* ltn__product-item */}
                                                    {data &&
                                                        data?.properties?.data?.map((property, index) => (
                                                            <>
                                                                <div className="col-lg-4 col-sm-6 col-12">
                                                                    <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                                        <div className="product-img">
                                                                            <a href={"/product-details/" + property?.attributes?.Property_Id}><img src={process.env.GATSBY_STRAPI_IMAGE_URL + smallImg(property?.attributes.Main_Image)} alt="#" width={400} height={280} /></a>

                                                                        </div>
                                                                        <div className="product-info">
                                                                            <div class="product-price">
                                                                                <span>{rupeeFormatStr(property?.attributes?.Price)}
                                                                                </span>
                                                                            </div>
                                                                            <div className="product-badge">
                                                                                <ul>
                                                                                    <li className="sale-badg">{property?.attributes?.Status?.data?.attributes?.Name}</li>
                                                                                </ul>
                                                                            </div>

                                                                            <h2 className="product-title go-top"><a href="/product-details">{property?.attributes?.Name}</a></h2>
                                                                            <div className="product-img-location">
                                                                                <ul>
                                                                                    <li className="go-top">
                                                                                        <a href="/contact"><i className="flaticon-pin" /> {property?.attributes?.Area?.data?.attributes?.Name}, {property?.attributes?.Area?.data?.attributes?.Location?.data?.attributes?.Name}</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                                                <li><span>{property?.attributes?.Bedrooms} </span>
                                                                                    Bedrooms
                                                                                </li>
                                                                                <li><span>{property?.attributes?.Bathrooms} </span>
                                                                                    Bathrooms
                                                                                </li>
                                                                                <li><span>{property?.attributes?.Unit_Size} </span>
                                                                                    square Ft
                                                                                </li>
                                                                            </ul>


                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Pagination numberOfPage={numberOfPage} currentpage={page} setPage={setPage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout2>
        </>
    )
}
const PROPERTY_RESULTS_COUNT = gql`
query PropertyResults {
  properties (sort:"Property_Id",pagination:{limit:1000}) {
    data {
      id 
    }
  }
}
`
const PROPERTY_RESULTS = gql`
query PropertyResults ($LIMIT: Int!, $PAGE: Int!){
  properties (pagination:{page:$PAGE,pageSize:$LIMIT}) {
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
export const Head = () => <Seo title="Property Results" />

export default PropertyResults
