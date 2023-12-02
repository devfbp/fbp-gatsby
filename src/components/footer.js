import * as React from "react";
import Social from '../components/section-components/social';
import Copyright from '../components/global-components/copyright';
import { useState, useEffect } from "react";
import $ from 'jquery';
import { importScript, imgPublicUrl } from "../utils"
import ReactHtmlParser from 'react-html-parser';


const Footer_v1 = (props) => {
  const siteConfig = props?.siteConfig;
  const logo = imgPublicUrl(siteConfig?.Logo);
  console.log(siteConfig)
  useEffect(() => {
    if (typeof window != "undefined") {
      //$(".quarter-overlay").fadeIn(1);
      $(window).scrollTop(0);
      setTimeout(function () {
        importScript(process.env.GATSBY_JS_SRC + "/assets/js/main.js");
        //$(".quarter-overlay").fadeOut(300);
      }, 200);

      $('.go-top').find('a').on('click', function () {
        $(".quarter-overlay").fadeIn(1);
        $(window).scrollTop(0);
        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

      $(document).on('click', '.theme-btn-1 ', function () {
        $('div').removeClass('modal-backdrop');
        $('div').removeClass('show');
        $('div').removeClass('fade');
        $('body').attr("style", "");
      });
    }
  }, []);

  let publicURL = process.env.GATSBY_PUBLIC_URL + '/'
  let imgattr = "Footer logo";

  return (
    <>
      
      <footer className="ltn__footer-area">
        <div className="footer-top-area  section-bg-2 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img src={logo} alt="Logo" />
                    </div>
                  </div>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-placeholder" />
                        </div>
                        <div className="footer-address-info">
                          <p>{ReactHtmlParser(siteConfig?.Address)}</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-call" />
                        </div>
                        <div className="footer-address-info">
                          <p><a href={"tel:" + siteConfig?.Phone_Number}>{siteConfig?.Phone_Number}</a></p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-mail" />
                        </div>
                        <div className="footer-address-info">
                          <p><a href={"mainto:" + siteConfig?.Email_Id + "&Subject=I%20am%20Interested"}>{siteConfig?.Email_Id}</a></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <Social />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      {siteConfig.Footer_Menu_Links &&
                        siteConfig.Footer_Menu_Links.map((menu) => (
                          <li><a href={menu?.Link?.Menu_Link}>{menu?.Link?.Name}</a></li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Popular Search</h4>
                  <div className="footer-menu go-top">
                    {ReactHtmlParser(siteConfig.Popular_Search?.Search_List)}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Copyright siteConfig={props.siteConfig} />
      </footer>
    </>
  )
}

export default Footer_v1