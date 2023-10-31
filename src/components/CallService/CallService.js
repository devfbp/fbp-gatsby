
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Image from 'react-bootstrap/Image';
import { imgUrl } from "../../utils";
import ReactHtmlParser from 'react-html-parser';
import './CallService.scss'
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function SingleCarouselImage(props) {
  const qryData = useStaticQuery(graphql`
      query CallServiceData {
        strapiContactModule {
          id
          Name
          Message
          Phone_Number
          Image {
            file {
              childImageSharp {
                gatsbyImageData(height: 120, width: 120, formats: PNG)
              }
            }
          }
        }
      }
    `);
  const CallServiceData = qryData?.strapiContactModule;
  return (
    <AnimationOnScroll animateIn="animate__bounceIn" animateOut="animate__bounceOut">
      <a href={"tel:" + CallServiceData?.Phone_Number} className="a-tag">
        <Container>
          <Row className="call-service">
            {CallServiceData &&
              <>
                <Col lg={1} md={2} sm={12} xs={12}>
                  <Image src={imgUrl(CallServiceData?.Image)} alt={CallServiceData.Name} />
                </Col>
                <Col lg={8} md={7} sm={12} xs={12} className="cs-text">
                  <p>{ReactHtmlParser(CallServiceData?.Message)}</p>
                </Col>
                <Col lg={3} md={3} sm={12} xs={12}>
                  <a href="#" className="btn btn-primary">CALL ME</a>
                </Col>
              </>
            }
          </Row>
        </Container>
      </a>
    </AnimationOnScroll>
  )
}
export default SingleCarouselImage