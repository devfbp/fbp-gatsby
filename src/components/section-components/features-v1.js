import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { imgUrl } from "../../utils";

import parse from 'html-react-parser';

function FeaturesV1(props) {

	const qryData = useStaticQuery(graphql`
      query PropertyTypeData {
        allStrapiPropertyType(sort: {Sort: ASC}) {
          nodes {
            Description
            Name
            Image {
              file {
                childImageSharp {
                  gatsbyImageData(width: 286, height: 320)
                }
              }
            }
          }
        }
      }
    `);
	const PropertyTypeData = qryData?.allStrapiPropertyType?.nodes;
	let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

	return (
		<div className={customClass} >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
							<h1 className="section-title">Our Main Focus</h1>
						</div>
					</div>
				</div>
				<div className="row ltn__custom-gutter--- justify-content-center go-top">
					{PropertyTypeData && PropertyTypeData.map((ptype, index) => (
						<><div className="col-lg-3 col-sm-6 col-12">
							<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
								<div className="ltn__feature-icon">
									<img src={PublicUrl+"assets/img/icons/icon-img/21.png"} alt="#" />
								</div>
								<div className="ltn__feature-info">
									<h3><a href="/service-details">{ptype?.Name}</a></h3>
									<p>{ptype?.Description}</p>
									<a className="ltn__service-btn" href="/service-details">Find A Home <i className="flaticon-right-arrow" /></a>
								</div>
							</div>
						</div>
						</>
					))}
				</div>
			</div>
		</div>
	)
}

export default FeaturesV1