import * as React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './BannerImage.scss'
import { StaticImage } from "gatsby-plugin-image"

function CarouselImage (props) {
  
  const images = props?.data?.Images;
  //console.log("log:",images)
  return (
    <Carousel
      autoPlay={true}
      interval={2500}
      controls={false}
      indicators={false}
      pause={false}
    >
      {images && images.map((item, index) =>(
          <Carousel.Item>
        </Carousel.Item>
      ))
      }
    </Carousel>
  )
}
export default CarouselImage