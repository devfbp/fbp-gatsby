/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useState, useEffect } from "react";
import { importScript } from "../utils"
import Header from "./header";
import Footer from "./footer";
import PopupContact from "./popup-contact";
import $ from 'jquery';
import { isMobile } from 'react-device-detect';
import { Helmet } from "react-helmet";
import jquery from 'jquery';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const qryData = useStaticQuery(graphql`
      query SiteConfig{
        strapiSiteConfiguration(Name: {eq: "FBP_Dev"}) {
          id
          Address
          Copy_Write
          Email_Id
          Footer_Menu_Links {
            Link {
              Menu_Link
              Menu_Link_Type
              Name
              Menu_Type
            }
            Separator
          }
          Logo {
            file {
              publicURL
            }
          }
          Logo2 {
            file {
              publicURL
            }
          }
          Logo3 {
            file {
              publicURL
            }
          }
          Name
          Phone_Number
          Social_Links {
            Icon
            Link
            Name
          }
          Url
          Contacts {
            Link
            Name
            Value
            Icon
          }
          Top_Menu {
            Name
            Menu {
              Menu_Link
              Menu_Link_Type
              Menu_Type
              Name
              Parent_Menu {
                Name
                Menu_Link
                Menu_Link_Type
                Menu_Type
              }
            }
          }
          Popular_Search {
            Search_List
          }
          Privacy_Policy {
            id
            Name
            Menu_Link
          }
          Terms_Conditions {
            id
            Name
            Menu_Link
          }
        }
        allStrapiMenu {
          nodes {
            Menu_Link
            Menu_Link_Type
            Name
            Menu_Type
          }
        }
      }
    `);
  //const [siteName, setSiteName] = useState("");
  const [menuLists, setMenuLists] = useState([]);

  var siteConfig = qryData?.strapiSiteConfiguration;
  var menuData = qryData?.allStrapiMenu?.nodes;
  //console.log("log:",menuData)
  const handleScroll = e => {
    //  console.log(window.scrollY)
    var scroll = window.scrollY;
    if (scroll < 450) {
      $(".ltn__header-sticky").css({
        'position': 'relative',
      });
    } else {
      $(".ltn__header-sticky").css({
        'position': 'fixed',
      });
    }
  }
  useEffect(() => {
    importScript(process.env.GATSBY_JS_SRC + "/assets/js/plugins.js")
    if (siteConfig) {
      if (siteConfig?.Name) {
        //setSiteName(siteConfig?.Name);
      }
    }
    if (menuData) {
      setMenuLists(menuData);
    }
    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

  }, [siteConfig, menuData]);
  return (
    <>
      <Header siteConfig={siteConfig} menuLists={menuLists} />
      <div class="quarter-overlay">
        <div class="cv-spinner">
          <span class="spinner"></span>
        </div>
      </div>
      <div class="page-wrapper">
        <div id="quarter">{children}</div>
      </div>
      <PopupContact />
      <Footer siteConfig={siteConfig} menuLists={menuLists} />
    </>
  )
}

export default Layout
