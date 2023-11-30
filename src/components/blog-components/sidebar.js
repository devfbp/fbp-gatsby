import React, { Component } from 'react';
import { useStaticQuery, graphql } from "gatsby";

function Sidebar() {
	const qryData = useStaticQuery(graphql`
      query BlogTagData {
        allStrapiBlogTag {
			nodes {
			  Name
			}
		  }
      }
    `);
	const Tags = qryData?.allStrapiBlogTag?.nodes;
	console.log("Tags=>",Tags);
	let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
	return (
		<div className="col-lg-4 go-top">
			<aside className="sidebar-area blog-sidebar ltn__right-sidebar">
				{/* Social Media Widget */}
				<div className="widget ltn__social-media-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
					<div className="ltn__social-media-2">
						<ul>
							<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
							<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
							<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
						</ul>
					</div>
				</div>
				{/* Form Widget */}
				<div className="widget ltn__form-widget">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">Subscribe Our Newsletter</h4>
					<form action="#">
						<input type="text" name="yourname" placeholder="Your Name*" />
						<input type="text" name="youremail" placeholder="Your e-Mail*" />
						<button type="submit" className="btn theme-btn-1">Send Messege</button>
					</form>
				</div>
				{/* Tagcloud Widget */}
				<div className="widget ltn__tagcloud-widget go-top">
					<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Tags</h4>
					<ul>
						{Tags && Tags.map((tag)=>(
							<li><a href="#">{tag.Name}</a></li>
						))}
					</ul>
				</div>
				{/* Banner Widget */}
				<div className="widget ltn__banner-widget d-none go-top">
					<a href="/shop"><img src={PublicUrl + "assets/img/banner/2.jpg"} alt="#" /></a>
				</div>
			</aside>
		</div>
	)
}

export default Sidebar;
