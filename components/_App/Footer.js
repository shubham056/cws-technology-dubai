import React, { useState } from 'react';
import Link from 'next/link';
import baseUrl from '../../utils/baseUrl'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CookieConsent from "react-cookie-consent";
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Newsletter successfully subscribe',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}


const Footer = ({ contactUsInfo }) => {
    const currentYear = new Date().getFullYear();
    const [loading, setLoading] = useState(false);
    const [newsletter, setnewsletter] = useState("");

    const handleChange = e => {
        const { name, value } = e.target;
        setnewsletter(value);
    }

    // console.log("after", newsletter)

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true)
        try {
            if (newsletter != '') {
                axios({
                    method: "post",
                    url: `${baseUrl}/api/newsletters`,
                    data: {
                        "data": {
                            'email': newsletter
                        }
                    },
                })
                    .then(response => {
                        //console.log(response);
                        if (response.status == 200) {
                            setnewsletter("")
                            alertContent();
                            setLoading(false)
                        }

                    }).catch((error) => {
                        console.log("Error: ", error.message);
                        setLoading(false)
                    });


                // const url = `${baseUrl}/api/newsletters`;
                // const payload = { newsletter };
                // const response = await axios.post(url, payload);
                // console.log(response);
            }

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <footer className="footer-area pt-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <div className="widget-logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/images/logo.png" alt="logo.png" />
                                        </a>
                                    </Link>
                                </div>
                                <p className='white-color-text'>{contactUsInfo.data.info}</p>

                                {/* <ul className="widget-info white-color-text">
                                    <li>
                                        <i className="ri-customer-service-line"></i>
                                        <a style={{color: '#ffff'}} href={`tel:${contactUsInfo.data.phone_number}`}>{contactUsInfo.data.phone_number}</a>
                                    </li>

                                    <li>
                                        <i className="ri-global-line"></i>
                                        <a style={{ color: '#ffff' }} href={`mailto:${contactUsInfo.data.email}`}>{contactUsInfo.data.email}</a>
                                    </li>

                                    <li>
                                        <i className="ri-map-pin-line"></i>
                                        {contactUsInfo.data.address}
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <h3>Reach Us </h3>

                                <ul className="widget-info white-color-text">
                                    <li>
                                        <i className="ri-phone-line"></i>
                                        <a style={{ color: '#ffff' }} href={`tel:${contactUsInfo.data.phone_number}`}>{contactUsInfo.data.phone_number}</a>
                                    </li>

                                    <li>
                                        <i className="ri-mail-send-fill"></i>
                                        <a style={{ color: '#ffff' }} href={`mailto:${contactUsInfo.data.email}`}>{contactUsInfo.data.email}</a>
                                    </li>

                                    <li>
                                        <i className="ri-map-pin-line"></i>
                                        {contactUsInfo.data.address}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <h3>Sitemap</h3>

                                <ul className="footer-links-list">

                                    <li>
                                        <Link href="/about-us">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/careers">
                                            <a>Career</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Services</h3>

                                <ul className="footer-links-list">
                                    <li>
                                        <Link href="/services/web-development-services">
                                            <a>Web Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/mobile-application-development">
                                            <a>Mobile Application Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/e-commerce-development">
                                            <a>E-Commerce Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/it-consulting-service">
                                            <a>IT Consulting</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-12 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Newsletter</h3>

                                <div className="widget-newsletter">
                                    <div className="newsletter-content">
                                        <p>{contactUsInfo.data.newsletter}</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="newsletter-form">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            className="input-newsletter"
                                            value={newsletter}
                                            onChange={handleChange}
                                            required
                                        />


                                        <button type="submit">
                                            {
                                                (loading)
                                                    ?
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only"></span>
                                                    </div>
                                                    :
                                                    <i className="ri-send-plane-2-line"></i>
                                            }


                                        </button>
                                    </form>
                                </div>

                                <ul className="widget-social">
                                    <li>
                                        <a href={contactUsInfo.data.facebook_url} target="_blank">
                                            <i className="ri-facebook-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={contactUsInfo.data.twitter_url} target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={contactUsInfo.data.linkedin_url} target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={contactUsInfo.data.youtube_url} target="_blank">
                                            <i className="ri-youtube-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={contactUsInfo.data.google_plush_url} target="_blank">
                                            <i className="ri-map-pin-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-area-content">
                            <p>
                                Copyright © CWS Technology All Rights Reserved {currentYear}
                            </p>
                        </div>
                    </div>
                    <CookieConsent
                        //debug={true}
                        location="bottom"
                        buttonText="Accept"
                        cookieName="myAwesomeCookieName2"
                        cookieValue="accept"
                        style={{ background: "rgb(9, 54, 83)" }}
                        buttonStyle={{ color: "#fff",backgroundColor: "rgb(0, 100, 251)",borderRadius: 3, fontSize: "14px",marginRight: 80}}
                        expires={150}
                        buttonWrapperClasses="main-btn-cookie"
                        enableDeclineButton
                        declineButtonText="Decline"
                        declineCookieValue="DeclineCookie"
                        declineButtonStyle={{borderRadius: 3, fontSize: "14px", margin: 0}}
                        onAccept={(acceptedByScrolling) => {
                            if (acceptedByScrolling) {
                              // triggered if user scrolls past threshold
                              //alert("Accept was triggered by user scrolling");
                            } else {
                              //alert("Accept was triggered by clicking the Accept button");
                            }
                          }}
                          onDecline={() => {
                            //alert("nay!");
                            //setDeclineCookie(true)
                          }}                   
                        
                    >
                        This website uses cookies to enhance the user experience.
                        
                    </CookieConsent>
                </div>

                {/* Shape Images */}
                <div className="footer-shape-1">
                    <img src="/images/footer/shape-1.png" alt="shape-1.png" />
                </div>
                <div className="footer-shape-2">
                    <img src="/images/footer/shape-2.png" alt="shape-2.png" />
                </div>
                <div className="footer-shape-3">
                    <img src="/images/footer/shape-3.png" alt="shape-3.png" />
                </div>
                <div className="footer-shape-4">
                    <img src="/images/footer/shape-4.png" alt="shape-4.png" />
                </div>
                <div className="footer-shape-5">
                    <img src="/images/footer/shape-5.png" alt="shape-5.png" />
                </div>
            </footer>

            {/* Footer Style */}
            <style jsx>{`
                .white-color-text {
                    color : var(--custom--white-color);
                }
                .footer-area {
                    // background-color: #F4F8FC;
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                    background : linear-gradient(96.87deg,#eb5353f0,#006fff)
                }
                .single-footer-widget {
                    margin-bottom: 30px;
                }
                .single-footer-widget .widget-logo {
                    margin-bottom: 25px;
                }
                .single-footer-widget p {
                    margin-bottom: 0;
                }
                .single-footer-widget .widget-info {
                    padding-left: 0;
                    margin-top: 20px;
                    margin-bottom: 0;
                }
                .single-footer-widget .widget-info li {
                    list-style-type: none;
                    margin-bottom: 15px;
                    position: relative;
                    padding-left: 22px;
                }
                .single-footer-widget .widget-info li i {
                    position: absolute;
                    left: 0;
                    top: 4px;
                    color: var(--main-color);
                }
                .single-footer-widget .widget-info li .ri-global-line {
                    color: #FF414B;
                }
                .single-footer-widget .widget-info li .ri-map-pin-line {
                    color: #36CC72;
                }
                .single-footer-widget .widget-info li:last-child {
                    margin-bottom: 0;
                }
                .single-footer-widget h3 {
                    margin-bottom: 25px;
                    font-size: 22px;
                    color: var(--custom--white-color);
                }
                .single-footer-widget .footer-links-list {
                    padding-left: 0;
                    margin-bottom: 0;
                    list-style-type: none;
                }
                .single-footer-widget .footer-links-list li {
                    margin-bottom: 10px;
                }
                .single-footer-widget .footer-links-list li a {
                    color: var(--custom--white-color);
                    display: inline-block;
                }
                .single-footer-widget .footer-links-list li a:hover {
                    color: var(--custom--active-color);
                    letter-spacing: 1px;
                }
                .single-footer-widget .footer-links-list li:last-child {
                    margin-bottom: 0;
                }
                .single-footer-widget .widget-newsletter .newsletter-content {
                    margin-bottom: 20px;
                }
                .single-footer-widget .widget-newsletter .newsletter-content p {
                    font-size: var(--font-size);
                    margin-bottom: 0;
                    color: var(--custom--white-color);
                }
                .single-footer-widget .widget-newsletter .newsletter-form {
                    margin-top: 30px;
                    position: relative;
                }
                .single-footer-widget .widget-newsletter .newsletter-form .input-newsletter {
                        display: block;
                        width: 100%;
                        background-color: var(--white-color);
                        border: 1px solid var(--main-color);
                        height: 60px;
                        padding: 15px;
                        border-radius: 5px;
                        outline: 0;
                        color: var(--black-color);
                }
                .single-footer-widget .widget-newsletter .newsletter-form .input-newsletter:focus::-webkit-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                
                .single-footer-widget .widget-newsletter .newsletter-form .input-newsletter:focus:-ms-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-footer-widget .widget-newsletter .newsletter-form .input-newsletter:focus::-ms-input-placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-footer-widget .widget-newsletter .newsletter-form .input-newsletter:focus::placeholder {
                    color: transparent;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-footer-widget .widget-newsletter .newsletter-form button {
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 60px;
                    width: 70px;
                    line-height: 65px;
                    background-color: var(--main-color);
                    border: none;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--white-color);
                    border-radius: 0 5px 5px 0;
                    font-size: 25px;
                }
                .single-footer-widget .widget-newsletter .newsletter-form button:hover, .single-footer-widget .widget-newsletter .newsletter-form button:focus {
                    background-color: var(--optional-color);
                    color: var(--white-color);
                }
                .single-footer-widget .widget-newsletter .newsletter-form #validator-newsletter {
                    color: red;
                    margin-top: 10px;
                    font-weight: 400;
                    font-size: 15px;
                }
                .single-footer-widget .widget-social {
                    padding-left: 0;
                    margin-bottom: 0;
                    margin-top: 30px;
                }
                .single-footer-widget .widget-social li {
                    display: inline-block;
                    list-style-type: none;
                    margin-bottom: 0;
                    margin-right: 10px;
                }
                .single-footer-widget .widget-social li:last-child {
                    margin-right: 0;
                }
                
                .single-footer-widget .widget-social li i {
                    display: inline-block;
                    height: 30px;
                    width: 30px;
                    line-height: 30px;
                    background-color: var(--white-color);
                    color: var(--main-color);
                    -webkit-box-shadow: 0px 15px 35px rgba(0,0,0,.1);
                    -webkit-box-shadow: 0px 15px 35px rgba(0,0,0,.1);
                    -moz-box-shadow: 0px 15px 35px rgba(0,0,0,.1);
                    box-shadow: 0px 15px 35px rgba(0,0,0,.1);
                    -webkit-border-radius: 50px;
                    -moz-border-radius: 50px;
                    border-radius: 50px;
                    text-align: center;
                    font-size: 18px;
                    -webkit-transition: var(--transition);
                    -webkit-transition: var(--transition);
                    -moz-transition: var(--transition);
                    -o-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-footer-widget .widget-social li i:hover {
                    background-color: var(--main-color);
                    color: var(--white-color);
                    -webkit-transform: translateY(-5px);
                            transform: translateY(-5px);
                }

                // Shape Images
                .footer-shape-1 {
                    position: absolute;
                    top: 40%;
                    left: 5%;
                    -webkit-transform: translateY(-40%) translateX(-5%);
                            transform: translateY(-40%) translateX(-5%);
                    z-index: -1;
                    opacity: 50%;
                }
                .footer-shape-2 {
                    position: absolute;
                    top: 45%;
                    left: 10%;
                    -webkit-transform: translateY(-45%) translateX(-10%);
                            transform: translateY(-45%) translateX(-10%);
                    z-index: -1;
                    opacity: 50%;
                }
                .footer-shape-3 {
                    position: absolute;
                    bottom: 25%;
                    left: 40%;
                    -webkit-transform: translateY(-25%) translateX(-40%);
                            transform: translateY(-25%) translateX(-40%);
                    z-index: -1;
                }
                .footer-shape-4 {
                    position: absolute;
                    bottom: 23%;
                    right: 20%;
                    -webkit-transform: translateY(-23%) translateX(-23%);
                            transform: translateY(-23%) translateX(-23%);
                    z-index: -1;
                }
                .footer-shape-5 {
                    position: absolute;
                    top: 10%;
                    right: 5%;
                    -webkit-transform: translateY(-10%) translateX(-5%);
                            transform: translateY(-10%) translateX(-5%);
                    z-index: -1;
                }

                // copyright-area
                .copyright-area {
                    margin-top: 70px;
                    padding-bottom: 35px;
                }
                .copyright-area .copyright-area-content {
                    text-align: center;
                    background-color: var(--white-color);
                    padding: 30px;
                    border-radius: 5px;
                }
                .copyright-area .copyright-area-content p a {
                    display: inline-block;
                    font-weight: 600;
                    color: var(--main-color);
                }
                .copyright-area .copyright-area-content p a:hover {
                    color: var(--optional-color);
                }

                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .main-btn-cookie{
                        margin-left: 115px !important;
                    }
                    .single-footer-widget h3 {
                        margin-bottom: 15px;
                    }
                    .footer-shape-1 {
                        display: none;
                    }
                    .footer-shape-2 {
                        display: none;
                    }
                    .footer-shape-3 {
                        display: none;
                    }
                    .footer-shape-4 {
                        display: none;
                    }
                    .footer-shape-5 {
                        display: none;
                    }
                    .copyright-area {
                        margin-top: 20px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .main-btn-cookie{
                        margin-left: 115px !important;
                    }
                    .footer-shape-1 {
                        display: none;
                    }
                    .footer-shape-2 {
                        display: none;
                    }
                    .footer-shape-3 {
                        display: none;
                    }
                    .footer-shape-4 {
                        display: none;
                    }
                    .footer-shape-5 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .main-btn-cookie{
                        margin-left: 115px !important;
                    }
                    .single-footer-widget p {
                        margin-bottom: 0;
                        font-size: 15px;
                    }
                    .single-footer-widget .widget-info li {
                        font-size: 15px;
                    }
                    .single-footer-widget .footer-links-list li {
                        font-size: 15px;
                    }
                    .single-footer-widget .widget-newsletter .newsletter-content p {
                        font-size: 15px;
                    }

                    .footer-shape-1 {
                        display: none;
                    }
                    .footer-shape-2 {
                        display: none;
                    }
                    .footer-shape-3 {
                        display: none;
                    }
                    .footer-shape-4 {
                        display: none;
                    }
                    .footer-shape-5 {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}

export default Footer;