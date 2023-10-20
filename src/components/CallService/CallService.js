
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

function SingleCarouselImage(props) {
  const qryData = useStaticQuery(graphql`
      query CallServiceData {
        strapiContactModule {
          id
          Name
          Message
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
    <>
    <Container>
      <Row className="call-service">
        {CallServiceData &&
          <>
            <Col lg={1} sm={2}>
              <Image src={imgUrl(CallServiceData?.Image)} alt={CallServiceData.Name} />
            </Col>
            <Col lg={9} className="cs-text">
              <p>{ReactHtmlParser(CallServiceData?.Message)}</p>
            </Col>
            <Col lg={2} sm={2}>
            <a href="#" className="btn btn-primary">CALL ME</a>
            </Col>
          </>
        }
      </Row>
      </Container>
    </>
  )
}
export default SingleCarouselImage