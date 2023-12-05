import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useState } from 'react'
import WhatsApp from '../images/whatsappchart.png'
import { SendMail } from "../utils";
import { isMobile } from 'react-device-detect';
import { imgUrl } from "../utils";
import './popup-contact.scss'
const PopupContact = (props) => {
  const pageurl = typeof window !== "undefined" ? window.location.href : "";
  const qryData = useStaticQuery(graphql`
      query PopupContact {
        strapiPopupContact {
          Name
          Description
          Image {
            file {
              childImageSharp {
                gatsbyImageData(height: 800, width: 800)
              }
            }
          }
        }
      }
    `);
  let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/';
  const popupContact = qryData?.strapiPopupContact;
  let imgattr = "Footer logo";
  let fdata = props?.fdata;
  const [stickClass, setStickClass] = React.useState("box-shadow-1 widget ltn__form-widget sticky-form-class sticky-form-class");
  React.useEffect(() => {
    if (isMobile) {
      setStickClass("box-shadow-1 widget ltn__form-widget sticky-form-class");
    }
  }, [isMobile]);

  const [data, setData] = useState({
    "template_name": "Propery_Enquiry",
    "propert_link": pageurl,
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
      <div className="ltn__modal-area ltn__add-to-cart-modal-area2" id="popup-contact-modal">
        <div className="modal fade" id="popup-contact" tabIndex={-1}>
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="ltn__quick-view-modal-inner">
                  <div className="modal-product-item">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-7" id="popup-contact-div1">
                          <div className="modal-product-img">
                            <img src={imgUrl(popupContact?.Image)} alt="#" />
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-12" id="popup-contact-form">
                          <h5 className="form-title">{popupContact?.Name}</h5>
                          <form action="#" onSubmit={onSubmit}>
                            <input className="form-field" onChange={updateData} type="text" name="name" placeholder="Your Name*" />
                            <input className="form-field" onChange={updateData} type="text" name="email" placeholder="Your Phone Number*" />
                            <input className="form-field" onChange={updateData} type="text" name="phonenumber" placeholder="Your e-Mail*" />
                            <button type="submit" className="btn theme-btn-5">Submit</button>
                            <p className="form-title">Or</p>
                            <button href="#" className="btn theme-btn-1 whatsapp-btn"><img src={WhatsApp} width={"100%"} /></button>
                          </form>
                          {/* additional-info */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupContact