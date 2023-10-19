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
          <Image className="d-block w-100" src={image} alt={"BannerImage"} />
          {props.text &&
            <Carousel.Caption>
              {ReactHtmlParser(props.text)}
            </Carousel.Caption>
          }
        </Carousel.Item>
      }
    </Carousel>
  )
}
export default SingleCarouselImage