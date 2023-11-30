import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { imgUrl } from "../../utils";
function PropertyLocation(props) {
	const qryData = useStaticQuery(graphql`
      query PropertyLocation {
		allStrapiPropertyLocation(sort: {Sort: ASC}) {
			nodes {
			  Description
			  Image {
				file {
				  childImageSharp {
					gatsbyImageData(height: 650, width: 850, formats: WEBP)
				  }
				}
			  }
			  Name
			  State
			  Slug
			}
		  }
      	}
    `);
	const LocationDatas = qryData?.allStrapiPropertyLocation?.nodes;
	let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'
	return (
		<div className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70" data-bs-bg={PublicUrl + "assets/img/bg/20.jpg"}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Area Properties</h6>
							<h1 className="section-title">{props.title}</h1>
						</div>
					</div>
				</div>
				<div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
					{LocationDatas &&
						LocationDatas.map((location) => (
							<div className="col-lg-4">
								<div className="ltn__search-by-place-item">
									<div className="search-by-place-img">
										<a href={"/property-location/"+location.Slug}><img src={imgUrl(location.Image)} alt="#" /></a>
										<div className="search-by-place-badge">
											<ul>
												<li>2 Properties</li>
											</ul>
										</div>
									</div>
									<div className="search-by-place-info">
										<h6><a>{location.State}</a></h6>
										<h4><a>{location.Name}</a></h4>
										<div className="search-by-place-btn">
											<a href={"/property-location/"+location.Slug}>View Property <i className="flaticon-right-arrow" /></a>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default PropertyLocation