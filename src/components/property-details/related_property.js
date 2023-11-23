import * as React from "react"
import ReactHtmlParser from 'react-html-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RelatedProperty = (props) => {
    let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
    let floorplans = props?.floorplans;
    console.log(floorplans);
    return (
        <>
            <div className="box-shadow-1">
                <h4 className="title-2">{props?.title}</h4>
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
        </>
    )
}

export default RelatedProperty