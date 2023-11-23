import * as React from "react"
import ReactHtmlParser from 'react-html-parser';

const ProductAmenities = (props) => {
    let amenities = props?.amenities;
    return (
        <>
            <div className="box-shadow-1">
                <h4 className="title-2">{props?.title}</h4>
                <div className="property-details-amenities mb-60">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__menu-widget">
                                <ul>
                                    {amenities &&
                                        amenities.map((amenitie, index) => (
                                            <li>
                                                <label className="checkbox-item">{amenitie?.Name}
                                                    <input type="checkbox" defaultChecked="checked" />
                                                    <span className="checkmark" />
                                                </label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAmenities