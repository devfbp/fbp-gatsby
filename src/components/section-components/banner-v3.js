import * as React from "react"
import { useState, useEffect } from "react";
import ReactHtmlParser from 'react-html-parser';
import { imgUrl } from "../../utils";

function BannerV3(props) {
	const Banners = props.Banners;
	console.log(props)
	return (
		<>
			<div className="ltn__slider-area ltn__slider-3  section-bg-2">
				<div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
					{/* ltn__slide-item */}
					{Banners &&
						Banners.map((banner) => (
							<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={imgUrl(banner?.Image)}>
								<div className="ltn__slide-item-inner text-center">
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
														<h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> {ReactHtmlParser(banner?.Line_1)}</h6>
														<h1 className="slide-title animated ">{ReactHtmlParser(banner?.Line_2)}</h1>
														<div className="slide-brief animated">
															<p>{ReactHtmlParser(banner?.Line_3)}</p>
														</div>
														<div className="btn-wrapper animated go-top">
															{ReactHtmlParser(banner?.Line_4)}
														</div>
													</div>
												</div>
											</div>
										</div>
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
export default BannerV3