import * as React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { imgUrl } from "../../utils";
import ReactHtmlParser from 'react-html-parser';
import './SingleBanner.scss'

function SingleCarouselImage(props) {
  //console.log("log:", props.image);
  const image = imgUrl(props.image);
  return (
    <Carousel
      autoPlay={false}
      controls={false}
      indicators={false}
      pause={false}
      className="single-banner"
    >
      {image &&
        <Carousel.Item>
          <></>
        </Carousel.Item>
      }
    </Carousel>
  )
}
export default SingleCarouselImage