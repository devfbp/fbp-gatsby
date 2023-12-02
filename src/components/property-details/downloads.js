import * as React from "react"
import ReactHtmlParser from 'react-html-parser';

const Downloads = (props) => {
    let downloads = props?.downloads;
    return (
        <>
            <div className="box-shadow-1 ">
                <h4 className="title-2">{props?.title}</h4>
                <div class="property-detail-feature-list clearfix mb-45">
                    <ul>
                        {downloads &&
                            downloads.map((download, index) => (
                                <>
                                    <li>
                                        <div class="property-detail-feature-list-item ltn__widget-title-border-2">
                                            <i class="fas fa-download "></i>
                                            <div>
                                                <h6>{download?.Name}</h6>
                                                <small><a href={download?.Link} target="_blank">Download</a></small>
                                            </div>
                                        </div>
                                    </li>
                                </>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Downloads