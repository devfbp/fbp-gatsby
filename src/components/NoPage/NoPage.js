
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Image from 'react-bootstrap/Image';
import { imgUrl } from "../../utils";
import ReactHtmlParser from 'react-html-parser';
//import './NoPage.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import 'font-awesome/css/font-awesome.min.css';

function SingleCarouselImage(props) {
  
  return (
    <>
      <div className="nopage-div">
        <Row>
            <>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Card className="np-card">                  
                  <Card.Body className="np-card-body">
                    <Card.Title className="np-card-title">Full Basket Property</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </>
        </Row>
      </div>
    </>
  )
}
export default SingleCarouselImage