import React, { Component } from 'react';
import { mediumImg, thumbnailImg } from '../../utils';
import ReactHtmlParser from 'react-html-parser';
import Comments from './comments';
import Sidebar from './sidebar';

function BlogDetails(props) {

	let PublicUrl = process.env.GATSBY_STRAPI_IMAGE_URL
	const Tags = props?.newsdetail?.Tags
	return (
		<div className="ltn__page-details-area ltn__blog-details-area mb-0">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="ltn__blog-details-wrap">
							<div className="ltn__page-details-inner ltn__blog-details-inner">

								<div className="ltn__blog-meta">
									<ul>
										<li className="ltn__blog-author go-top">
											<a href="/team-details"><img src={PublicUrl + mediumImg(props?.newsdetail?.Image)} alt="#" />By: Ethan</a>
										</li>
										<li className="ltn__blog-date">
											<i className="far fa-calendar-alt" />June 22, 2020
										</li>
										<li>
											<a href="#"><i className="far fa-comments" />35 Comments</a>
										</li>
									</ul>
								</div>
								<div className="ltn__blog-meta">
									<ul>
										{Tags && Tags.map((newsTag) => (
											<li className="ltn__blog-category">
												<a href=''>{newsTag?.Tag?.data?.attributes?.Name}</a>
											</li>
										))}
									</ul>
								</div>
								<p>{ReactHtmlParser(props?.newsdetail?.Description)}</p>
								<img style={{ width: '100%' }} src={PublicUrl + mediumImg(props?.newsdetail?.Image)} alt="Image" />
								<blockquote>
									<h6 className="ltn__secondary-color mt-0">BY HETMAYAR</h6>
									Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.
								</blockquote>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur expedita velit laboriosam est sint laborum eos assumenda, quam voluptatem adipisci, reprehenderit ut nobis blanditiis perspiciatis!</p>
								<div className="row">
									<div className="col-lg-6">
										<img src={PublicUrl + mediumImg(props?.newsdetail?.Image)} alt="Image" />
										<label>Image Caption Here</label>
									</div>
									<div className="col-lg-6">
										<img src={PublicUrl + mediumImg(props?.newsdetail?.Image)} alt="Image" />
									</div>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, amet, fuga omnis eligendi sed cupiditate molestias enim autem animi est tempore ipsa corporis. Recusandae, quia.</p>
							</div>
							<hr />
							{/* blog-tags-social-media */}
							<div className="ltn__blog-tags-social-media mt-50 row">
								<div className="ltn__tagcloud-widget col-lg-8 go-top">
									<h4>Tags</h4>
									<ul>
										{Tags && Tags.map((newsTag) => (
											<li>
												<a href="#">{newsTag?.Tag?.data?.attributes?.Name}</a>
											</li>
										))}
									</ul>
								</div>
								<div className="ltn__social-media text-right text-end col-lg-4">
									<h4>Social Share</h4>
									<ul>
										<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
										<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
										<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
										<li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
									</ul>
								</div>
							</div>
							{/* <Comments /> */}
						</div>
					</div>
					<Sidebar />
				</div>
			</div>
		</div>
	)
}

export default BlogDetails;
