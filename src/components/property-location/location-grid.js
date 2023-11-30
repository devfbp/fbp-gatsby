import React, { Component } from 'react';
import { imgUrl2 } from '../../utils';

function PropertyLocation(props) {
	let PublicUrl = process.env.GATSBY_STRAPI_SITE_URL
	const getLocations = props?.locationresults

	return <div className="ltn__gallery-area">
		<div className="container">
			{/* (ltn__gallery-info-hide) Class for 'ltn__gallery-item-info' not showing */}
			<div className="ltn__gallery-active row ltn__gallery-info-hide---" style={{position: "relative",height: "772.376px"}}>
				<>
				<div className="ltn__gallery-sizer col-1" />
				{getLocations && getLocations.map((location) => ( //{imgUrl(blog.Image)}
					<div className="ltn__gallery-item col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
								<a href={"/property-location/"+location?.attributes?.Slug}>
									<img src={PublicUrl + imgUrl2(location?.attributes?.Image)} style={{height: '250px',width: '100%'}} alt="Image" />
									<span className="ltn__gallery-action-icon">
										<i className="fas fa-search" />
									</span>
								</a>
							</div>
							<div className="ltn__gallery-item-info">
								<h4 className="go-top"><a href="/portfolio-details">{location?.attributes?.Name}</a></h4>
								<p>{location?.attributes?.Description}</p>
							</div>
						</div>
					</div>
				))}
				</>
			</div>
			<div className="btn-wrapper text-center">
				<a href="#" className="btn btn-transparent btn-effect-3 btn-border">LOAD MORE +</a>
			</div>
		</div>
	</div>
}

export default PropertyLocation