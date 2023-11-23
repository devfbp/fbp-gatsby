import * as React from "react";
import '../../static/assets/css/font-icons.css'
import '../../static/assets/css/plugins.css'
import '../../static/assets/css/style.css'
import '../../static/assets/css/responsive.css'
import '../../static/assets/css/custom.scss'
import Social from '../components/section-components/social';
import { imgPublicUrl } from "../utils";
import HeaderMenu from './header-menu';
function Header2(props) {
  const siteConfig = props?.siteConfig;
  const logo = imgPublicUrl(siteConfig?.Logo2);
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
  let PublicUrl = process.env.GATSBY_PUBLIC_URL + '/'
  return (
    <div>
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
        <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
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
                      <li className="d-none">
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
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
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
              <div className="col header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu go-top">
                      <HeaderMenu Top_Menu={siteConfig?.Top_Menu} />
                    </div>
                  </nav>
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
          <div className="ltn__utilize-menu-search-form">
            <form action={"#"}>
              <input type="text" placeholder="Search..." />
              <button><i className="fas fa-search" /></button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <HeaderMenu Top_Menu={siteConfig?.Top_Menu} />
          </div>
          <div className="ltn__social-media-2">
            <Social links={siteConfig?.Social_Links} clsname={"ltn__social-media-2"} />
          </div>
        </div>
      </div>

      {/* Utilize Cart Menu Start */}

      {/* Utilize Cart Menu End */}

    </div>
  )
}


export default Header2