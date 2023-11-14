import * as React from "react";
import Social from '../section-components/social';
import Copyright from './copyright';
import { useState, useEffect } from "react";
import $ from 'jquery';
import { importScript } from "../../utils"

const Footer_v1 = ({ children }) => {
	useEffect(() => {
		if (typeof window != "undefined") {
			//$(".quarter-overlay").fadeIn(1);
			$(window).scrollTop(0);
			setTimeout(function () {
				importScript("assets/js/main.js");
				//$(".quarter-overlay").fadeOut(300);
			}, 100);

			$('.go-top').find('a').on('click', function () {
				$(".quarter-overlay").fadeIn(1);
				$(window).scrollTop(0);
				setTimeout(function () {
					$(".quarter-overlay").fadeOut(300);
				}, 800);
			});

			$(document).on('click', '.theme-btn-1 ', function () {
				$('div').removeClass('modal-backdrop');
				$('div').removeClass('show');
				$('div').removeClass('fade');
				$('body').attr("style", "");
			});
		}
	}, []);
	
	let publicURL = process.env.GATSBY_PUBLIC_URL + '/'
	let imgattr = "Footer logo"
	return (
		<><footer className="ltn__footer-area  ">
			<div className="footer-top-area  section-bg-2 plr--5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-md-6 col-sm-6 col-12">
							<div className="footer-widget footer-about-widget">
								<div className="footer-logo">
									<div className="site-logo">
										<img src={publicURL + "assets/img/logo-2.png"} alt="Logo" />
									</div>
								</div>
								<p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
								<div className="footer-address">
									<ul>
										<li>
											<div className="footer-address-icon">
												<i className="icon-placeholder" />
											</div>
											<div className="footer-address-info">
												<p>Brooklyn, New York, United States</p>
											</div>
										</li>
										<li>
											<div className="footer-address-icon">
												<i className="icon-call" />
											</div>
											<div className="footer-address-info">
												<p><a href="tel:+0123-456789">+0123-456789</a></p>
											</div>
										</li>
										<li>
											<div className="footer-address-icon">
												<i className="icon-mail" />
											</div>
											<div className="footer-address-info">
												<p><a href="mailto:example@example.com">example@example.com</a></p>
											</div>
										</li>
									</ul>
								</div>
								<div className="ltn__social-media mt-20">
									<Social />
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
							<div className="footer-widget footer-menu-widget clearfix">
								<h4 className="footer-title">Company</h4>
								<div className="footer-menu go-top">
									<ul>
										<li><a href="/about">About</a></li>
										<li><a href="/blog-grid">Blog</a></li>
										<li><a href="/shop">All Products</a></li>
										<li><a href="/contact">Contact</a></li>
										<li><a href="/faq">FAQ</a></li>
										<li><a href="/contact">Contact us</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
							<div className="footer-widget footer-menu-widget clearfix">
								<h4 className="footer-title">Services</h4>
								<div className="footer-menu go-top">
									<ul>
										<li><a href="/cart">Cart</a></li>
										<li><a href="/wishlist">Wish List</a></li>
										<li><a href="/login">Login</a></li>
										<li><a href="/checkout">Checkout</a></li>
										<li><a href="/about">Terms &amp; Conditions</a></li>
										<li><a href="/shop">Promotional Offers</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
							<div className="footer-widget footer-menu-widget clearfix">
								<h4 className="footer-title">Customer Care</h4>
								<div className="footer-menu go-top">
									<ul>
										<li><a href="/login">Login</a></li>
										<li><a href="/my-account">My account</a></li>
										<li><a href="/wishlist">Wish List</a></li>
										<li><a href="/add-listing">Add listing</a></li>
										<li><a href="/faq">FAQ</a></li>
										<li><a href="/contact">Contact us</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 col-sm-12 col-12">
							<div className="footer-widget footer-newsletter-widget">
								<h4 className="footer-title">Newsletter</h4>
								<p>Subscribe to our weekly Newsletter and receive updates via email.</p>
								<div className="footer-newsletter">
									<form action="#">
										<input type="email" name="email" placeholder="Email*" />
										<div className="btn-wrapper">
											<button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
										</div>
									</form>
								</div>
								<h5 className="mt-30">We Accept</h5>
								<img src={publicURL + "assets/img/icons/payment-4.png"} alt="Payment Image" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Copyright />
		</footer>
		</>
	)
}

export default Footer_v1