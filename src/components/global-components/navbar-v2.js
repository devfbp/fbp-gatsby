import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class NavbarV2 extends Component {

    render() {
        let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'
		let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''
        return (
			<div>
				<header className={"ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent--- gradient-color-4--- "+ CustomClass}>
				{/* ltn__header-top-area start */}
				<div className="ltn__header-top-area d-none">
					<div className="container">
					<div className="row">
						<div className="col-md-7">
						<div className="ltn__top-bar-menu">
							<ul>
							<li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail" /> info@webmail.com</a></li>
							<li><a href="locations.html"><i className="icon-placeholder" /> 15/A, Nest Tower, NYC</a></li>
							</ul>
						</div>
						</div>
						<div className="col-md-5">
						<div className="top-bar-right text-end">
							<div className="ltn__top-bar-menu">
							<ul>
								<li>
								{/* ltn__language-menu */}
								<div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
									<ul>
									<li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
										<ul>
											<li><a href="#">Arabic</a></li>
											<li><a href="#">Bengali</a></li>
											<li><a href="#">Chinese</a></li>
											<li><a href="#">English</a></li>
											<li><a href="#">French</a></li>
											<li><a href="#">Hindi</a></li>
										</ul>
									</li>
									</ul>
								</div>
								</li>
								<li>
								<Social />
								</li>
							</ul>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				{/* ltn__header-top-area end */}
				{/* ltn__header-middle-area start */}
				<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
					<div className="container">
					<div className="row">
						<div className="col">
						<div className="site-logo-wrap">
							<div className="site-logo go-top">
							<a href="/"><img src={PublicUrl+"assets/img/logo.png"} alt="Logo" /></a>
							</div>
							<div className="get-support clearfix d-none">
							<div className="get-support-icon">
								<i className="icon-call" />
							</div>
							<div className="get-support-info">
								<h6>Get Support</h6>
								<h4><a href="tel:+123456789">123-456-789-10</a></h4>
							</div>
							</div>
						</div>
						</div>
						<div className="col header-menu-column">
						<div className="header-menu d-none d-xl-block go-top">
							<nav>
							<div className="ltn__main-menu">
								<ul>
								<li className="menu-icon"><a href="/">Home</a>
									<ul className="sub-menu menu-pages-img-show">

									<li>
										<a href="/">Home Style 01</a>
										<img src={PublicUrl+"assets/img/home-demos/home-1.jpg"} alt="#" />
									</li>
									<li>
										<a href="/home-v2">Home Style 02</a>
										<img src={PublicUrl+"assets/img/home-demos/home-2.jpg"} alt="#" />
									</li>
									<li>
										<a href="/home-v3">Home Style 03</a>
										<img src={PublicUrl+"assets/img/home-demos/home-3.jpg"} alt="#" />
									</li>
									<li>
									<a href="/home-v4">Home Style 04</a>
									<img src={PublicUrl+"assets/img/home-demos/home-4.jpg" } alt="#" /> 
									</li>
									<li>
										<a href="/home-v5">Home Style 05 <span className="menu-item-badge">video</span></a>
										<img src={PublicUrl+"assets/img/home-demos/home-5.jpg" } alt="#" /> 
									</li>
									<li>
										<a href="/home-v6">Home Style 06</a>
										<img src={PublicUrl+"assets/img/home-demos/home-6.jpg" } alt="#" /> 
									</li>
									<li>
										<a href="/home-v7">Home Style 07</a>
										<img src={PublicUrl+"assets/img/home-demos/home-7.jpg" } alt="#" /> 
									</li>
									<li>
										<a href="/home-v8">Home Style 08</a>
										<img src={PublicUrl+"assets/img/home-demos/home-8.jpg" } alt="#" /> 
									</li>
									<li>
										<a href="/home-v9">Home Style 09</a>
										<img src={PublicUrl+"assets/img/home-demos/home-9.jpg" } alt="#" /> 
									</li>
									<li>
										<a href="/home-v10">Home Style 10</a>
										<img src={PublicUrl+"assets/img/home-demos/home-11.jpg"}  alt="#" />
									</li>
									
									</ul>
								</li>
								<li className="menu-icon"><a href="/about">About</a>
									<ul>
										<li><a href="/about">About</a></li>
										<li><a href="/service">Services</a></li>
										<li><a href="/service-details">Service Details</a></li>
										<li><a href="/portfolio">Portfolio</a></li>
										<li><a href="/portfolio-v2">Portfolio - 02</a></li>
										<li><a href="/portfolio-details">Portfolio Details</a></li>
										<li><a href="/team">Team</a></li>
										<li><a href="/team-details">Team Details</a></li>
										<li><a href="/faq">FAQ</a></li>
										<li><a href="/location">Google Map Locations</a></li>
									</ul>
								</li>
								<li className="menu-icon"><a href="/shop">Shop</a>
									<ul>
										<li><a href="/shop">Shop</a></li>
										<li><a href="/shop-grid">Shop Grid</a></li>
										<li><a href="/shop-left-sidebar">Shop Left sidebar</a></li>
										<li><a href="/shop-right-sidebar">Shop Right sidebar</a></li>
										<li><a href="/product-details">Shop Details</a></li>
										<li><a href="/cart">Cart</a></li>
										<li><a href="/checkout">Checkout</a></li>
										<li><a href="/my-account">My Account</a></li>
										<li><a href="/login">Sign in</a></li>
										<li><a href="/register">Register</a></li>
									</ul>
								</li>
								<li className="menu-icon"><a href="/blog-grid">News</a>
									<ul>
										<li><a href="/blog">News</a></li>
										<li><a href="/blog-grid">News Grid</a></li>
										<li><a href="/blog-left-sidebar">News Left sidebar</a></li>
										<li><a href="/blog-right-sidebar">News Right sidebar</a></li>
										<li><a href="/blog-details">News details</a></li>
									</ul>
								</li>
								<li className="menu-icon"><a href="#">Pages</a>
								<ul className="mega-menu">
									<li><a href="#">Inner Pages</a>
										<ul>
											<li><a href="/portfolio">Portfolio</a></li>
											<li><a href="/portfolio-v2">Portfolio - 02</a></li>
											<li><a href="/portfolio-details">Portfolio Details</a></li>
											<li><a href="/team">Team</a></li>
											<li><a href="/team-details">Team Details</a></li>
											<li><a href="/faq">FAQ</a></li>
										</ul>
									</li>
									<li><a href="#">Inner Pages</a>
										<ul>
											<li><a href="/history">History</a></li>
											<li><a href="/add-listing">Add Listing</a></li>
											<li><a href="/location">Google Map Locations</a></li>
											<li><a href="/404">404</a></li>
											<li><a href="/contact">Contact</a></li>
											<li><a href="/coming-soon">Coming Soon</a></li>
										</ul>
									</li>
									<li><a href="#">Shop Pages</a>
										<ul>
											<li><a href="/shop">Shop</a></li>
											<li><a href="/shop-left-sidebar">Shop Left sidebar</a></li>
											<li><a href="/shop-right-sidebar">Shop right sidebar</a></li>
											<li><a href="/shop-grid">Shop Grid</a></li>
											<li><a href="/product-details">Shop details </a></li>
											<li><a href="/cart">Cart</a></li>
										</ul>
									</li>
									<li><a href="/shop"><img src={PublicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></a>
									</li>
								</ul>
							</li>
								<li><a href="/contact">Contact</a></li>
								<li className="special-link">
									<a href="/add-listing">Add Listing</a>
								</li>
								</ul>
							</div>
							</nav>
						</div>
						</div>
						<div className="col--- ltn__header-options ltn__header-options-2 ">
						{/* Mobile Menu Button */}
						<div className="mobile-menu-toggle d-xl-none">
							<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
							<svg viewBox="0 0 800 600">
								<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
								<path d="M300,320 L540,320" id="middle" />
								<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
							</svg>
							</a>
						</div>
						</div>
					</div>
					</div>
				</div>
				{/* ltn__header-middle-area end */}
				</header>
				<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
						<a href="/"><img src={PublicUrl+"assets/img/logo.png"} alt="Logo" /></a>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>
					<div className="ltn__utilize-menu-search-form">
					<form action={"#"}>
						<input type="text" placeholder="Search..." />
						<button><i className="fas fa-search" /></button>
					</form>
					</div>
					<div className="ltn__utilize-menu">
					<ul>
						<li><a href="#">Home</a>
						<ul className="sub-menu">
						<li><a href="/">Home Style 01</a></li>
						<li><a href="/home-v2">Home Style 02</a></li>
						<li><a href="/home-v3">Home Style 03</a></li>
						<li><a href="/home-v4">Home Style 04</a></li>
						<li><a href="/home-v5">Home Style 05 <span className="menu-item-badge">video</span></a></li>
						<li><a href="/home-v6">Home Style 06</a></li>
						<li><a href="/home-v7">Home Style 07</a></li>
						<li><a href="/home-v8">Home Style 08</a></li>
						<li><a href="/home-v9">Home Style 09</a></li>
						<li><a href="/home-v10">Home Style 10</a></li>
						</ul>
						</li>
						<li><a href="/about">About</a>
						<ul className="sub-menu">
							<li><a href="/about">About</a></li>
							<li><a href="/service">Services</a></li>
							<li><a href="/service-details">Service Details</a></li>
							<li><a href="/portfolio">Portfolio</a></li>
							<li><a href="/portfolio-v2">Portfolio - 02</a></li>
							<li><a href="/portfolio-details">Portfolio Details</a></li>
							<li><a href="/team">Team</a></li>
							<li><a href="/team-details">Team Details</a></li>
							<li><a href="/faq">FAQ</a></li>
							<li><a href="/location">Google Map Locations</a></li>
						</ul>
						</li>
						<li><a href="/shop">Shop</a>
						<ul className="sub-menu">
							<li><a href="/shop">Shop</a></li>
							<li><a href="/shop-grid">Shop Grid</a></li>
							<li><a href="/shop-left-sidebar">Shop Left sidebar</a></li>
							<li><a href="/shop-right-sidebar">Shop Right sidebar</a></li>
							<li><a href="/product-details">Shop Details</a></li>
							<li><a href="/cart">Cart</a></li>
							<li><a href="/checkout">Checkout</a></li>
							<li><a href="/my-account">My Account</a></li>
							<li><a href="/login">Sign in</a></li>
							<li><a href="/register">Register</a></li>
						</ul>
						</li>
						<li><a href="/blog-grid">News</a>
						<ul className="sub-menu">
							<li><a href="/blog">News</a></li>
							<li><a href="/blog-grid">News Grid</a></li>
							<li><a href="/blog-left-sidebar">News Left sidebar</a></li>
							<li><a href="/blog-right-sidebar">News Right sidebar</a></li>
							<li><a href="/blog-details">News details</a></li>
						</ul>
						</li>
						<li><a href="#">Pages</a>
							<ul className="sub-menu">
								<li><a href="/about">About</a></li>
								<li><a href="/service">Services</a></li>
								<li><a href="/service-details">Service Details</a></li>
								<li><a href="/portfolio">Portfolio</a></li>
								<li><a href="/portfolio-2">Portfolio - 02</a></li>
								<li><a href="/portfolio-details">Portfolio Details</a></li>
								<li><a href="/team">Team</a></li>
								<li><a href="/team-details">Team Details</a></li>
								<li><a href="/faq">FAQ</a></li>
								<li><a href="/history">History</a></li>
								<li><a href="/add-listing">Add Listing</a></li>
								<li><a href="/locations">Google Map Locations</a></li>
								<li><a href="/404">404</a></li>
								<li><a href="/contact">Contact</a></li>
								<li><a href="/coming-soon">Coming Soon</a></li>
							</ul>
                    	</li>
						<li><a href="/contact">Contact</a></li>
					</ul>
					</div>
					<div className="ltn__utilize-buttons ltn__utilize-buttons-2">
					<ul>
						<li>
						<a href="/my-account" title="My Account">
							<span className="utilize-btn-icon">
							<i className="far fa-user" />
							</span>
							My Account
						</a>
						</li>
						<li>
						<a href="/wishlist" title="Wishlist">
							<span className="utilize-btn-icon">
							<i className="far fa-heart" />
							<sup>3</sup>
							</span>
							Wishlist
						</a>
						</li>
						<li>
						<a href="/cart" title="Shoping Cart">
							<span className="utilize-btn-icon">
							<i className="fas fa-shopping-cart" />
							<sup>5</sup>
							</span>
							Shoping Cart
						</a>
						</li>
					</ul>
					</div>
					<div className="ltn__social-media-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
					</div>
				</div>
				</div>
			</div>
		)
    }
}


export default NavbarV2