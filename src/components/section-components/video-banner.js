import * as React from "react"
import { imgUrl } from "../../utils";
function VideoBanner(props) {
    console.log("log:",props?.Video[0])
    const video = props?.Video[0];
    return (
        <div className="ltn__video-popup-area ltn__video-popup-margin---">
            <div className="ltn__video-bg-img ltn__video-popup-height-600--- bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1" data-bs-bg={imgUrl(video?.Image)}>
                <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href={video?.URL+"?autoplay=1&showinfo=0"} data-rel="lightcase:myCollection">
                    <i className="fa fa-play" />
                </a>
            </div>
        </div>
    )
}

export default VideoBanner