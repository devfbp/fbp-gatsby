import React, { Component } from 'react';
import { imgUrl2 } from '../../utils';

function Banner(props) {
    
    let PublicUrl = process.env.GATSBY_STRAPI_IMAGE_URL
    const Name = props.LocationDetail[0]?.attributes?.Name;
    const Image = props.LocationDetail[0]?.attributes?.Image;
    const Description = props.LocationDetail[0]?.attributes?.Description;

    return <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
        <div className="ltn__slider-11-inner">
            <div className="ltn__slider-11-active">
                <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                    <div className="ltn__slide-item-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 align-self-center">
                                    <div className="slide-item-info">
                                        <div className="slide-item-info-inner ltn__slide-animation">
                                            <div className="slide-video mb-50 d-none">
                                                <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                    <i className="fa fa-play" />
                                                </a>
                                            </div>
                                            <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
                                            <h1 className="slide-title animated">Search Your<br />Luxury House in <span>{Name}</span></h1>
                                            <div className="slide-brief animated">
                                                <p>{Description}</p>
                                            </div>
                                            <div className="btn-wrapper animated">
                                                <a href="/about" className="theme-btn-1 btn btn-effect-1">Make An Enquiry</a>
                                                <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/6_MvFq8QMJg?si=IGxzmReBB03rexZO" data-rel="lightcase">
                                                    <i className="icon-play  ltn__secondary-color" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item-img">
                                        <img src={PublicUrl+imgUrl2(Image)} alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Banner;