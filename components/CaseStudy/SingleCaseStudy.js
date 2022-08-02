import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import assetsURL from '../../utils/assetsURL';

const SingleCaseStudy = ({ portfolio, categories }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="single-projects-box">
                    <div className="projects-image">
                        <Link href="/">
                            <a>
                            <Image width={750} height={473}
                                src={(portfolio.image != undefined) ? `${assetsURL}${portfolio.image}` : "https://ozen-react.envytheme.com/images/blog/blog-large-1.jpg"} 
                                alt={portfolio.title} 
                            />
                            </a>
                        </Link>
                    </div>

                    <div className="projects-content">
                        <h3>
                           
                            {portfolio.title}
                       
                        </h3>
                        <p>{portfolio.description}</p>

                    </div>
                </div>
            </div>


            <style jsx>{`
                .projects-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .single-projects-box {
                    margin-bottom: 30px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-projects-box .projects-image {
                    overflow: hidden;
                }
                .single-projects-box .projects-image img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    display: inline-block;
                }
                .single-projects-box .projects-content {
                    margin-top: 25px;
                }
                .single-projects-box .projects-content h3 {
                    font-size: 25px;
                    margin-bottom: 15px;
                }
                .single-projects-box .projects-content h3 a {
                    color: var(--black-color);
                }
                .single-projects-box .projects-content p {
                    margin-bottom: 15px;
                }
                .single-projects-box .projects-content .projects-btn {
                    color: var(--paragraph-color);
                    position: relative;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    font-weight: 500;
                }
                .single-projects-box .projects-content .projects-btn i {
                    position: absolute;
                    right: -20px;
                    top: 58%;
                    -webkit-transform: translateY(-58%);
                            transform: translateY(-58%);
                    font-size: 14px;
                }
                .single-projects-box:hover {
                    -webkit-transform: translateY(-10px);
                            transform: translateY(-10px);
                }
                .single-projects-box:hover .projects-image img {
                    -webkit-transform: scale(1.1);
                            transform: scale(1.1);
                }
                .single-projects-box:hover .projects-content h3 a {
                    color: var(--main-color);
                }
                .single-projects-box:hover .projects-content .projects-btn {
                    letter-spacing: 1px;
                    color: var(--main-color);
                }

                // Projects shape
                .projects-shape-1 {
                    position: absolute;
                    top: 25%;
                    left: 0;
                    -webkit-transform: translateY(-25%);
                            transform: translateY(-25%);
                }
                .projects-shape-2 {
                    position: absolute;
                    top: 20%;
                    left: 30%;
                    -webkit-transform: translateY(-20%) translateX(-30%);
                            transform: translateY(-20%) translateX(-30%);
                    z-index: -1;
                }
                .projects-shape-3 {
                    position: absolute;
                    top: 10%;
                    right: 15%;
                    -webkit-transform: translateY(-10%) translateX(-15%);
                            transform: translateY(-10%) translateX(-15%);
                }
                .projects-shape-4 {
                    position: absolute;
                    bottom: 15%;
                    right: 15%;
                    -webkit-transform: translateY(-15%) translateX(-15%);
                            transform: translateY(-15%) translateX(-15%);
                }
                .projects-shape-5 {
                    position: absolute;
                    bottom: 10%;
                    right: 12%;
                    -webkit-transform: translateY(-10%) translateX(-12%);
                            transform: translateY(-10%) translateX(-12%);
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .projects-shape-1, .projects-shape-2, .projects-shape-3, .projects-shape-4, .projects-shape-5 {
                        display: none;
                    }
                    .single-projects-box .projects-content h3 {
                        font-size: 21px;
                        margin-bottom: 15px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .projects-shape-1, .projects-shape-2, .projects-shape-3, .projects-shape-4, .projects-shape-5 {
                        display: none;
                    }
                    .single-projects-box .projects-content h3 {
                        font-size: 22px;
                        margin-bottom: 15px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .projects-shape-1, .projects-shape-2, .projects-shape-3, .projects-shape-4, .projects-shape-5 {
                        display: none;
                    }
                    .single-projects-box .projects-content h3 {
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </>
    )
}

export default SingleCaseStudy;