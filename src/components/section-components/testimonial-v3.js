import * as React from "react"
import { imgUrl } from "../../utils";
import { useStaticQuery, graphql } from "gatsby";
import ReactStarsRating from 'react-awesome-stars-rating';
import Avatar from 'react-avatar';
import DateTimeAgo from "../../utils/datetimeago";
function TestimonialV3(props) {
	const qryData = useStaticQuery(graphql`
      query ClientFeedbackData {
        allStrapiClientFeedback(sort: {Posted_At: DESC}) {
			nodes {
			  Name
			  Review
			  Posted_At
			  Star
			  Image {
				file {
				  childImageSharp {
					gatsbyImageData(height: 200, width: 200, formats: WEBP)
				  }
				}
			  }
			}
		}
      }
    `);
	const ClientFeedbackData = qryData?.allStrapiClientFeedback?.nodes;
	let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/';
	return (
		<div className="ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9 go-top">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Testimonial</h6>
							<h1 className="section-title">{props.title}</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1">
							{ClientFeedbackData &&
								ClientFeedbackData.map((feedback) => (
									<div className="ltn__testimonial-item-5">
										<div className="ltn__quote-icon">
											<i className="far fa-comments" />
										</div>
										<div className="ltn__testimonial-image">
											{
												feedback?.Image ?
													<img src={imgUrl(feedback?.Image)} alt="Quote image" />
													:
													<><Avatar name={feedback?.Name} size="60" round={true} /></>

											}
										</div>
										<div className="ltn__testimonial-info">
											<p>{feedback?.Review}</p>
											<h4>{feedback?.Name}</h4>
											<h6><DateTimeAgo datetime={feedback?.Posted_At} /></h6>
											<ReactStarsRating value={feedback?.Star} />
										</div>
									</div>
								))
							}
						</div>
						<ul className="ltn__testimonial-quote-menu d-none d-lg-block">
							{ClientFeedbackData &&
								ClientFeedbackData.map((feedback) => (
									<li>
										{
											feedback?.Image ?
												<img src={imgUrl(feedback?.Image)} alt="Quote image" />
												:
												<Avatar name={feedback?.Name} size="60" round={true} />
										}
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TestimonialV3