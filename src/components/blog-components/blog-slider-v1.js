import React, { Component } from 'react';
import { imgUrl } from "../../utils";
import { useStaticQuery, graphql } from "gatsby";
function BlogSlider(props) {
	const qryData = useStaticQuery(graphql`
      query BlogData {
        allStrapiBlog(sort: {Posted_At: DESC}) {
			nodes {
			  Title
			  Description
			  Posted_At
			  Image {
				file {
				  childImageSharp {
					gatsbyImageData(height: 562, width: 800, formats: WEBP)
				  }
				}
			  }
			  Tags {
				Tag {
				  Name
				}
			  }
			}
		}
      }
    `);
	const BlogData = qryData?.allStrapiBlog?.nodes;
	let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
	let customClass = props.customClass ? props.customClass : ''
	let sectionClass = props.sectionClass ? props.sectionClass : ''
	return (
		<div className={"ltn__blog-area pt-115--- pb-70 go-top " + sectionClass}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className={"section-subtitle ltn__secondary-color " + customClass}>News &amp; Blogs</h6>
							<h1 className="section-title">{props.title}</h1>
						</div>
					</div>
				</div>
				<div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
					{/* Blog Item */}
					{BlogData &&
						BlogData.map((blog) => (
							<div className="col-lg-12">
								<div className="ltn__blog-item ltn__blog-item-3">
									<div className="ltn__blog-img">
										<a href="/blog-details"><img src={imgUrl(blog.Image)} alt="#" /></a>
									</div>
									<div className="ltn__blog-brief">
										<div className="ltn__blog-meta">
											<ul>
												{/* <li className="ltn__blog-author">
													<a href="/team-details"><i className="far fa-user" />by: Admin</a>
												</li> */}
												{blog.Tags &&
													<>
														<li className="ltn__blog-tags">
															{
																blog.Tags.map((tag) => (
																	<>
																		<a href="/blog-grid"><i className="fas fa-tags" />{tag?.Tag?.Name}</a>
																	</>
																))
															}
														</li>
													</>
												}

											</ul>
										</div>
										<h3 className="ltn__blog-title"><a href="/blog-details">{blog?.Title}</a></h3>
										<div className="ltn__blog-meta-btn">
											<div className="ltn__blog-meta">
												<ul>
													<li className="ltn__blog-date"><i className="far fa-calendar-alt" /></li>
												</ul>
											</div>
											<div className="ltn__blog-btn">
												<a href="/blog-details">Read more</a>
											</div>
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
export default BlogSlider;