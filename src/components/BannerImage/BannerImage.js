import * as React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './BannerImage.scss'
import { StaticImage } from "gatsby-plugin-image"

function CarouselImage (props) {
  
  const images = props?.data?.Images;
  console.log("log:",images)
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
            <Image className="d-block w-100" src={item?.file.childrenImageSharp[0].gatsbyImageData.images.fallback.src} alt={"BannerImage-"+index} />
            {/* 
            https://devadmin.fullbasketproperty.com/"+item?.attributes?.url
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
      ))
      }
    </Carousel>
  )
}
export default CarouselImage