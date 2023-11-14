import * as React from "react"
import { useState, useEffect } from "react";
import ReactHtmlParser from 'react-html-parser';
import { imgUrl } from "../../utils";

function BannerV3(props) {
	const image_desktop = imgUrl(props?.HomeArtl?.Banner_Image);
	const banner_text = props?.HomeArtl?.Banner_Text;

	return (
		<div className="ltn__slider-area ltn__slider-3  section-bg-2">
			<div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
				{/* ltn__slide-item */}
				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={image_desktop}>
					<div className="ltn__slide-item-inner text-center">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 align-self-center">
								{ReactHtmlParser(banner_text)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

}
export default BannerV3