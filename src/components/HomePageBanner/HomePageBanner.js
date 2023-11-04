
import * as React from "react"
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { imgUrl } from "../../utils";
import ReactHtmlParser from 'react-html-parser';
import './HomePageBanner.scss'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Zoom from 'react-reveal/Zoom';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputGroup from 'react-bootstrap/InputGroup';

function SingleCarouselImage(props) {
  const image_desktop = imgUrl(props?.dataV?.Banner_Image);
  const image_mobile = imgUrl(props?.dataV?.Banner_Image_Mobile);
  const banner_text = props?.dataV?.Banner_Text;
  const [bannerImage, setBannerImage] = useState('');
  //console.log("log:",isMobile);
  //var bannerImage = "";
  var imgWidth = "";
  var imgHeight = "";
  useEffect(() => {
    if (isMobile) {
      setBannerImage(image_mobile);
      imgWidth = "378px";
      imgHeight = "420px";
    } else if (isBrowser) {
      setBannerImage(image_desktop);
      imgWidth = "1300px";
      imgHeight = "420px";
    }
  }, [])

  return (
    <Zoom>
      <Carousel
        autoPlay={false}
        controls={false}
        indicators={false}
        pause={false}
        className="single-banner"
      >
        {bannerImage &&
          <Carousel.Item>
            <LazyLoadImage className="d-block w-100 banner-image" src={bannerImage} alt={"BannerImage"} width={imgWidth} height={imgHeight} />
            {banner_text &&
              <Carousel.Caption>
                {ReactHtmlParser(banner_text)}
                <Form>
                  <Row>
                    <Col lg={6}>
                      <InputGroup className="mb-3">
                        <Form.Control type="text" name="search_keyword" id="search_keyword" placeholder="Enter Location..." />
                        <InputGroup.Text className="home-search-keyword"><a href="#">Search</a></InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form>
              </Carousel.Caption>
            }
          </Carousel.Item>
        }
      </Carousel>
    </Zoom >
  )
}
export default SingleCarouselImage