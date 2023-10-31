
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { imgUrl } from "../../utils";
import './PropertyType.scss'
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function SingleCarouselImage(props) {
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
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <div className="property-type">
        <h2 className="pt-title">{props.title}</h2>
        <span className="separator"><hr /></span>
        <Row>
          {PropertyTypeData && PropertyTypeData.map((ptype, index) => (
            <>
              <Col lg={3} md={6} sm={6} xs={6}>
                <Card className="pt-card">
                  <LazyLoadImage variant="top" src={imgUrl(ptype?.Image)} />
                  <Card.Body className="pt-card-body">
                    <Card.Title className="pt-card-title">{ptype?.Name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))
          }
        </Row>
      </div>
    </AnimationOnScroll>
  )
}
export default SingleCarouselImage