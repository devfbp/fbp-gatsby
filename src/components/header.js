import * as React from "react";
import '../../static/assets/css/font-icons.css'
import '../../static/assets/css/plugins.css'
import '../../static/assets/css/style.css'
import '../../static/assets/css/responsive.css'
import '../../static/assets/css/custom.scss'
import Social from '../components/section-components/social';
import { imgPublicUrl } from "../utils";
import HeaderMenu from './header-menu';
function Header(props) {
  const siteConfig = props?.siteConfig;
  const logo = imgPublicUrl(siteConfig?.Logo);
  const logo2 = imgPublicUrl(siteConfig?.Logo2);
  const defaultMenu = "Root";
  const childMenuList = [];
  const dummyArray = [defaultMenu];
  if (props.siteConfig.Top_Menu) {
    props.siteConfig.Top_Menu.map((menu, index) => {
      var obj = { 'name': menu?.Menu?.Name, 'link': menu?.Menu?.Menu_Link };
      var m = menu?.Menu?.Parent_Menu?.Name;
      if (!dummyArray.includes(m)) {
        dummyArray.push(m);
        childMenuList[m] = [];
      }
      if (childMenuList[m]) {
        childMenuList[m].push(obj);
      }
      return true;
    });
    dummyArray.splice(0, 1)
  }
  return (
    <div>
      <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
        <div className="ltn__header-top-area top-area-color-white">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li><a href={"mainto:" + siteConfig?.Email_Id + "&Subject=I%20am%20Interested"}><i className="icon-mail" /> {siteConfig?.Email_Id}</a></li>
                    <li><a href={"tel:" + siteConfig?.Phone_Number}><i className="icon-call" /> {siteConfig?.Phone_Number}</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="top-bar-right text-end">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        {/* ltn__language-menu */}
                        {/* <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                          <ul>
                            <li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                              <ul>
                                <li><a href="#">Arabic</a></li>
                                <li><a href="#">Bengali</a></li>
                                <li><a href="#">Chinese</a></li>
                                <li><a href="#">English</a></li>
                                <li><a href="#">French</a></li>
                                <li><a href="#">Hindi</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div> */}
                      </li>
                      <li>
                        <Social links={siteConfig?.Social_Links} clsname={"ltn__social-media"} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="site-logo-wrap">
                  <div className="site-logo go-top">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                  </div>
                  <div className="get-support clearfix d-none">
                    <div className="get-support-icon">
                      <i className="icon-call" />
                    </div>
                    <div className="get-support-info">
                      <h6>Get Support</h6>
                      <h4><a href="tel:+123456789">123-456-789-10</a></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col header-menu-column menu-color-white">
                <div className="header-menu d-none d-xl-block go-top">
                  <nav>
                    <div className="ltn__main-menu">
                      <HeaderMenu Top_Menu={siteConfig?.Top_Menu} />
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col--- ltn__header-options ltn__header-options-2 ">
                {/* Mobile Menu Button */}
                <div className="mobile-menu-toggle d-xl-none">
                  <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                    <svg viewBox="0 0 800 600">
                      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
                      <path d="M300,320 L540,320" id="middle" />
                      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <button className="ltn__utilize-close">×</button>
          </div>
          
          <div className="ltn__utilize-menu">
            <HeaderMenu Top_Menu={siteConfig?.Top_Menu} />
          </div>
          <Social links={siteConfig?.Social_Links} clsname={"ltn__social-media-2"}/>
        </div>
      </div>
    </div>
  )
}
export default Header;