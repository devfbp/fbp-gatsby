import * as React from "react"
import ReactHtmlParser from 'react-html-parser';
import 'font-awesome/css/font-awesome.min.css';
function Footer(props) {
    
  return (
    <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
        <h2>{props.siteConfig?.Name}</h2>
            <p className="menu">
                {props.siteConfig?.Footer_Menu_Links &&
                    props.siteConfig?.Footer_Menu_Links.map(Links => (
                        <a href={Links?.Link?.Menu_Link}>{Links?.Link?.Menu_Name}{ReactHtmlParser(Links?.Separator)}</a>
                    ))                
                }
            </p>
            <p className="name"> {props.siteConfig?.Name} {ReactHtmlParser(props.siteConfig?.Copy_Write)} </p>        
        </div>
        <div className="footer-center col-md-4 col-sm-6">
        <div>
            <i className="fa fa-map-marker"></i>
            {props.siteConfig?.Address &&
                <p>{ReactHtmlParser(props.siteConfig?.Address)}</p>
            }
        </div>
        <div>
            <i className="fa fa-phone"></i>
            <p>{props.siteConfig?.Phone_Number}</p>
        </div>
        <div>
            <i className="fa fa-envelope"></i>
            <p><a href={"mailto:"+props.siteConfig?.Email_Id}>{props.siteConfig?.Email_Id}</a></p>
        </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
            {/* <p className="about">
            <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
            </p> */}
            {props.siteConfig?.Social_Links &&
                <>
                    <div className="icons">
                        {props.siteConfig?.Social_Links.map(social_link => (
                            <>
                            {social_link &&
                                <>
                                <a href={social_link.Link}><i className={social_link.Icon}></i></a>
                                </>
                            }
                            </>
                        ))
                        }
                    </div>
                </>
            }
        </div>
    </footer>
  );
}

export default Footer;