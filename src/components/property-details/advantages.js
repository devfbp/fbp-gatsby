import * as React from "react"
import ReactHtmlParser from 'react-html-parser';

const ProductDesc = (props) => {
    let advantages = props?.advantages;
    return (
        <>
            <div className="box-shadow-1 ">
                <h4 className="title-2">{props?.title}</h4>
                {ReactHtmlParser(advantages?.Description)}
            </div>
        </>
    )
}

export default ProductDesc