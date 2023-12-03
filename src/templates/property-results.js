import * as React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Seo from "../components/seo"
import Layout2 from '../components/layout2'
import { useState, useEffect } from "react";
import Item from "../components/property-results/item"


const PropertyResults = () => {
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

                  <Item />
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
