import * as React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BrowserView } from 'react-device-detect';
const ProductSlider = (props) => {
    let Images = props?.images?.data;
    return (
        <div className="ltn__img-slider-area mb-30">
            <div className="container-fluid">
                <div className="row ltn__image-slider-6-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                    {Images &&
                        Images.map((img, index) => (
                            <div className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href={process.env.GATSBY_STRAPI_IMAGE_URL + img?.attributes?.url} data-rel="lightcase:myCollection">
                                        <LazyLoadImage
                                            alt={"property_" + index}
                                            height={"450px"}
                                            src={process.env.GATSBY_STRAPI_IMAGE_URL + img?.attributes?.url} // use normal <img> attributes as props
                                            width={"1904px"} />
                                    </a>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <BrowserView>
                    <div className="row ltn__image-slider-6-active-nav slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                        {Images &&
                            Images.map((img, index) => (
                                <div className="col-lg-12">
                                    <LazyLoadImage
                                        alt={"property_" + index}
                                        height={"100px"}
                                        src={process.env.GATSBY_STRAPI_IMAGE_URL + img?.attributes?.url} // use normal <img> attributes as props
                                        width={"120px"} />
                                </div>

                            ))
                        }
                    </div>
                </BrowserView>
            </div>
        </div >
    )
}

export default ProductSlider