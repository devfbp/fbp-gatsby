import * as React from "react"
import { isBrowser } from 'react-device-detect';
import WhatsApp from '../../images/whatsappchart.png'
import { SendMail } from "../../utils";
import { useState, useEffect } from 'react'
import $ from 'jquery';
const EnquiryForm = (props) => {
    let fdata = props?.fdata;
    const [stickClass, setStickClass] = useState("box-shadow-1 widget ltn__form-widget sticky-form-class sticky-form-class");
    const handleScroll = e => {
        var page_wrapper = parseFloat($("#quarter").height()) - 650;
        //  console.log(window.scrollY)
        var scroll = window.scrollY;
        if (scroll < 445) {
            $(".sticky-form-class").css({
                'position': 'relative',
                'top': '0',
                'width': '100%'
            });
        } else {
            $(".sticky-form-class").css({
                'position': 'fixed',
                'top': '20%',
                'width': '28%'
            });
        }
        if (scroll >= page_wrapper) {
            $(".sticky-form-class").css({
                'position': 'relative',
                'top': '0',
                'width': '100%'
            });
        }
    }
    useEffect(() => {
        if (isBrowser) {
            //setStickClass("box-shadow-1 widget ltn__form-widget sticky-form-class");
            window.addEventListener("scroll", handleScroll);
        }
    }, [isBrowser]);

    const [data, setData] = useState({
        "template_name": "Propery_Enquiry",
        "propert_link": "http://localhost:8000/product-details/akshaya-tango-21/",
        "subject_suffix": fdata?.Name
    })

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = async e => {
        e.preventDefault()
        //console.log(data)
        await SendMail(data);
        return false;
    }

    return (
        <>
            <div className={stickClass} id="sticky-form">
                <p className="form-title">
                    Interested to buy property<div className="pname">{fdata?.Name}?</div>
                </p>
                <form action="#" id="property_enq_form" onSubmit={onSubmit}>
                    <input className="form-field" onChange={updateData} type="text" name="name" placeholder="Your Name*" />
                    <input className="form-field" onChange={updateData} type="text" name="email" placeholder="Your Phone Number*" />
                    <input className="form-field" onChange={updateData} type="text" name="phonenumber" placeholder="Your e-Mail*" />

                    <p>
                        <label class="input-info-save mb-0">
                            <input type="checkbox" name="agree" /> I agree to terms.
                        </label>
                    </p>
                    <button type="submit" className="btn theme-btn-5">Get Instant Callback</button>
                    <p className="form-title">Or</p>
                    <button href="#" className="btn theme-btn-1 whatsapp-btn"><img src={WhatsApp} width={"100%"} /></button>
                </form>
            </div>

        </>
    )
}

export default EnquiryForm