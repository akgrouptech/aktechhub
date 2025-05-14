import React from 'react'
import './body.css'
import '../../App.css'
import compliance from '../../components/Images/compliance.png';
import responsive from '../../components/Images/responsive.png';
import search from '../../components/Images/search.png';
import technology from '../../components/Images/technology.png';
import web from '../../components/Images/web.png';
import workstation from '../../components/Images/workstation.png';

import Add_details from '../../components/Images/Add_details.png';
import login from '../../components/Images/login.png';
import Themes from '../../components/Images/Themes.png';

import ayush_temp1 from '../../components/Images/ayush-temp1.png';
import ayush_temp2 from '../../components/Images/ayush-temp2.png';
import ayush_temp3 from '../../components/Images/ayush-temp3.png';
import ayush_temp4 from '../../components/Images/ayush-temp4.png';

const body = () => {
    return (
        <>
            <section className="banner-section"></section>
            <section className="section-tb about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="custom-section-text mb-0">
                                <p className="section-text"><span className="bold-text">Aktechhub</span> is a frontend design agency focused on creating clean, modern, and responsive interfaces. We specialize in HTML, CSS, JavaScript, and Bootstrap to build websites that are fast, user-friendly, and visually appealing.</p>
                                <p className="section-text mb-0">We also work with React and Spring Boot using Thymeleaf to develop dynamic, interactive frontends tailored to your business needs. Whether it's a landing page or a full web app, we deliver quality designs that bring your ideas to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-tb bg-grad">
                <div className="container">
                    <h2 className="section-title text-center mb-5">
                        <span className="section-heighlight" >Our Features</span>
                    </h2>
                    <div className="social-card-wrapper">
                        <div className="social-media-card">
                            <div className="social-media-logo">
                                <img src={compliance} alt="GIGW Compliance" title="GIGW Compliance" className="img-fluid" />
                            </div>
                            <div className="about-social-media">
                                <div className="followers-count">Secure Website</div>
                                <div className="sub-text">Built with best practices for security, ensuring safe and reliable user experience</div>
                            </div>
                        </div>
                        <div className="social-media-card">
                            <div className="social-media-logo">
                                <img src={technology} alt="Unified Open Source Technology" title="Unified Open Source Technology" className="img-fluid" />
                            </div>
                            <div className="about-social-media">
                                <div className="followers-count">Unified Open Source Technology
                                </div>
                                <div className="sub-text">Complete SaaS solution, built upon
                                    cutting edge Open Source technology stacks</div>
                            </div>
                        </div>
                        <div className="social-media-card">
                            <div className="social-media-logo">
                                <img src={search} alt="Search" title="Search" className="img-fluid" />
                            </div>
                            <div className="about-social-media">
                                <div className="followers-count">Search</div>
                                <div className="sub-text">Integrated search to enable easy
                                    discoverability of content</div>
                            </div>
                        </div>
                        <div className="social-media-card">
                            <div className="social-media-logo">
                                <img src={responsive} alt="Responsive Design" title="Responsive Design" className="img-fluid" />
                            </div>
                            <div className="about-social-media">
                                <div className="followers-count">Responsive Design</div>
                                <div className="sub-text">Easily accessible through Smart
                                    Phones, Tablets and Desktop PC</div>
                            </div>
                        </div>
                        <div className="social-media-card">
                            <div className="social-media-logo">
                                <img src={web} alt="Templates" title="Templates" className="img-fluid" />
                            </div>
                            <div className="about-social-media">
                                <div className="followers-count">Templates</div>
                                <div className="sub-text">Easily configurable templats for
                                    visually exclusive presentation</div>
                            </div>
                        </div>
                        <div className="social-media-card">
                            <div className="social-media-logo">
                                <img src={workstation} alt="Infrastructure Included" title="Infrastructure Included" className="img-fluid" />
                            </div>
                            <div className="about-social-media">
                                <div className="followers-count">Infrastructure Included</div>
                                <div className="sub-text">A framework that expects compute,
                                    storage and networking to be provisioned</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-tb full-section">
                <div className="container-fluid">
                    <h2 className="section-title text-center mb-5">
                        <span className="section-heighlight">Creating a Website through aktechhub</span>
                    </h2>
                    <div className="fullcontent-cards">
                        <div className="bg-cards">
                            <div className="fc-card-img">
                                <img src={login} alt="Login at S3WaaS" title="Login at S3WaaS" className="img-fluid" />
                            </div>
                            <h3 className="fc-card-ttl">01 Connect aktechhub</h3>
                            <p className="fc-card-content">connect.aktechhub@gmail.com</p>
                        </div>
                        <div className="bg-cards">
                            <div className="fc-card-img">
                                <img src={Add_details} alt="Add Website Details" title="Add Website Details" className="img-fluid" />
                            </div>
                            <h3 className="fc-card-ttl">02 Share Content Details</h3>
                            <p className="fc-card-content">Provide the Website Details,
                                Technical Owner Details and Site Owner Details</p>
                        </div>
                        <div className="bg-cards">
                            <div className="fc-card-img">
                                <img src={Themes} alt="Choose Template" title="Choose Template" className="img-fluid" />
                            </div>
                            <h3 className="fc-card-ttl">03 Choose Template</h3>
                            <p className="fc-card-content">Select template for your feature
                                requirement</p>
                        </div>

                        <div className="bg-cards">
                            <div className="fc-card-img">
                                <img src={Add_details} alt="Customize Site" title="Customize Site" className="img-fluid" />
                            </div>
                            <h3 className="fc-card-ttl">04 Customize Site</h3>
                            <p className="fc-card-content">Add/Edit features, text, images,
                                video &amp; more</p>
                        </div>
                        <div className="bg-cards">
                            <div className="fc-card-img">
                                <img src={Add_details} alt="Make Site Live" title="Make Site Live" className="img-fluid" />
                            </div>
                            <h3 className="fc-card-ttl">05 Make Site Live</h3>
                            <p className="fc-card-content">Get your site live and share it with
                                the public</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-tb bg-grad">
                <div className="container">
                    <h2 className="section-title text-center mb-5">
                        <span className="section-heighlight">Templates</span>
                    </h2>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="temp-card">
                                <div className="temp-img-wrapper">
                                    <img className="img-fluid" alt="" title="" src={ayush_temp1} />
                                </div>
                                <a className="exp-btn" href="https://angelschoolvyara.in/" target="_blank" title="Explore more">
                                    <span className="button-box">
                                        <span className="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                        <span className="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="temp-card">
                                <div className="temp-img-wrapper">
                                    <img className="img-fluid" alt="" title="" src={ayush_temp2} />
                                </div>
                                <a className="exp-btn" href="https://myibaworld.com/" target="_blank" title="Explore more">
                                    <span className="button-box">
                                        <span className="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                        <span className="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="temp-card">
                                <div className="temp-img-wrapper">
                                    <img className="img-fluid" alt="" title="" src={ayush_temp3} />
                                </div>
                                <a className="exp-btn" href="https://radar-template.webflow.io/home/01" target="_blank" title="Explore more">
                                    <span className="button-box">
                                        <span className="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                        <span className="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="temp-card">
                                <div className="temp-img-wrapper">
                                    <img className="img-fluid" alt="" title="" src={ayush_temp4} />
                                </div>
                                <a className="exp-btn" href="https://avenor.webflow.io/home-three" target="_blank" title="Explore more">
                                    <span className="button-box">
                                        <span className="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                        <span className="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default body