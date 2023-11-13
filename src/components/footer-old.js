import * as React from "react"
import ReactHtmlParser from 'react-html-parser';
import 'font-awesome/css/font-awesome.min.css';
import './footer.scss';
import ColorLine from '../images/colorline.jpg'
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function Footer(props) {
    return (
        <>
            <div className="footer-colorline">
                <Image src={ColorLine} alt="Colorline" width={"100%"} height={"14px"} />
            </div>
            <div className="footer">
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <h4>Main Menu</h4>
                        <span className="footer-separator"><hr /></span>
                        <ul className="menu">
                            {props.siteConfig?.Footer_Menu_Links &&
                                props.siteConfig?.Footer_Menu_Links.map(Links => (
                                    <li><a className="menu-link" href={Links?.Link?.Menu_Link}>{Links?.Link?.Name}</a></li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <h4>Popular Searches </h4>
                        <span className="footer-separator"><hr /></span>
                        {props.siteConfig?.Popular_Search &&
                            <>{ReactHtmlParser(props.siteConfig?.Popular_Search?.Search_List)}</>
                        }
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <h4>Company </h4>
                        <span className="footer-separator"><hr /></span>
                        {props.siteConfig?.Address &&
                            <>{ReactHtmlParser(props.siteConfig?.Address)}</>
                        }
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
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className="copy_write">
                        <span className="footer-separator"><hr /></span>
                        <p>Copy Write {ReactHtmlParser(props.siteConfig?.Copy_Write)}</p>
                    </Col>
                </Row>
            </div>
        </>

    );
}

export default Footer;