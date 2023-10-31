
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Image from 'react-bootstrap/Image';
import { imgUrl } from "../../utils";
import ReactHtmlParser from 'react-html-parser';
import './Area.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import 'font-awesome/css/font-awesome.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function SingleCarouselImage(props) {
  const qryData = useStaticQuery(graphql`
      query AreaData {
        allStrapiArea {
          nodes {
            Description
            Name
            Sort
            Image {
              file {
                childImageSharp {
                  gatsbyImageData(height: 200, width: 520, formats: PNG)
                }
              }
            }
          }
        }
      }
    `);
  const AreaData = qryData?.allStrapiArea?.nodes;
  return (
    <>
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <div className="area-div">
        <h2 className="ar-title">{props.title}</h2>
        <span className="ar-separator"><hr /></span>
        <Row>
          {AreaData && AreaData.map((area, index) => (
            <>
              <Col lg={6} md={6} sm={6} xs={6}>
                <Card className="ar-card">                  
                  <Card.Body className="ar-card-body">
                    <Card.Title className="ar-card-title"><i className="fa fa-map-marker fa-lg ar-mapicon"></i>{area?.Name}</Card.Title>
                  </Card.Body>
                  <LazyLoadImage variant="top" src={imgUrl(area?.Image)} />
                </Card>
              </Col>
            </>
          ))
          }
        </Row>
      </div>
      </AnimationOnScroll>
    </>
  )
}
export default SingleCarouselImage