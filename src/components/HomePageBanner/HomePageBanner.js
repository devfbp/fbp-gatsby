
import * as React from "react"
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { imgUrl } from "../../utils";
import ReactHtmlParser from 'react-html-parser';
import './HomePageBanner.scss'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function SingleCarouselImage(props) {  
  const image_desktop = imgUrl(props?.dataV?.Banner_Image);
  const image_mobile = imgUrl(props?.dataV?.Banner_Image_Mobile);
  const banner_text = props?.dataV?.Banner_Text;
  const [bannerImage, setBannerImage] = useState('');
  //console.log("log:",isMobile);
  //var bannerImage = "";
  var imgWidth="";
  var imgHeight="";
  useEffect(()=>{
    if(isMobile) {
      setBannerImage(image_mobile);
      imgWidth = "378px";
      imgHeight = "420px";
    } else if(isBrowser) {
      setBannerImage(image_desktop);
      imgWidth = "1300px";
      imgHeight = "420px";
    }
  },[])
  
  return (
    <Carousel
      autoPlay={false}
      controls={false}
      indicators={false}
      pause={false}
      className="single-banner"
    >
      {bannerImage &&
        <Carousel.Item>
            <Image className="d-block w-100 banner-image" src={bannerImage} alt={"BannerImage"} width={imgWidth} height={imgHeight}/>
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