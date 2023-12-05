import * as React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import { smallImg, rupeeFormatStr } from '../../utils';
const RelatedProperty = (props) => {
  console.log(props)
  let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/';
  const { loading, error, data } = useQuery(RELATED_PROPERTIES, {
    variables: { Location: props.location, Property_id: props.property_id },
  });
  if (loading) {
    return <div className="custom-loader"></div>
  }
  if (error) {
    return <>error</>
  }
  return (
    <>
      <div className="box-shadow-1">
        <h4 class="title-2">Related Properties</h4>
        <div className="row">
          {data &&
            data?.properties?.data?.map((property, index) => (
              <div className="col-xl-6 col-sm-6 col-12 go-top related-property-details">
                <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                  <div className="product-img">
                    <a href={"/property-details/" + property?.attributes?.Property_Id}>
                      <img src={process.env.GATSBY_STRAPI_IMAGE_URL + smallImg(property?.attributes.Main_Image)} alt="#" width={500} height={230} />
                    </a>
                    <div className="real-estate-agent">
                      <div className="badge-custom">
                        {property?.attributes?.Status?.data?.attributes?.Name}
                      </div>
                    </div>
                    <div className="product-img-location-gallery">
                      <div className="product-img-location go-top">
                        <ul>
                          <li>
                            <div class="product-price">
                              <span>
                                {rupeeFormatStr(property?.attributes?.Price)}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-badge">
                      <ul>
                        <li className="sale-badge">{property?.attributes?.Type?.data?.attributes?.Name}</li>
                      </ul>
                    </div>
                    <h2 className="product-title"><a href="/shop">New Apartment Nice View</a></h2>
                    <div className="product-img-location">
                      <ul>
                        <li>
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
            ))
          }
        </div>
      </div>
    </>
  )
}

export default RelatedProperty
const RELATED_PROPERTIES = gql`
query PropertyDetails ($Location: String!, $Property_id: String!){
  properties (filters:{Area:{Location:{Name:{eq:$Location}}},Property_Id:{ne:$Property_id}},pagination:{limit:2}) {
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