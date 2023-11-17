import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { imgUrl, priceString, subStr } from "../../utils";
function FeaturedItemV1(props) {
	const qryData = useStaticQuery(graphql`
      query LatestProperty {
        allStrapiProperty(sort: {Posted_At: DESC}, limit: 4) {
			nodes {
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
			  Price
			  Name
			  Description
			  Square_Ft
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
		<div>
			<div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Properties</h6>
								<h1 className="section-title">{props.title}</h1>
							</div>
						</div>
					</div>
					<div className="row ltn__product-slider-item-three-active slick-arrow-1">
						{/* ltn__product-item */}
						{LatestProperty &&
							LatestProperty.map((property) => (
								<div className="col-lg-12">
									<div className="ltn__product-item ltn__product-item-4 text-center---">
										<div className="product-img go-top">
											<a href="/product-details"><img src={imgUrl(property?.Main_Image)} alt="#" /></a>
											<div className="product-badge">
												<ul>
													<li className="sale-badge bg-green">{""}</li>
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
											<h2 className="product-title go-top"><a href="/product-details">{property?.Name}</a></h2>
											<div className="product-description">
												<p>{subStr(property?.Description)}</p>
											</div>
											<ul className="ltn__list-item-2 ltn__list-item-2-before">
												<li><span>{property?.Bedrooms} <i className="flaticon-bed" /></span>
													Bedrooms
												</li>
												<li><span>{property?.Bathrooms} <i className="flaticon-clean" /></span>
													Bathrooms
												</li>
												<li><span>{property?.Square_Ft} <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
													square Ft
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
							))
						}

						{/* ltn__product-item */}
					</div>
				</div>
			</div>
			{LatestProperty &&
				LatestProperty.map((property) => (
					<div className="ltn__modal-area ltn__add-to-cart-modal-area">
						<div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
							<div className="modal-dialog modal-md" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">×</span>
										</button>
									</div>
									<div className="modal-body">
										<div className="ltn__quick-view-modal-inner">
											<div className="modal-product-item">
												<div className="row">
													<div className="col-12">
														<div className="modal-product-img">
															<img src={PublicUrl + "assets/img/product/7.png"} alt="#" />
														</div>
														<div className="modal-product-info go-top">
															<h5><a href="/product-details">Brake Conversion Kit</a></h5>
															<p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Wishlist</p>
															<div className="btn-wrapper">
																<a href="/wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</a>
															</div>
														</div>
														{/* additional-info */}
														<div className="additional-info d-none">
															<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
															<div className="payment-method">
																<img src={PublicUrl + "assets/img/icons/payment.png"} alt="#" />
															</div>
														</div>
													</div>
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
	)
}

export default FeaturedItemV1