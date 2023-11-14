import * as React from "react";

function Social(props) {
	let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
	const links = props?.links;
	return (
		<>
			{
				links &&
				<div className={props.clsname} >
					<ul>
						{links.map((link) => (
							<li><a href={link.Link} target="_blank" title={link.Name}><i className={link.Icon} /></a></li>
						))}
					</ul>
				</div>
			}
		</>
	)
}

export default Social