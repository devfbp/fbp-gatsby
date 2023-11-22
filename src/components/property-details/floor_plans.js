import * as React from "react"
import ReactHtmlParser from 'react-html-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductFloorPlans = (props) => {
    let floorplans = props?.floorplans;
    console.log(floorplans);
    return (
        <>
            <h4 className="title-2">{props?.title}</h4>

            <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---">
                    <div className="nav">

                        {floorplans &&
                            floorplans.map((floorplan, index) => (
                                <><a data-bs-toggle="tab" className={index == 0 ? 'active show' : ''} href={"#liton_tab_3_" + index} >{floorplan?.Floor}</a></>
                            ))

                        }
                    </div>
                </div>
                <div className="tab-content">
                    {floorplans &&
                        floorplans.map((floorplan, index) => (
                            <div className="tab-pane fade" id={"liton_tab_3_" + index}>
                                <div className="ltn__apartments-tab-content-inner">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="apartments-plan-img">
                                                <LazyLoadImage
                                                    alt={"property_" + index}
                                                    height={"450px"}
                                                    src={process.env.GATSBY_STRAPI_IMAGE_URL + floorplan?.Image?.data?.attributes?.url} // use normal <img> attributes as props
                                                    width={"1904px"} />
                                                <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
                                                    Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                                                    eiusmod tempor.Incididunt labore et dolore magna aliqua.
                                                    sed ayd minim veniam.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProductFloorPlans