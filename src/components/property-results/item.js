import * as React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import { smallImg, rupeeFormatStr } from '../../utils';
import { useState, useEffect } from "react";
import Pagination from "../../templates/pagination";

const Item = (props) => {
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(6);
  var totalRecords = 0;

  var pageFirstResult = (Number(page) - 1) * resultsPerPage;
  const location = "Chennai";
  const area = "";
  const ptype = "Appartments";

  const queryParams = {
    Name: { eq: "Egattur" }
  };
  const { loading: count_loading, error: count_error, data: count_data } = useQuery(PROPERTY_RESULTS_COUNT, {
    variables: queryParams,
    fetchPolicy: "no-cache"
  });
  useEffect(() => {
    if (count_data) {
      setNumberOfPage(Math.ceil(parseInt(count_data?.properties?.data.length) / parseInt(resultsPerPage)));
      //console.log(numberOfPage)
      //totalRecords = count_data;
      props.setResults(parseInt(count_data?.properties?.data.length));
      

    }
  }, [count_data]);

  const { loading, error, data } = useQuery(PROPERTY_RESULTS, {
    variables: { LIMIT: resultsPerPage, PAGE: page },
    fetchPolicy: "no-cache"
  });
  if (loading || count_loading) {
    return <div className="custom-loader"></div>
  }
  if (error || count_error) {
    return <>error</>
  }
  props.setShowing((page) * resultsPerPage);
  
  let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
  return (
    <>
      <div className="tab-content ">
        <div className="tab-pane fade active show" id="liton_product_grid">
          <div className="ltn__product-tab-content-inner ltn__product-grid-view">
            <div className="row">
              <div className="col-lg-12">
                {/* Search Widget */}
                {/* <div className="ltn__search-widget mb-30">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search your keyword..." />
                                        <button type="submit"><i className="fas fa-search" /></button>
                                    </form>
                                </div> */}
              </div>
              {/* ltn__product-item */}
              {data &&
                data?.properties?.data?.map((property, index) => (
                  <>
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                        <div className="product-img">
                          <a href={"/property-details/" + property?.attributes?.Property_Id}><img src={process.env.GATSBY_STRAPI_IMAGE_URL + smallImg(property?.attributes.Main_Image)} alt="#" width={400} height={280} /></a>

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
      <Pagination numberOfPage={numberOfPage} currentpage={page} setPage={setPage} />

    </>
  )
}
var filters = '{}';
var wqry = [];
if (typeof window !== 'undefined') {
  if (sessionStorage.getItem("search_area") != "") {
    wqry.push('{Area:{Name:{eq:"' + sessionStorage.getItem("search_area") + '"}}}');
  }
  if (sessionStorage.getItem("search_location") != "" && sessionStorage.getItem("search_area") == "") {
    wqry.push('{Area:{Location:{Name:{eq:"' + sessionStorage.getItem("search_location") + '"}}}}');
  }

  if (sessionStorage.getItem("search_properytype") != "") {
    wqry.push('{Type:{Name:{eq:"' + sessionStorage.getItem("search_properytype") + '"}}}');
  }
  if (wqry != "") {
    filters = wqry.join(",");
  }
  console.log("filters", filters)
}
const PROPERTY_RESULTS_COUNT = gql`
query PropertyResults {
  properties (sort:"Property_Id",pagination:{limit:1000}, filters: ${filters}) {
    data {
      id 
    }
  }
}
`
const PROPERTY_RESULTS = gql`
query PropertyResults ($LIMIT: Int!, $PAGE: Int!){
  properties (pagination:{page:$PAGE,pageSize:$LIMIT},filters: ${filters}) {
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
export default Item
