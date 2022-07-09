import React from 'react';
import Link from 'next/link';


const Service = ({ feature }) => {

    return (
        <>
            <div className="col-lg-4 col-md-6" key={feature.id}>
                <div className="single-features" >
                    <Link href="/about-us">
                        <a><img src={feature.image.data.attributes.url} alt={feature.name} /></a>
                    </Link>

                    <h3>
                        <Link href="/about-us">
                            <a>{feature.heading}</a>
                        </Link>
                    </h3>
                    <div>{feature.description}</div>

                    <div className="features-btn">
                        <Link href="/about-us">
                            <a className="default-btn">
                                Read More
                                <i className="ri-arrow-right-line"></i>
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Card Style */}
            <style jsx>{`
                .single-features {
                    text-align: center;
                    margin-bottom: 30px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features h3 {
                    font-size: 25px;
                    margin-top: 30px;
                    margin-bottom: 15px;
                }
                .single-features h3 a {
                    color: var(--black-color);
                }
                .single-features h3 a:hover {
                    color: var(--main-color);
                }
                .single-features p {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features .features-btn {
                    margin-top: 25px;
                }
                .single-features .features-btn .default-btn {
                    background-color: #EAF0FF;
                    color: var(--main-color);
                }
                .single-features:hover .features-btn .default-btn {
                    background-color: var(--main-color);
                    color: var(--white-color);
                }
                .single-features:hover .features-btn .default-btn span {
                    background-color: var(--optional-color);
                }
                .features-inner-box {
                    background-color: #F4F8FC;
                    border: 1px solid #E6EDF6;
                    padding-top: 80px;
                    padding-bottom: 50px;
                    padding-left: 45px;
                    padding-right: 45px;
                    border-radius: 5px;
                }
                
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-features h3 {
                        font-size: 22px;
                    }
                    .single-features p {
                        font-size: 15px;
                    }
                    
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-features p {
                        font-size: 15px;
                    }
                    
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-features h3 {
                        font-size: 23px;
                    }
                    .single-features p {
                        font-size: 15px;
                    }
                   
                }
                
            `}</style>
        </>
    )
}

export default Service;

