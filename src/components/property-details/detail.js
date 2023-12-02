import * as React from "react"
import { rupeeFormat,rupeeFormatStr } from "../../utils";
const ProductDetail = (props) => {
    let detail = props?.detail;
    return (
        <>
            <div className="box-shadow-1">
                <h4 className="title-2">{props?.title}</h4>
                <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                    <ul>
                        <li><label>Builder:</label> <span>{detail?.Builder?.data?.attributes?.Name}</span></li>
                        <li><label>Project Size: </label> <span>{detail?.Project_Size}</span></li>
                        <li><label>Unit Size:</label> <span>{detail?.Unit_Size} Sq.Ft</span></li>
                        <li><label>Total Floors:</label> <span>{detail?.Total_Floors}</span></li>
                    </ul>
                    <ul>
                        <li><label>Project Type:</label> <span>{detail?.Type?.data?.attributes?.Name} </span></li>
                        <li><label>Price(Per SqFt):</label> <span>{rupeeFormat(detail?.Price_Per_Sq_Feet)}</span></li>
                        <li><label>Price:</label> <span>{rupeeFormatStr(detail?.Price)}</span></li>
                        <li><label>Property Status:</label> <span>{detail?.Status?.data?.attributes?.Name}</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductDetail