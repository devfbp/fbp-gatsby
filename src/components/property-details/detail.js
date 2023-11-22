import * as React from "react"
const ProductDetail = (props) => {
    let detail = props?.detail;
    return (
        <>
            <h4 className="title-2">{props?.title}</h4>
            <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                <ul>
                    <li><label>Builder:</label> <span>{detail?.Builder?.data?.attributes?.Name}</span></li>
                    <li><label>Project Size: </label> <span>{detail?.Project_Size}</span></li>
                    <li><label>Unit Size:</label> <span>{detail?.Unit_Size}</span></li>
                    <li><label>Total Floors:</label> <span>{detail?.Total_Floors}</span></li>
                </ul>
                <ul>
                    <li><label>Project Type:</label> <span>{detail?.Total_Floors} </span></li>
                    <li><label>Price(Per SqFt):</label> <span>{detail?.Price_Per_Sq_Feet}</span></li>
                    <li><label>Price:</label> <span>{detail?.Price}</span></li>
                    <li><label>Property Status:</label> <span>{detail?.Status?.data?.attributes?.Name}</span></li>
                </ul>
            </div>
        </>
    )
}

export default ProductDetail