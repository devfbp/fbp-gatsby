import React, { Component } from 'react';

import Sidebar from './sidebar';
class BlogList extends Component {
  render() {
    let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'
    return (
		<div className="ltn__blog-area mb-120">
			<div className="container">
			<div className="row">
				<div className="col-lg-8 order-lg-2">
				<div className="ltn__blog-list-wrap">
					{/* Blog Item */}
					<div className="ltn__blog-item ltn__blog-item-5 go-top">
					<div className="ltn__blog-img">
						<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/31.jpg"} alt="Image" /></a>
					</div>
					<div className="ltn__blog-brief">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							<a href="/blog-grid">Business</a>
							</li>
						</ul>
						</div>
						<h3 className="ltn__blog-title"><a href="/blog-details">Lorem ipsum dolor sit amet, consecte
							cing elit, sed do eiusmod tempor.</a></h3>
						<div className="ltn__blog-meta">
						<ul>
							<li>
							<a href="/blog-details"><i className="far fa-eye" />232 Views</a>
							</li>
							<li>
							<a href="/blog-details"><i className="far fa-comments" />35 Comments</a>
							</li>
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />June 22, 2020
							</li>
						</ul>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
						<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-author">
								<a href="/blog-grid"><img src={PublicUrl+"assets/img/blog/author.jpg"} alt="#" />By: Ethan</a>
							</li>
							</ul>
						</div>
						<div className="ltn__blog-btn">
							<a href="/blog-details"><i className="fas fa-arrow-right" />Read more</a>
						</div>
						</div>
					</div>
					</div>
					{/* Blog Item (Video) */}
					<div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-video">
					<div className="ltn__video-img">
						<img src={PublicUrl+"assets/img/blog/32.jpg"} alt="video popup bg image" />
						<a className="ltn__video-icon-2 ltn__secondary-bg ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
						<i className="fa fa-play" />
						</a>
					</div>
					<div className="ltn__blog-brief go-top" >
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							<a href="/blog-grid">Business</a>
							</li>
						</ul>
						</div>
						<h3 className="ltn__blog-title"><a href="/blog-details">Adipisicing elit, sed do eiusmod tempor
							incididunt ut labore et dolore.</a></h3>
						<div className="ltn__blog-meta">
						<ul>
							<li>
							<a href="/blog-details"><i className="far fa-eye" />232 Views</a>
							</li>
							<li>
							<a href="/blog-details"><i className="far fa-comments" />35 Comments</a>
							</li>
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />June 22, 2020
							</li>
						</ul>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
						<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-author">
								<a href="/blog-grid"><img src={PublicUrl+"assets/img/blog/author.jpg"} alt="#" />By: Ethan</a>
							</li>
							</ul>
						</div>
						<div className="ltn__blog-btn">
							<a href="/blog-details"><i className="fas fa-arrow-right" />Read more</a>
						</div>
						</div>
					</div>
					</div>
					{/* Blog Item (Gallery) */}
					<div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-gallery">
					<div className="ltn__blog-gallery-active slick-arrow-1 slick-arrow-1-inner">
						<div className="ltn__blog-gallery-item">
						<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/33.jpg"} alt="Image" /></a>
						</div>
						<div className="ltn__blog-gallery-item">
						<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/34.jpg"} alt="Image" /></a>
						</div>
						<div className="ltn__blog-gallery-item">
						<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/31.jpg"} alt="Image" /></a>
						</div>
					</div>
					<div className="ltn__blog-brief">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							<a href="/blog-grid">Business</a>
							</li>
						</ul>
						</div>
						<h3 className="ltn__blog-title"><a href="/blog-details">Magna aliqua. Ut enim ad minim venia
							m, quis nostrud exercitation ullamco</a></h3>
						<div className="ltn__blog-meta">
						<ul>
							<li>
							<a href="/blog-details"><i className="far fa-eye" />232 Views</a>
							</li>
							<li>
							<a href="/blog-details"><i className="far fa-comments" />35 Comments</a>
							</li>
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />June 22, 2020
							</li>
						</ul>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
						<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-author">
								<a href="/blog-grid"><img src={PublicUrl+"assets/img/blog/author.jpg"} alt="#" />By: Ethan</a>
							</li>
							</ul>
						</div>
						<div className="ltn__blog-btn">
							<a href="/blog-details"><i className="fas fa-arrow-right" />Read more</a>
						</div>
						</div>
					</div>
					</div>
					{/* Blog Item (Audio) */}
					<div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-audio go-top">
					<div className="post-audio embed-responsive embed-responsive-16by9">
						<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/837045328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
					</div>
					<div className="ltn__blog-brief">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							<a href="/blog-grid">Business</a>
							</li>
						</ul>
						</div>
						<h3 className="ltn__blog-title"><a href="/blog-details">Laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor.</a></h3>
						<div className="ltn__blog-meta">
						<ul>
							<li>
							<a href="/blog-details"><i className="far fa-eye" />232 Views</a>
							</li>
							<li>
							<a href="/blog-details"><i className="far fa-comments" />35 Comments</a>
							</li>
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />June 22, 2020
							</li>
						</ul>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
						<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-author">
								<a href="/blog-grid"><img src={PublicUrl+"assets/img/blog/author.jpg"} alt="#" />By: Ethan</a>
							</li>
							</ul>
						</div>
						<div className="ltn__blog-btn">
							<a href="/blog-details"><i className="fas fa-arrow-right" />Read more</a>
						</div>
						</div>
					</div>
					</div>
					{/* Blog Item (No Image) */}
					<div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-no-image go-top">
					<div className="ltn__blog-brief">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							<a href="/blog-grid">Business</a>
							</li>
						</ul>
						</div>
						<h3 className="ltn__blog-title"><a href="/blog-details">In reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.</a></h3>
						<div className="ltn__blog-meta">
						<ul>
							<li>
							<a href="/blog-details"><i className="far fa-eye" />232 Views</a>
							</li>
							<li>
							<a href="/blog-details"><i className="far fa-comments" />35 Comments</a>
							</li>
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />June 22, 2020
							</li>
						</ul>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
						<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-author">
								<a href="/blog-grid"><img src={PublicUrl+"assets/img/blog/author.jpg"} alt="#" />By: Ethan</a>
							</li>
							</ul>
						</div>
						<div className="ltn__blog-btn">
							<a href="/blog-details"><i className="fas fa-arrow-right" />Read more</a>
						</div>
						</div>
					</div>
					</div>
					{/* Blog Item (Quote) */}
					<div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-quote bg-image bg-overlay-theme-90 go-top" data-bs-bg="img/blog/3.jpg">
					<div className="ltn__blog-brief go-top">
						<blockquote>
						<a href="/blog-details">Excepteur sint occaecat cupida
							tat non proident, sunt in.</a>
						</blockquote>
						<div className="ltn__blog-meta mb-0">
						<ul>
							<li>
							<a href="/blog-details"><i className="far fa-eye" />232 Views</a>
							</li>
							<li>
							<a href="/blog-details"><i className="far fa-comments" />35 Comments</a>
							</li>
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />June 22, 2020
							</li>
						</ul>
						</div>
					</div>
					</div>
					{/* Blog Item (Background Image) */}
					<div className="ltn__blog-item ltn__blog-item-5 ltn__blog-item-bg-image bg-image bg-overlay-white-90" data-bs-bg="img/blog/2.jpg">
					<div className="ltn__blog-brief go-top">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-category">
							<a href="/blog-grid">Business</a>
							</li>
						</ul>
						</div>
						<h3 className="ltn__blog-title"><a href="/blog-details">Culpa qui officia deserunt mollit anim
							id est laborum. Sed ut perspiciatis</a></h3>
						<div className="ltn__blog-meta mb-0">
						<ul>
							<li>
							<a href="/blog-details"><i className="far fa-eye" />232 Views</a>
							</li>
							<li>
							<a href="/blog-details"><i className="far fa-comments" />35 Comments</a>
							</li>
							<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />June 22, 2020
							</li>
						</ul>
						</div>
					</div>
					</div>
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
				<Sidebar/>
			</div>
			</div>
		</div>
    )
  }
}

export default BlogList;
