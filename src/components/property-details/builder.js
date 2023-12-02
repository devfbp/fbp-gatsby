import * as React from "react"
import ReactHtmlParser from 'react-html-parser';
import { mediumImg, imgUrl2 } from '../../utils';

const Builder = (props) => {
    let builder = props?.builder;
    console.log(builder)
    return (
        <>
            <div className="box-shadow-1 ">
                <h4 className="title-2">{builder?.data?.attributes?.Name}</h4>
                <img className="box-shadow-1" style={{"float":"right","padding":"5px"}} src={process.env.GATSBY_STRAPI_IMAGE_URL+imgUrl2(builder?.data?.attributes?.Image)} />
                {ReactHtmlParser(builder?.data?.attributes?.Description)}
            </div>
        </>
    )
}

export default Builder