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
import Customize from '../../components/Images/Customize.png';
import Go_live from '../../components/Images/Go_live.png';
import login from '../../components/Images/login.png';
import Themes from '../../components/Images/Themes.png';

import ayush_temp1 from '../../components/Images/ayush-temp1.png';
import ayush_temp2 from '../../components/Images/ayush-temp2.png';
import ayush_temp3 from '../../components/Images/ayush-temp3.png';
import ayush_temp4 from '../../components/Images/ayush-temp4.png';

const body = () => {
    return (
        <>
            <section class="banner-section"></section>
            <section class="section-tb about-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="custom-section-text mb-0">
                                <p class="section-text"><span class="bold-text">Aktechhub</span> is a frontend design agency focused on creating clean, modern, and responsive interfaces. We specialize in HTML, CSS, JavaScript, and Bootstrap to build websites that are fast, user-friendly, and visually appealing.</p>
                                <p class="section-text mb-0">We also work with React and Spring Boot using Thymeleaf to develop dynamic, interactive frontends tailored to your business needs. Whether it's a landing page or a full web app, we deliver quality designs that bring your ideas to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-tb bg-grad">
                <div class="container">
                    <h2 class="section-title text-center mb-5">
                        <span class="section-heighlight" >Our Features</span>
                    </h2>
                    <div class="social-card-wrapper">
                        <div class="social-media-card">
                            <div class="social-media-logo">
                                <img src={compliance} alt="GIGW Compliance" title="GIGW Compliance" class="img-fluid" />
                            </div>
                            <div class="about-social-media">
                                <div class="followers-count">Secure Website</div>
                                <div class="sub-text">Built with best practices for security, ensuring safe and reliable user experience</div>
                            </div>
                        </div>
                        <div class="social-media-card">
                            <div class="social-media-logo">
                                <img src={technology} alt="Unified Open Source Technology" title="Unified Open Source Technology" class="img-fluid" />
                            </div>
                            <div class="about-social-media">
                                <div class="followers-count">Unified Open Source Technology
                                </div>
                                <div class="sub-text">Complete SaaS solution, built upon
                                    cutting edge Open Source technology stacks</div>
                            </div>
                        </div>
                        <div class="social-media-card">
                            <div class="social-media-logo">
                                <img src={search} alt="Search" title="Search" class="img-fluid" />
                            </div>
                            <div class="about-social-media">
                                <div class="followers-count">Search</div>
                                <div class="sub-text">Integrated search to enable easy
                                    discoverability of content</div>
                            </div>
                        </div>
                        <div class="social-media-card">
                            <div class="social-media-logo">
                                <img src={responsive} alt="Responsive Design" title="Responsive Design" class="img-fluid" />
                            </div>
                            <div class="about-social-media">
                                <div class="followers-count">Responsive Design</div>
                                <div class="sub-text">Easily accessible through Smart
                                    Phones, Tablets and Desktop PC</div>
                            </div>
                        </div>
                        <div class="social-media-card">
                            <div class="social-media-logo">
                                <img src={web} alt="Templates" title="Templates" class="img-fluid" />
                            </div>
                            <div class="about-social-media">
                                <div class="followers-count">Templates</div>
                                <div class="sub-text">Easily configurable templats for
                                    visually exclusive presentation</div>
                            </div>
                        </div>
                        <div class="social-media-card">
                            <div class="social-media-logo">
                                <img src={workstation} alt="Infrastructure Included" title="Infrastructure Included" class="img-fluid" />
                            </div>
                            <div class="about-social-media">
                                <div class="followers-count">Infrastructure Included</div>
                                <div class="sub-text">A framework that expects compute,
                                    storage and networking to be provisioned</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-tb full-section">
                <div class="container-fluid">
                    <h2 class="section-title text-center mb-5">
                        <span class="section-heighlight">Creating a Website through aktechhub</span>
                    </h2>
                    <div class="fullcontent-cards">
                        <div class="bg-cards">
                            <div class="fc-card-img">
                                <img src={login} alt="Login at S3WaaS" title="Login at S3WaaS" class="img-fluid" />
                            </div>
                            <h3 class="fc-card-ttl">01 Login at aktechhub</h3>
                            <p class="fc-card-content">Login with official email address</p>
                        </div>
                        <div class="bg-cards">
                            <div class="fc-card-img">
                                <img src={Themes} alt="Choose Template" title="Choose Template" class="img-fluid" />
                            </div>
                            <h3 class="fc-card-ttl">02 Choose Template</h3>
                            <p class="fc-card-content">Select template for your feature
                                requirement</p>
                        </div>
                        <div class="bg-cards">
                            <div class="fc-card-img">
                                <img src={Add_details} alt="Add Website Details" title="Add Website Details" class="img-fluid" />
                            </div>
                            <h3 class="fc-card-ttl">03 Add Website Details</h3>
                            <p class="fc-card-content">Provide the Website Details,
                                Technical Owner Details and Site Owner Details</p>
                        </div>
                        <div class="bg-cards">
                            <div class="fc-card-img">
                                <img src={Add_details} alt="Customize Site" title="Customize Site" class="img-fluid" />
                            </div>
                            <h3 class="fc-card-ttl">04 Customize Site</h3>
                            <p class="fc-card-content">Add/Edit features, text, images,
                                video &amp; more</p>
                        </div>
                        <div class="bg-cards">
                            <div class="fc-card-img">
                                <img src={Add_details} alt="Make Site Live" title="Make Site Live" class="img-fluid" />
                            </div>
                            <h3 class="fc-card-ttl">05 Make Site Live</h3>
                            <p class="fc-card-content">Get your site live and share it with
                                the public</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-tb bg-grad">
                <div class="container">
                    <h2 class="section-title text-center mb-5">
                        <span class="section-heighlight">Templates</span>
                    </h2>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="temp-card">
                                <div class="temp-img-wrapper">
                                    <img class="img-fluid" alt="" title="" src={ayush_temp1} />
                                </div>
                                <a class="exp-btn" href="https://angelschoolvyara.in/" target="_blank" title="Explore more">
                                    <span class="button-box">
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="temp-card">
                                <div class="temp-img-wrapper">
                                    <img class="img-fluid" alt="" title="" src={ayush_temp2} />
                                </div>
                                <a class="exp-btn" href="https://myibaworld.com/" target="_blank" title="Explore more">
                                    <span class="button-box">
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="temp-card">
                                <div class="temp-img-wrapper">
                                    <img class="img-fluid" alt="" title="" src={ayush_temp3} />
                                </div>
                                <a class="exp-btn" href="https://radar-template.webflow.io/home/01" target="_blank" title="Explore more">
                                    <span class="button-box">
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="temp-card">
                                <div class="temp-img-wrapper">
                                    <img class="img-fluid" alt="" title="" src={ayush_temp4} />
                                </div>
                                <a class="exp-btn" href="https://avenor.webflow.io/home-three" target="_blank" title="Explore more">
                                    <span class="button-box">
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                                            </svg>
                                        </span>
                                        <span class="button-elem">
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