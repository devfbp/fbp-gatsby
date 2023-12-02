import * as React from "react"
import ReactHtmlParser from 'react-html-parser';
import { mediumImg, smallImg } from '../../utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductFloorPlans = (props) => {
    let floorplans = props?.floorplans;
    let unit_types = props?.unit_types;
    console.log(floorplans);
    return (
        <>
            <div className="box-shadow-1">
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
                                <div id={"liton_tab_3_" + index} className={index == 0 ? 'tab-pane fade active show' : 'tab-pane fade'} >
                                    <div className="ltn__apartments-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="apartments-plan-img">
                                                    <LazyLoadImage
                                                        alt={"property_" + index}
                                                        height={"450px"}
                                                        src={process.env.GATSBY_STRAPI_IMAGE_URL + mediumImg(floorplan?.Image)} // use normal <img> attributes as props
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
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" className="table table-bordered table-striped tbl1">
                                    <tbody>
                                        <tr>
                                            <th width="20%" className="text-center"><strong>Unit Type</strong></th>
                                            <th width="20%" className="text-center"><strong>Saleable Area</strong></th>
                                            <th width="20%" className="text-center"><strong>RERA Carpet Area</strong></th>
                                            <th width="20%" className="text-center"><strong>Price</strong></th>
                                            <th width="20%" className="text-center"><strong>Floor Plans</strong></th>
                                        </tr>
                                        {unit_types &&
                                            <>
                                                {unit_types.map((unittype, index) => (
                                                    <>
                                                        <tr>
                                                            <td>{unittype?.Unit_Type}</td>
                                                            <td>{unittype?.Saleable_Area}</td>
                                                            <td>{unittype?.RERA_Carpet_Area}</td>
                                                            <td><a href="#" className="btn-sml">Call Me</a></td>
                                                            <td><a className="btn-sml" href={process.env.GATSBY_STRAPI_IMAGE_URL + mediumImg(unittype?.Image)} data-rel="lightcase:myCollection">{"View"}</a></td>
                                                        </tr>
                                                    </>
                                                ))}
                                            </>
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFloorPlans