import * as React from "react"
import ReactHtmlParser from 'react-html-parser';

const ProductFeatures = (props) => {
    let features = props?.features;
    return (
        <>
            <div className="box-shadow-1">
                <h4 className="title-2">{props?.title}</h4>
                {features &&
                    features.map((feature) => (
                        <>{ReactHtmlParser(feature.Description)}</>
                    ))

                }
            </div>
        </>
    )
}

export default ProductFeatures