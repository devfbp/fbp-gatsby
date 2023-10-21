
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { imgUrl } from "../../utils";
import './PropertyType.scss'
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

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
    <>
      <div className="property-type">
        <h2 className="pt-title">{props.title}</h2>
        <span className="separator"><hr /></span>
        <Row>
          {PropertyTypeData && PropertyTypeData.map((ptype, index) => (
            <>
              <Col lg={3} md={6} sm={6} xs={12}>
                <Card className="pt-card">
                  <Card.Img variant="top" src={imgUrl(ptype?.Image)} />
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
    </>
  )
}
export default SingleCarouselImage