import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import assetsURL from '../../utils/assetsURL';

const SingleCaseStudy = ({ portfolio, categories }) => {

    return (
        <>
            <div className="col-md-6 single-cases">
                <div className="cases-image">
                    <Link href="/">
                        <a>
                            <Image width={750} height={473}
                                src={(portfolio.image != undefined) ? `${assetsURL}${portfolio.image}` : "https://ozen-react.envytheme.com/images/blog/blog-large-1.jpg"} 
                                alt={portfolio.title} 
                            />
                        </a>
                    </Link>
                </div>

                <div className="cases-content">
                    {/* <div className="tags">
                        <Link href="/">
                            <a>
                                {(categories.length > 0) ? categories.map((item) => item.attributes.name).join(", ") : null}
                            </a>
                        </Link>
                       
                    </div> */}

                    <h3>
                        <Link href="/">
                            <a>{portfolio.title}</a>
                        </Link>
                    </h3>
                    <p>{portfolio.description}</p>
                </div>
            </div>

            {/* Recent Case Study Style */ }
    <style jsx>{`
                .cases-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .single-cases {
                    margin-bottom: 30px;
                }
                .single-cases .cases-image {
                    overflow: hidden;
                }
                .single-cases .cases-image img {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-cases .cases-content {
                    margin-top: 30px;
                }
                .single-cases .cases-content .tags a {
                    color: var(--main-color);
                    padding: 5px 15px;
                    display: inline-block;
                    background-color: #EAF0FF;
                    font-size: 14px;
                    font-weight: 500;
                    border-radius: 5px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    margin-right: 15px;
                }
                .single-cases .cases-content .tags a:last-child {
                    margin-right: 0;
                }
                .single-cases .cases-content .tags a:hover {
                    background-color: var(--main-color);
                    color: var(--white-color);
                }
                .single-cases .cases-content h3 {
                    font-size: 25px;
                    margin-top: 25px;
                    margin-bottom: 15px;
                }
                .single-cases .cases-content h3 a {
                    position: relative;
                }
                .single-cases .cases-content h3 a::before {
                    content: "";
                    position: absolute;
                    width: 0%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    border-bottom: 1px solid var(--main-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    z-index: -1;
                }
                .single-cases:hover .cases-image img {
                    -webkit-transform: scale(1.1);
                            transform: scale(1.1);
                }
                .single-cases:hover .cases-content h3 a {
                    color: var(--main-color);
                }
                .single-cases:hover .cases-content h3 a::before {
                    width: 100%;
                }
                
                // Cases View Button
                .cases-view-all-btn {
                    text-align: center;
                    margin-top: 15px;
                }
                .cases-view-all-btn .default-btn {
                    color: var(--white-color);
                    background-color: var(--optional-color);
                }
                .cases-view-all-btn .default-btn span {
                    background-color: var(--main-color);
                }
                .cases-view-all-btn .default-btn:hover {
                    color: var(--white-color);
                }

                // shape
                .cases-shape-1 {
                    position: absolute;
                    top: 5%;
                    right: 18%;
                    -webkit-transform: translateY(-5%) translateX(-18%);
                            transform: translateY(-5%) translateX(-18%);
                }
                .cases-shape-2 {
                    position: absolute;
                    bottom: 8%;
                    right: 12%;
                    -webkit-transform: translateY(-8%) translateX(-12%);
                            transform: translateY(-8%) translateX(-12%);
                }
                .cases-shape-3 {
                    position: absolute;
                    top: 45%;
                    right: 0;
                    -webkit-transform: translateY(-45%);
                            transform: translateY(-45%);
                }
                .cases-shape-4 {
                    position: absolute;
                    top: 45%;
                    left: 2%;
                    -webkit-transform: translateY(-45%) translateX(-2%);
                            transform: translateY(-45%) translateX(-2%);
                    z-index: -1;
                }
                .cases-shape-5 {
                    position: absolute;
                    top: 48%;
                    left: 2%;
                    -webkit-transform: translateY(-48%) translateX(-2%);
                            transform: translateY(-48%) translateX(-2%);
                    z-index: -1;
                }
                .cases-shape-6 {
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    -webkit-transform: translateY(-45%) translateX(-50%);
                            transform: translateY(-45%) translateX(-50%);
                    z-index: -1;
                    opacity: 35%;
                }
                .cases-shape-7 {
                    position: absolute;
                    top: 46%;
                    left: 52%;
                    -webkit-transform: translateY(-46%) translateX(-52%);
                            transform: translateY(-46%) translateX(-52%);
                    z-index: -1;
                    opacity: 35%;
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-cases .cases-content h3 {
                        font-size: 22px;
                        margin-top: 20px;
                        margin-bottom: 10px;
                        line-height: 1.4;
                    }
                    .cases-shape-1 {
                        display: none;
                    }
                    .cases-shape-2 {
                        display: none;
                    }
                    .cases-shape-3 {
                        display: none;
                    }
                    .cases-shape-4 {
                        display: none;
                    }
                    .cases-shape-5 {
                        display: none;
                    }
                    .cases-shape-6 {
                        display: none;
                    }
                    .cases-shape-7 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .cases-shape-1 {
                        display: none;
                    }
                    .cases-shape-2 {
                        display: none;
                    }
                    .cases-shape-3 {
                        display: none;
                    }
                    .cases-shape-4 {
                        display: none;
                    }
                    .cases-shape-5 {
                        display: none;
                    }
                    .cases-shape-6 {
                        display: none;
                    }
                    .cases-shape-7 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-cases .cases-content h3 {
                        font-size: 23px;
                        margin-bottom: 15px;
                    }
                    .cases-shape-1 {
                        display: none;
                    }
                    .cases-shape-2 {
                        display: none;
                    }
                    .cases-shape-3 {
                        display: none;
                    }
                    .cases-shape-4 {
                        display: none;
                    }
                    .cases-shape-5 {
                        display: none;
                    }
                    .cases-shape-6 {
                        display: none;
                    }
                    .cases-shape-7 {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}

export default SingleCaseStudy;