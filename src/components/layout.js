/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [siteName, setSiteName] = useState("");
  const [menuLists, setMenuLists] = useState([]);  
  
  var siteConfig = qryData?.strapiSiteConfiguration;
  var menuData = qryData?.allStrapiMenu?.nodes;
  //console.log("log:",menuData)
  useEffect(() => {
    if(siteConfig) {    
      if(siteConfig?.Name) {
        setSiteName(siteConfig?.Name);
      }
    }
    if(menuData) {
      setMenuLists(menuData);
    }
  }, [siteConfig, menuData  ]);
  return (
    <>
      <Header siteConfig={siteConfig} menuLists={menuLists}/>
      <div>
        <main>{children}</main>      
      </div>
      <Footer siteConfig={siteConfig}/>
    </>
  )
}

export default Layout
