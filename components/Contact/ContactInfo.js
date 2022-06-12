import React from 'react';

const ContactInfo = ({ contactUsInfo }) => {

    return (
        <>
            <div className="contact-info-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-address">
                                <h3>Contact Address:</h3>
                                <p>{contactUsInfo.data.info}</p>

                                <ul className="address-info">
                                    {/* <li>
                                        <i className="ri-customer-service-line"></i>
                                        <a href={`tel:${contactUsInfo.data.phone_number}`}>{contactUsInfo.data.phone_number}</a>
                                    </li> */}

                                    <li>
                                        <i className="ri-global-line"></i>
                                        <a href={`mailto:${contactUsInfo.data.email}`}>{contactUsInfo.data.email}</a>
                                    </li>

                                    {/* <li>
                                        <i className="ri-map-pin-line"></i>
                                        {contactUsInfo.data.address}
                                    </li> */}
                                </ul>

                                <ul className="address-social">
                                    <li>
                                        <a href={contactUsInfo.data.facebook_url}target="_blank">
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
                                            <i className="ri-google-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div id="map">
                                <iframe src={contactUsInfo.data.google_map_embed_url_only}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-address {
                    background: #F4F8FC;
                    border: 1px solid #E6EDF6;
                    padding: 45px 35px;
                    border-radius: 5px;
                }
                
                .contact-address h3 {
                    font-size: 22px;
                    margin-bottom: 15px;
                }
                
                .contact-address p {
                    font-size: 15px;
                }
                
                .contact-address .address-info {
                    padding-left: 0;
                    margin-top: 30px;
                    margin-bottom: 0;
                }
                
                .contact-address .address-info li {
                    list-style-type: none;
                    margin-bottom: 30px;
                    font-size: 15px;
                    font-weight: 500;
                    color: #4B4B61;
                    position: relative;
                    padding-left: 40px;
                }
                
                .contact-address .address-info li a {
                    font-size: 15px;
                    font-weight: 500;
                    color: #4B4B61;
                }
                
                .contact-address .address-info li a:hover {
                    color: var(--main-color);
                }
                
                .contact-address .address-info li i {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    color: var(--main-color);
                    font-size: 30px;
                }
                
                .contact-address .address-info li .ri-global-line {
                    color: #FF414B;
                }
                
                .contact-address .address-info li .ri-map-pin-line {
                    color: #36CC72;
                }
                
                .contact-address .address-info li:last-child {
                    margin-bottom: 0;
                }
                
                .contact-address .address-social {
                    padding-left: 0;
                    margin-bottom: 0;
                    margin-top: 35px;
                    text-align: center;
                }
                
                .contact-address .address-social li {
                    display: inline-block;
                    list-style-type: none;
                    margin-bottom: 0;
                    margin-right: 10px;
                }
                
                .contact-address .address-social li:last-child {
                    margin-right: 0;
                }
                
                .contact-address .address-social li i {
                    display: inline-block;
                    height: 35px;
                    width: 35px;
                    line-height: 35px;
                    background-color: var(--white-color);
                    color: var(--main-color);
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                    border-radius: 50px;
                    text-align: center;
                    font-size: var(--font-size);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                
                .contact-address .address-social li i:hover {
                    background-color: var(--main-color);
                    color: var(--white-color);
                    -webkit-transform: translateY(-5px);
                            transform: translateY(-5px);
                }
                
                #map iframe {
                    width: 100%;
                    height: 440px;
                    border: 1px solid #E6EDF6;
                    border-radius: 5px;
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .contact-address {
                        padding: 35px 20px;
                        margin-bottom: 30px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .contact-address {
                        padding: 35px 20px;
                        margin-bottom: 30px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default ContactInfo;