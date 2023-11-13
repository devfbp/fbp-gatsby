import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogSlider extends Component {
  render() {
    let PublicUrl = process.env.GATSBY_PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
      <div className={ "ltn__blog-area pt-115--- pb-70 go-top "+ sectionClass}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="section-title-area ltn__section-title-2--- text-center">
		          <h6 className={"section-subtitle ltn__secondary-color "+customClass}>News &amp; Blogs</h6>
		          <h1 className="section-title">Leatest News Feeds</h1>
		        </div>
		      </div>
		    </div>
		    <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <a href="/blog-details"><img src={PublicUrl+"assets/img/blog/1.jpg"} alt="#" /></a>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <a href="/team-details"><i className="far fa-user" />by: Admin</a>
		                </li>
		                <li className="ltn__blog-tags">
		                  <a href="/blog-grid"><i className="fas fa-tags" />Interior</a>
		                  <a href="/blog-grid"><i className="fas fa-tags" />Decorate</a>
		                </li>
		              </ul>
		            </div>
		            <h3 className="ltn__blog-title"><a href="/blog-details">10 Brilliant Ways To Decorate Your Home</a></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <a href="/blog-details">Read more</a>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <a href="/blog-details"><img src={PublicUrl+"assets/img/blog/2.jpg"} alt="#" /></a>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <a href="/team-details"><i className="far fa-user" />by: Admin</a>
		                </li>
		                <li className="ltn__blog-tags">
		                  <a href="/blog-grid"><i className="fas fa-tags" />Interior</a>
		                  <a href="/blog-grid"><i className="fas fa-tags" />Interior</a>
		                </li>
		              </ul>
		            </div>
		            <h3 className="ltn__blog-title"><a href="/blog-details">The Most Inspiring Interior Design Of 2021</a></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <a href="/blog-details">Read more</a>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <a href="/blog-details"><img src={PublicUrl+"assets/img/blog/3.jpg"} alt="#" /></a>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <a href="/team-details"><i className="far fa-user" />by: Admin</a>
		                </li>
		                <li className="ltn__blog-tags">
		                  <a href="/blog-grid"><i className="fas fa-tags" />Interior</a>
		                  <a href="/blog-grid"><i className="fas fa-tags" />Estate</a>
		                </li>
		              </ul>
		            </div>
		            <h3 className="ltn__blog-title"><a href="/blog-details">Recent Commercial Real Estate Transactions</a></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />May 22, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <a href="/blog-details">Read more</a>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <a href="/blog-details"><img src={PublicUrl+"assets/img/blog/4.jpg"} alt="#" /></a>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <a href="/team-details"><i className="far fa-user" />by: Admin</a>
		                </li>
		                <li className="ltn__blog-tags">
		                  <a href="/blog-grid"><i className="fas fa-tags" />Interior</a>
		                  <a href="/blog-grid"><i className="fas fa-tags" />Room</a>
		                </li>
		              </ul>
		            </div>
		            <h3 className="ltn__blog-title"><a href="/blog-details">Renovating a Living Room? Experts Share Their Secrets</a></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <a href="/blog-details">Read more</a>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <a href="/blog-details"><img src={PublicUrl+"assets/img/blog/5.jpg"} alt="#" /></a>
		          </div>
		          <div className="ltn__blog-brief">
		            <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <a href="/team-details"><i className="far fa-user" />by: Admin</a>
		                </li>
		                <li className="ltn__blog-tags">
		                  <a href="/blog-grid"><i className="fas fa-tags" />Interior</a>
		                  <a href="/blog-grid"><i className="fas fa-tags" />Trends</a>
		                </li>
		              </ul>
		            </div>
		            <h3 className="ltn__blog-title"><a href="/blog-details">7 home trends that will shape your house in 2021</a></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <a href="/blog-details">Read more</a>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/*  */}
		    </div>
		  </div>
		</div>
    )
  }
}

export default BlogSlider;
