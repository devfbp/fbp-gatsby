import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductSliderV3 extends Component {

    render() {

        let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'

    return <div className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70" data-bs-bg={PublicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Area Properties</h6>
			          <h1 className="section-title">Properties By Location</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <a href="/product-details"><img src={PublicUrl+"assets/img/product-3/1.jpg"} alt="#" /></a>
			            <div className="search-by-place-badge">
			              <ul>
			                <li>2 Properties</li>
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><a href="/contact">San Francisco</a></h6>
			            <h4><a href="/product-details">Mission District Area</a></h4>
			            <div className="search-by-place-btn">
			              <a href="/product-details">View Property <i className="flaticon-right-arrow" /></a>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <a href="/product-details"><img src={PublicUrl+"assets/img/product-3/2.jpg"} alt="#" /></a>
			            <div className="search-by-place-badge">
			              <ul>
			                <li>5 Properties</li>
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><a href="/contact">New York</a></h6>
			            <h4><a href="/product-details">Pacific Heights Area</a></h4>
			            <div className="search-by-place-btn">
			              <a href="/product-details">View Property <i className="flaticon-right-arrow" /></a>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <a href="/product-details"><img src={PublicUrl+"assets/img/product-3/3.jpg"} alt="#" /></a>
			            <div className="search-by-place-badge">
			              <ul>
			                <li>9 Properties</li>
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><a href="/contact">Sedona, Arizona</a></h6>
			            <h4><a href="/product-details">Noe Valley Zones</a></h4>
			            <div className="search-by-place-btn">
			              <a href="/product-details">View Property <i className="flaticon-right-arrow" /></a>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <a href="/product-details"><img src={PublicUrl+"assets/img/product-3/2.jpg"} alt="#" /></a>
			            <div className="search-by-place-badge">
			              <ul>
			                <li>5 Properties</li>
			              </ul>
			            </div>
			          </div>
			          <div className="search-by-place-info">
			            <h6><a href="/contact">New York</a></h6>
			            <h4><a href="/product-details">Pacific Heights Area</a></h4>
			            <div className="search-by-place-btn">
			              <a href="/product-details">View Property <i className="flaticon-right-arrow" /></a>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>
        }
}

export default ProductSliderV3