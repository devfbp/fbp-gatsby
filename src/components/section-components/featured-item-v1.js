import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { imgUrl, priceString, subStr } from "../../utils";
function FeaturedItemV1(props) {
	let publicUrl = process.env.PUBLIC_URL + '/'
	const qryData = useStaticQuery(graphql`
      query LatestProperty {
        allStrapiProperty(sort: {Posted_At: DESC}, limit: 4) {
			nodes {
			  Property_Id
			  Bathrooms
			  Bedrooms
			  Builder {
				Image {
				  file {
					childImageSharp {
					  gatsbyImageData(height: 40, width: 40, formats: WEBP)
					}
				  }
				}
				Name
			  }
			  Main_Image {
				file {
				  childImageSharp {
					gatsbyImageData(height: 650, width: 850)
				  }
				}
			  }
			  Status{
				Name
			  }
			  Price
			  Name
			  Description
			  Unit_Size
			  Area {
				Name
				Location {
				  Name
				}
			  }
			}
		}
      }
    `);
	let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/';
	const LatestProperty = qryData?.allStrapiProperty?.nodes;
	return (
		<>
			<div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Properties</h6>
								<h1 className="section-title">{props.title}</h1>
							</div>
						</div>
					</div>
					<div className="row ltn__product-slider-item-four-active-full-width slick-arrow-1">
						{LatestProperty &&
							LatestProperty.map((property) => (
								<>
									<div className="col-lg-12">
										<div className="ltn__product-item ltn__product-item-4 text-center---">
											<div className="product-img go-top">
												<a href={"/property-details/" + property?.Property_Id}><img src={imgUrl(property?.Main_Image)} alt="#" /></a>
												<div className="product-badge">
													<ul>
														<li className="sale-badge bg-green---">{property?.Status?.Name}</li>
													</ul>
												</div>
												<div className="product-img-location-gallery">
													<div className="product-img-location go-top">
														<ul>
															<li>
																<a href="/contact"><i className="flaticon-pin" /> {property?.Area?.Name}, {property?.Area?.Location?.Name}</a>
															</li>
														</ul>
													</div>

												</div>
											</div>
											<div className="product-info">
												<div className="product-price">
													<span>{priceString(property?.Price)}</span>
												</div>
												<h2 className="product-title go-top"><a href="/property-details">{property?.Name}</a></h2>

												<ul className="ltn__list-item-2 ltn__list-item-2-before">
													<li><span>{property?.Bedrooms} <i className="flaticon-bed" /></span>
														Bedrooms
													</li>
													<li><span>{property?.Bathrooms} <i className="flaticon-clean" /></span>
														Bathrooms
													</li>
													<li><span>{property?.Unit_Size}<i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
														Sq.Ft
													</li>
												</ul>
											</div>
											<div className="product-info-bottom">
												<div className="real-estate-agent go-top">
													<div className="agent-img">
														<a href="/team-details"><img src={imgUrl(property?.Builder?.Image)} alt="#" /></a>
													</div>
													<div className="agent-brief">
														<h6><a href="/team-details">{property?.Builder?.Name}</a></h6>
														<small>Estate Agents</small>
													</div>
												</div>
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
															<a href="product-details.html" title="Product Details">
																<i className="flaticon-add" />
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</>
							))
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default FeaturedItemV1