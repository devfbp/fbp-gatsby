import * as React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductVide = (props) => {
    return (
        <>
            <div className="box-shadow-1">
                <h4 className="title-2">{props?.title}</h4>
                <div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={process.env.GATSBY_STRAPI_IMAGE_URL + props?.mimage?.data?.attributes?.url}>
                    <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href={props.video + "?autoplay=1&showinfo=0"} data-rel="lightcase:myCollection">
                        <i className="fa fa-play" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProductVide