import * as React from "react";
import ReactHtmlParser from 'react-html-parser';

const CopyRight = (props) => {
	const siteConfig = props?.siteConfig;
	return (
		<div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
			<div className="container-fluid ltn__border-top-2">
				<div className="row">
					<div className="col-md-6 col-12">
						<div className="ltn__copyright-design clearfix">
							<p>{ReactHtmlParser(siteConfig?.Copy_Write)} <span className="current-year" /></p>
						</div>
					</div>
					<div className="col-md-6 col-12 align-self-center">
						<div className="ltn__copyright-menu text-end">
							<ul className="go-top">
								<li><a target='_blank' href={siteConfig?.Terms_Conditions?.Menu_Link}>{siteConfig?.Terms_Conditions?.Name}</a></li>
								<li><a target='_blank' href={siteConfig?.Privacy_Policy?.Menu_Link}>{siteConfig?.Privacy_Policy?.Name}</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default CopyRight