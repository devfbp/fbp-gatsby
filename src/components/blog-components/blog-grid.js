import React, { Component } from 'react';
import { imgUrl2 } from '../../utils';

function BlogGrid(props) {
	console.log("props=>",props?.newslists);
	const BlogData = props?.newslists
    let PublicUrl = process.env.GATSBY_STRAPI_SITE_URL
    let imagealt = 'image'
    return (
		<div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
			<div className="container">
			<div className="row">
				{/* Blog Item */}
				{BlogData &&
						BlogData?.map((blog) => (
							<>
							{console.log("BlogData=>",BlogData)}
							<div className="col-lg-4 col-sm-6 col-12">
								<div className="ltn__blog-item ltn__blog-item-3">
									<div className="ltn__blog-img">
									<a href={blog?.attributes?.Slug}><img src={PublicUrl+imgUrl2(blog?.attributes?.Image)} alt={'blog-'+ imagealt} /></a>
									</div>
									<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										<ul>
										<li className="ltn__blog-author go-top">
											<a href="/team-details"><i className="far fa-user" />by: Admin</a>
										</li>
										<li className="ltn__blog-tags go-top">
											<a href="/service"><i className="fas fa-tags" />Services</a>
										</li>
										</ul>
									</div>
									<h3 className="ltn__blog-title"><a href="/blog-details">{blog?.attributes?.Title}</a></h3>
									<div className="ltn__blog-meta-btn">
										<div className="ltn__blog-meta">
										<ul>
											<li className="ltn__blog-date"><i className="far fa-calendar-alt" />{blog?.attributes?.Posted_At}</li>
										</ul>
										</div>
										<div className="ltn__blog-btn">
										<a href={blog?.attributes?.slug}>Read more</a>
										</div>
									</div>
									</div>
								</div>
							</div>
							</>
				))}
				{/*  */}
			</div>
			<div className="row">
				<div className="col-lg-12">
				<div className="ltn__pagination-area text-center">
					<div className="ltn__pagination">
					<ul>
						<li><a href="#"><i className="fas fa-angle-double-left" /></a></li>
						<li><a href="#">1</a></li>
						<li className="active"><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">...</a></li>
						<li><a href="#">10</a></li>
						<li><a href="#"><i className="fas fa-angle-double-right" /></a></li>
					</ul>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
	  
    )
  }
export default BlogGrid;
