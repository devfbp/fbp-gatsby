import React, { Component } from 'react';

class BlogGrid extends Component {
  render() {
    let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
		<div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
			<div className="container">
			<div className="row">
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/1.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">Common Engine Oil Problems and Solutions</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/2.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">How and when to replace brake rotors</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/3.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">Electric Car Maintenance, Servicing &amp; Repairs</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />August 22, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/4.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">How to Prepare for your First Track Day!</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/5.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">How to: Make Your Tires Last Longer</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/6.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">Common Engine Oil Problems and Solutions</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/7.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">How and when to replace brake rotors</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/8.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">Electric Car Maintenance, Servicing &amp; Repairs</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />August 22, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<a href="/blog-details"><img src={PublicUrl+"assets/img/blog/2.jpg"} alt="#" /></a>
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
					<h3 className="ltn__blog-title"><a href="/blog-details">How to: Make Your Tires Last Longer</a></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<a href="/blog-details">Read more</a>
						</div>
					</div>
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
		</div>
	  
    )
  }
}

export default BlogGrid;
