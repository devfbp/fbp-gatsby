import * as React from "react"
import { isMobile } from 'react-device-detect';
import WhatsApp from '../../images/whatsappchart.png'
const EnquiryForm = (props) => {
    let fdata = props?.fdata;
    const [stickClass, setStickClass] = React.useState("box-shadow-1 widget ltn__form-widget sticky-form-class sticky-form-class");
    React.useEffect(() => {
        if (isMobile) {
            setStickClass("box-shadow-1 widget ltn__form-widget sticky-form-class");
        }
    }, [isMobile])

    return (
        <>
            <div className={stickClass} id="sticky-form">
                <p className="form-title">
                    Interested to buy property<div className="pname">{fdata?.Name}?</div>
                </p>
                <form action="#" id="property_enq_form">
                    <input className="form-field" type="text" name="yourname" placeholder="Your Name*" />
                    <input className="form-field" type="text" name="yourphone" placeholder="Your Phone Number*" />
                    <input className="form-field" type="text" name="youremail" placeholder="Your e-Mail*" />

                    <p>
                        <label class="input-info-save mb-0">
                            <input type="checkbox" name="agree" /> I agree to terms.
                        </label>
                    </p>
                    <button type="submit" className="btn theme-btn-5">Get Instant Callback</button>
                    <p className="form-title">Or</p>
                    <button href="#" className="btn theme-btn-1 whatsapp-btn"><img src={WhatsApp} width={"100%"}/></button>
                </form>
            </div>

        </>
    )
}

export default EnquiryForm