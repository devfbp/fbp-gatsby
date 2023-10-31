import * as React from "react"
import './LatestProperty.scss'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useStaticQuery, graphql } from "gatsby";
import { imgUrl, rupeeFormat } from "../../utils";
import './LatestProperty.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function LatestProperty(props) {
  const qryData = useStaticQuery(graphql`
      query LatestPropertyData {
        allStrapiProperty(sort: {createdAt: DESC}, limit: 5) {
          nodes {
            Area {
              Name
            }
            Builder {
              Name
              Image {
                file {
                  childImageSharp {
                    gatsbyImageData(height: 40, width: 70)
                  }
                }
              }
            }
            Door_No
            Main_Image {
              file {
                childImageSharp {
                  gatsbyImageData(height: 400, width: 500)
                }
              }
            }
            Price
            Street_Name
          }
        }
      }
    `);
  const LatestPropertyData = qryData?.allStrapiProperty?.nodes;
  const FirstPropertyData = qryData?.allStrapiProperty?.nodes[0];
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
    
      <div className="latest-property">
        <h2 className="lp-title">{props.title}</h2>
        <span className="separator"><hr /></span>
        <Container>
          <Row>
            <Col lg={6} className="lp-firstprop">
              <Card className="lp-card text-white">
                <LazyLoadImage variant="top" src={imgUrl(FirstPropertyData.Main_Image)} />
                <Card.ImgOverlay className="d-flex align-items-end">
                  <Card.Text>
                    <Row>
                      <Col lg={12}><h3>2 & 3 BHK Yuva Houses</h3></Col>
                      <Col lg={12} className="lp-price">{rupeeFormat(FirstPropertyData.Price)}</Col>
                      <Col lg={12} className="lp-small">{FirstPropertyData.Door_No + ", " + FirstPropertyData.Street_Name}</Col>
                      <Col lg={12} className="lp-small">{FirstPropertyData.Area.Name}</Col>
                    </Row>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>

            </Col>
            <Col lg={6}>
              <Row>
                {LatestPropertyData && LatestPropertyData?.map((prop, index) => (
                  <>
                    {index > 0 &&
                      <Col lg={6} className="lp-rightprop">
                        <Card className="lp-card text-white">
                          <LazyLoadImage src={imgUrl(prop.Main_Image)} />
                          <Card.ImgOverlay className="d-flex align-items-end">
                            <Card.Text>
                              <Row>
                                <Col lg={12}><h3>2 & 3 BHK Yuva Houses</h3></Col>
                                <Col lg={12} className="lp-price">{rupeeFormat(prop.Price)}</Col>
                                <Col lg={12} className="lp-small">{prop.Door_No + "," + prop.Street_Name}</Col>
                                <Col lg={12} className="lp-small">{prop.Area.Name}</Col>
                              </Row>
                            </Card.Text>
                          </Card.ImgOverlay >
                        </Card>
                      </Col>
                    }
                  </>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </AnimationOnScroll>
  );
}

export default LatestProperty;