import React, { Component } from 'react';

import parse from 'html-react-parser';

class CallToActonV4 extends Component {

    render() {

        let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'

    return <div className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25" data-bs-bg={PublicUrl+"assets/img/bg/13.jpg"}>
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="call-to-action-inner call-to-action-inner-5 text-decoration text-center go-top">
						<h2 className="white-color">24/7 Availability, Make <a href="/contact">An Appointment</a></h2>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default CallToActonV4