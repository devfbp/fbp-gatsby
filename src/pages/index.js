import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePageBanner from '../components/HomePageBanner/HomePageBanner';
import PropertyType from "../components/PropertyType/PropertyType";
import CallService from "../components/CallService/CallService"
import NoPage from "../components/NoPage/NoPage"
import LatestProperty from '../components/LatestProperty/LatestProperty';
import Builder from '../components/Builder/Builder';
import { useStaticQuery, graphql } from "gatsby";
import '../scss/NoPage.scss';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ProgressBar from "@ramonak/react-progress-bar";


const IndexPage = () => {

  return (

    <Row className="nopage-div">
      <Col>
        <div className="title">
          <h2>Full Basket Property</h2>
        </div>
        <p>WE WILL BE BACK <br />SOON</p>
        <p className="progressbar">
          PROGRESS<br />
          <ProgressBar
            completed={80}
            animateOnRender={true}
            bgColor={"#F58634"}
          />
        </p>
        <h5>Contact Us</h5>
        <h5>Call: <a href="tel:9019000400">9019000400</a></h5>
        <h5>Email: <a href="mailto:sales@fullbasketproperty.com">sales@fullbasketproperty.com</a></h5>
      </Col>
    </Row>

  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
