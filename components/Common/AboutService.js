import React from 'react';
import Link from 'next/link';
import assetsURL from '../../utils/assetsURL';


const AboutService = ({ feature }) => {

    return (
        <>
            <div className="col-lg-4 col-md-6" key={feature.id}>
                <div className="single-features-box">
                    <Link href="/services-details">
                        <a>
                            <img src={`${assetsURL}${feature.image}`} alt={feature.heading} />
                        </a>
                    </Link>

                    <h3>
                        <Link href="/services-details">
                            <a>{feature.heading}</a>
                        </Link>
                    </h3>
                    <div>{feature.description}</div>
                </div>
            </div>

            {/* Features Card Style */}
            <style jsx>{`
                .single-features-box {
                    text-align: center;
                    margin-bottom: 30px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border: 1px solid #E6EDF6;
                    padding: 35px 22px;
                    position: relative;
                    z-index: 1;
                    border-radius: 5px;
                    overflow: hidden;
                }
                .single-features-box::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 0;
                    background: var(--main-gradient-color);
                    z-index: -1;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border-radius: 5px;
                }
                .single-features-box img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features-box h3 {
                    font-size: 25px;
                    margin-top: 30px;
                    margin-bottom: 15px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features-box h3 a {
                    color: var(--black-color);
                }
                .single-features-box p {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-features-box:hover::before {
                    height: 100%;
                }
                .single-features-box:hover h3 a {
                    color: var(--white-color);
                }
                .single-features-box:hover p {
                    color: var(--white-color);
                }

	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-features-box h3 {
                        font-size: 20px;
                    }
                    .single-features-box {
                        padding: 35px 15px;
                    }
                    .features-shape-1, .features-shape-2, .features-shape-3, .features-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-features-box {
                        padding: 35px 15px;
                    }
                    .single-features-box h3 {
                        font-size: 22px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-features-box {
                        padding: 25px 14px;
                    }
                    .single-features-box h3 {
                        font-size: 20px;
                    }
                }
                
            `}</style>
        </>
    )
}

export default AboutService;

