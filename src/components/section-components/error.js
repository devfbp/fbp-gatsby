import React, { Component } from 'react';

import parse from 'html-react-parser';

class Error extends Component {

    render() {

        let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'

    return <div className="ltn__404-area ltn__404-area-1 mb-120">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="error-404-inner text-center">
						<div className="error-img mb-30">
						<img src={PublicUrl+"assets/img/others/error-1.png"} alt="#" />
						</div>
						<h1 className="error-404-title d-none">404</h1>
						<h2>Page Not Found!</h2>
						{/* <h3>Oops! Looks like something going rong</h3> */}
						<p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
						<div className="btn-wrapper go-top">
						<a href="/" className="btn btn-transparent"><i className="fas fa-long-arrow-alt-left" /> BACK TO HOME</a>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default Error