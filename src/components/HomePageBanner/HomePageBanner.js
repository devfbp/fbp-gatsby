import * as React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { imgUrl } from "../../utils";
import ReactHtmlParser from 'react-html-parser';
import './HomePageBanner.scss'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function SingleCarouselImage(props) {
  console.log("log:", props)
  const image_desktop = imgUrl(props?.dataV?.Banner_Image);
  const image_mobile = imgUrl(props?.dataV?.Banner_Image_Mobile);
  const banner_text = props?.dataV?.Banner_Text;
  return (
    <Carousel
      autoPlay={false}
      controls={false}
      indicators={false}
      pause={false}
      className="single-banner"
    >
      {image_desktop &&
        <Carousel.Item>
          <BrowserView>
            <Image className="d-block w-100 banner-image" src={image_desktop} alt={"BannerImage"} />
          </BrowserView>
          <MobileView>
            <Image className="d-block w-100 banner-image" src={image_mobile} alt={"BannerImage"} />
          </MobileView>
          {banner_text &&
            <Carousel.Caption>
              {ReactHtmlParser(banner_text)}
            </Carousel.Caption>
          }
        </Carousel.Item>
      }
    </Carousel>
  )
}
export default SingleCarouselImage