import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import gql from "graphql-tag"
import Seo from "../components/seo"
import Layout2 from '../components/layout2'
import { useState, useEffect } from "react";
import Item from "../components/property-results/item"
import "../components/property-results/item.scss"

const PropertyResults = () => {
  const [showing, setShowing] = useState(1);
  const [results, setResults] = useState(6);
  const [area, setArea] = useState();
  const [locationSr, setLocation] = useState();
  let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
  let imagealt = 'image'
  const qryData = useStaticQuery(graphql`
      query SearchFormQry {
        allStrapiPropertyLocation {
			nodes {
				Name
			}
		}
		allStrapiPropertyArea {
			nodes {
			  Name
			  Location {
				Name
			  }
			}
		  }
		allStrapiPropertyType {
			nodes {
				Name
			}
		}
      }
    `);
  const SelectLocation = qryData?.allStrapiPropertyLocation?.nodes;
  const SelectArea = qryData?.allStrapiPropertyArea?.nodes;
  useEffect(() => {
    sessionStorage.setItem("search_location", "");
    sessionStorage.setItem("search_area", "");
    sessionStorage.setItem("search_properytype", "");
    setArea(SelectArea)
  }, [SelectArea]);
  const SelectPropertyTYpe = qryData?.allStrapiPropertyType?.nodes;

  function onLocationChanges(e) {
    setArea([]);
    setLocation(e.target.value);
    sessionStorage.setItem("search_location", e.target.value);
    var filterArea = [];
    SelectArea.map((sarea) => {
      if (sarea?.Location?.Name == e.target.value) {
        filterArea.push(sarea);
      }
    })
    setArea(filterArea);
  }
  function onAreaChange(e) {
    sessionStorage.setItem("search_area", e.target.value);
  }

  function onPropertyTypeChange(e) {
    sessionStorage.setItem("search_properytype", e.target.value);
  }
  var title = "";
  var selected_area = "";
  var selected_location = "";
  var selected_propertytype = "";
  if (typeof window !== 'undefined') {
    title = sessionStorage.getItem("search_result_title");
    selected_area = sessionStorage.getItem("selected_area");
    selected_location = sessionStorage.getItem("selected_location");
    selected_propertytype = sessionStorage.getItem("selected_propertytype");
  }
  return (
    <>
      <Layout2>
        <div>
          <div className="ltn__product-area ltn__product-gutter mb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltn__shop-options">
                    <div class="row box-shadow-1 search-form-container">
                      <div class="col-lg-8">
                        <div class="row">
                          <div class="col-lg-3 col-6">
                            <div className="text-center">
                              <select className="nice-select location-options" onChange={onLocationChanges}>
                                <option value="all">Choose Location</option>
                                {SelectLocation &&
                                  SelectLocation.map((location, index) => (
                                    <option value={location?.Name} selected={selected_location==location?.Name ? "selected":""}>{location?.Name}</option>
                                  ))
                                }
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-3 col-6">
                            <select className="nice-select area-options" onChange={onAreaChange}>
                              <option>Choose Area</option>
                              {area &&
                                area.map((area, index) => (
                                  <option value={area?.Name} selected={selected_area==area?.Name ? "selected":""}>{area?.Name}</option>
                                ))
                              }
                            </select>
                          </div>
                          <div class="col-lg-3 col-6">
                            <div className="text-center">
                              <select className="nice-select" onChange={onPropertyTypeChange}>
                                <option>Property Type</option>
                                {SelectPropertyTYpe &&
                                  SelectPropertyTYpe.map((ptype, index) => (
                                    <option value={ptype?.Name} selected={selected_propertytype==ptype?.Name ? "selected":""}>{ptype?.Name}</option>
                                  ))
                                }
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-3 col-6">
                            <div className="text-center">
                              <select className="nice-select">
                                <option>Builder</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="row">
                          <div class="col-lg-5 col-6">
                            <div className="text-center">
                              <select className="nice-select">
                                <option>Min.NR</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-5 col-6">
                            <div className="text-center">
                              <select className="nice-select">
                                <option>Max.NR</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-lg-2 col-12">
                            <div className="showing-product-number">
                              <a href="/property-results" className="btn theme-btn-1 text-uppercase btn-search">Search</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 class="page-title">{title} ({results})</h3>
                  <Item setShowing={setShowing} setResults={setResults} />
                </div>
              </div>
            </div>
          </div>
        </div>        
      </Layout2>
    </>
  )
}
export const Head = () => <Seo title="Property Results" />

export default PropertyResults
