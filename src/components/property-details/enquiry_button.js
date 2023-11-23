import * as React from "react"
import ReactHtmlParser from 'react-html-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import WhatsApp from '../../images/whatsappchart.png'

const RelatedProperty = (props) => {
    let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
    let floorplans = props?.floorplans;
    console.log(floorplans);
    return (
        <>
            <div className="row enquiry-btn">
                <div className="col-lg-12 col-md-12">
                    {/* ltn__product-item */}
                    <a href={process.env.GATSBY_STRAPI_SITE_URL+"/sendemail"} className="whatsapp-btn"><i className="icon-whatsapp" />WhatsApp</a>
                </div>
            </div>
        </>
    )
}

export default RelatedProperty