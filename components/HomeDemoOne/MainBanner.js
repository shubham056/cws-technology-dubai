import React, { useState, useEffect } from "react"
import Link from 'next/link';
import Typed from 'react-typed';

const MainBanner = ({ bannerData }) => {

    return (
        <>
            <div className="main-banner-area" style={{
                backgroundImage: `url("${bannerData.data.attributes.banner.data.attributes.url}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 600
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="main-banner-content">
                                {/* <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                    <div className="tag">
                                        <img src="/images/favicon.ico" width={25} alt="image" />
                                        # {bannerData.data.attributes.hashtag}
                                    </div>
                                </ScrollAnimation> */}

                                {/* <div className="tag">
                                    <img src="/images/favicon.ico" width={25} alt="image" />
                                    {bannerData.data.attributes.hashtag}
                                </div> */}

                                <p style={{ color: '#fff', fontSize: 30 }}>{bannerData.data.attributes.hashtag}</p>

                                <h1 style={{ color: '#fff' }}>{bannerData.data.attributes.heading}</h1>

                                 <Typed strings={[ `${bannerData.data.attributes.description}`]} typeSpeed={145}  className="type"/>

                                {/* <ScrollAnimation animateIn="fadeInLeft" delay={150} animateOnce={true}>
                                    <p style={{ color: '#fff' }}>{bannerData.data.attributes.description}</p>
                                </ScrollAnimation> */}

                                {/* <div className="banner-btn">
                                    <ScrollAnimation animateIn="fadeInRight" delay={200} animateOnce={true}>
                                        <Link href="/about-us">
                                            <a className="default-btn">
                                                Read More <i className="ri-arrow-right-line"></i><span></span>
                                            </a>
                                        </Link>
                                    </ScrollAnimation>
                                </div> */}
                            </div>
                        </div>


                    </div>
                </div>

                {/* Shape Images */}
                {/* <div className="main-banner-shape-1">
                    <img src="/images/main-banner/banner-one/shape-1.png" alt="image" />
                </div>
                <div className="main-banner-shape-2">
                    <img src="/images/main-banner/banner-one/shape-2.png" alt="image" />
                </div> */}
                <div className="main-banner-shape-3">
                    <img src="/images/main-banner/banner-one/shape-3.png" alt="image" />
                </div>
                <div className="main-banner-shape-4">
                    <img src="/images/main-banner/banner-one/shape-4.png" alt="image" />
                </div>
            </div>

            {/* Main Banner Style */}
            <style jsx>{`
            
                .main-banner-area {
                    padding-top: 100px !important;
                    padding-bottom: 175px;
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .main-banner-content .tag {
                    display: inline-block;
                    background-color: #F4F8FC;
                    padding: 12px 25px 12px 55px;
                    border-radius: 50px;
                    font-size: 14px;
                    font-weight: 500;
                    position: relative;
                }
                .main-banner-content .tag img {
                    position: absolute;
                    left: 25px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                }
                .main-banner-content h1 {
                    font-size: 60px;
                    margin-top: 30px;
                    margin-bottom: 20px;
                    font-weight: bold;
                }
                .main-banner-content p {
                    margin-bottom: 0;
                    font-size: 40px !important;
                    line-height: 50px;
                }
                .main-banner-content .banner-btn {
                    margin-top: 30px;
                }

                // Main banner animation image
                .main-banner-animation-image {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                .main-banner-animation-image div {
                    position: absolute;
                }
                .main-banner-animation-image div:nth-child(1) {
                    left: 0;
                    top: 0;
                }
                .main-banner-animation-image div:nth-child(2) {
                    left: 90px;
                    top: 220px;
                    z-index: 1;
                }
                .main-banner-animation-image div:nth-child(3) {
                    left: 0;
                    top: 220px;
                }
                .main-banner-animation-image div:nth-child(4) {
                    left: 45px;
                    bottom: 110px;
                    z-index: 1;
                }
                .main-banner-animation-image div:nth-child(5) {
                    left: 55px;
                    bottom: 140px;
                    z-index: 1;
                }
                .main-banner-animation-image div:nth-child(6) {
                    left: 160px;
                    top: 115px;
                }
                .main-banner-animation-image div:nth-child(7) {
                    bottom: -120px;
                    left: 295px;
                }
                .main-banner-animation-image div:nth-child(8) {
                    top: 0;
                    left: 280px;
                }
                .main-banner-animation-image div:nth-child(9) {
                    z-index: -1;
                    right: 0;
                    top: -145px;
                }
                .main-banner-animation-image div:nth-child(10) {
                    z-index: -1;
                    right: 0;
                    top: 225px;
                }
                .main-banner-animation-image div:nth-child(11) {
                    right: 200px;
                    top: 0;
                }
                .main-banner-animation-image div:nth-child(12) {
                    right: 0;
                    bottom: -35px;
                }
                .main-banner-animation-image div:nth-child(13) {
                    right: 0;
                    top: -110px;
                    z-index: -1;
                }
                .main-banner-animation-image div:nth-child(14) {
                    right: 0;
                }
                .main-banner-animation-image div:nth-child(15) {
                    right: 300px;
                    top: -120px;
                    z-index: -1;
                }
                .main-banner-animation-image div:last-child {
                    display: none;
                }
                
                // shape
                .main-banner-shape-1 {
                    position: absolute;
                    top: 10%;
                    left: 35%;
                    -webkit-transform: translateY(-10%) translateX(-35%);
                            transform: translateY(-10%) translateX(-35%);
                     
                }
                .main-banner-shape-2 {
                    position: absolute;
                    bottom: 20%;
                    left: 35%;
                    -webkit-transform: translateY(-20%) translateX(-35%);
                            transform: translateY(-20%) translateX(-35%);
                    
                }
                .main-banner-shape-3 {
                    position: absolute;
                    bottom: 5%;
                    left: 50%;
                    -webkit-transform: translateY(-5%) translateX(-50%);
                            transform: translateY(-5%) translateX(-50%);
                }
                .main-banner-shape-4 {
                    position: absolute;
                    bottom: 10%;
                    left: 50%;
                    -webkit-transform: translateY(-10%) translateX(-50%);
                            transform: translateY(-10%) translateX(-50%);
                }
                .main-banner-shape-5 {
                    position: absolute;
                    top: 20%;
                    left: 35%;
                    -webkit-transform: translateY(-20%) translateX(-35%);
                            transform: translateY(-20%) translateX(-35%);
                }
                .main-banner-shape-6 {
                    position: absolute;
                    top: 25%;
                    left: 40%;
                    -webkit-transform: translateY(-25%) translateX(-40%);
                            transform: translateY(-25%) translateX(-40%);
                }
                .main-banner-shape-7 {
                    position: absolute;
                    top: 20%;
                    right: 15%;
                    -webkit-transform: translateY(-20%) translateX(-15%);
                            transform: translateY(-20%) translateX(-15%);
                }
                .main-banner-shape-8 {
                    position: absolute;
                    bottom: 20%;
                    left: 38%;
                    -webkit-transform: translateY(-20%) translateX(-38%);
                            transform: translateY(-20%) translateX(-38%);
                }
 
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .type {
                        font-size: 22px !important;
	                    margin-top: 0 !important;
                    }
                    .main-banner-content p {
                        font-size: 20px !important;
	                    line-height: 27px;
                    }
                    .main-banner-area {
                        padding-top: 20px !important;
                        padding-bottom: 20px;
                        position: relative;
                        z-index: 1;
                        overflow: hidden;
                        -webkit-background-size: 100% !important;
                        -moz-background-size: 100% !important;
                        -o-background-size: 100% !important;
                        background-size: 100% !important;
                        height: auto !important;
                        background-position: bottom !important;
                        background-color: #01144b;
                        background-image: none !important;
                    }
                    .main-banner-content {
                        text-align: center;
                    }
                    .main-banner-content h1 {
                        font-size: 22px;
                        margin-bottom: 0;
                        margin-top: 10px;
                    }

                    .main-banner-animation-image {
                        margin-top: 35px;
                        text-align: center;
                    }
                    .main-banner-animation-image div {
                        position: relative;
                    }
                    .main-banner-animation-image div:nth-child(1) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(2) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(3) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(4) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(5) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(6) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(7) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(8) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(9) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(10) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(11) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(12) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(13) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(14) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(15) {
                        display: none;
                    }
                    .main-banner-animation-image div:last-child {
                        display: block;
                    }
                    .main-banner-shape-1 {
                        display: none;
                    }
                    .main-banner-shape-2 {
                        display: none;
                    }
                    .main-banner-shape-3 {
                        display: none;
                    }
                    .main-banner-shape-4 {
                        display: none;
                    }
                    .main-banner-shape-5 {
                        display: none;
                    }
                    .main-banner-shape-6 {
                        display: none;
                    }
                    .main-banner-shape-7 {
                        display: none;
                    }
                    .main-banner-shape-8 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .main-banner-area {
                        padding-top: 20px !important;
                        padding-bottom: 0;
                        height: 320px !important;
                        background-position: center;
                        background-size: 100% !important;
                    }
                    .main-banner-content {
                        text-align: center;
                    }
                    .main-banner-content h1 {
                        font-size: 30px;
	                    margin-top: 10px;
                    }
                    .main-banner-content p {
                        font-size: 22px !important;
                    }
                    .main-banner-animation-image {
                        margin-top: 45px;
                        text-align: center;
                    }
                    .main-banner-animation-image div {
                        position: relative;
                    }
                    .main-banner-animation-image div:nth-child(1) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(2) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(3) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(4) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(5) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(6) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(7) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(8) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(9) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(10) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(11) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(12) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(13) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(14) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(15) {
                        display: none;
                    }
                    .main-banner-animation-image div:last-child {
                        display: block;
                    }
                    .main-banner-shape-1 {
                        display: none;
                    }
                    .main-banner-shape-2 {
                        display: none;
                    }
                    .main-banner-shape-3 {
                        display: none;
                    }
                    .main-banner-shape-4 {
                        display: none;
                    }
                    .main-banner-shape-5 {
                        display: none;
                    }
                    .main-banner-shape-6 {
                        display: none;
                    }
                    .main-banner-shape-7 {
                        display: none;
                    }
                    .main-banner-shape-8 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .main-banner-area {
                        padding-top: 100px;
                        padding-bottom: 100px;
                    }
                    .main-banner-content h1 {
                        font-size: 35px;
                    }
                    .main-banner-content p {
                        font-size: 15px;
                    }
                    .main-banner-animation-image {
                        text-align: center;
                    }
                    .main-banner-animation-image div {
                        position: relative;
                    }
                    .main-banner-animation-image div:nth-child(1) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(2) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(3) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(4) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(5) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(6) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(7) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(8) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(9) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(10) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(11) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(12) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(13) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(14) {
                        display: none;
                    }
                    .main-banner-animation-image div:nth-child(15) {
                        display: none;
                    }
                    .main-banner-animation-image div:last-child {
                        display: block;
                    }
                }

                @media only screen and (min-width: 1200px) and (max-width: 1399px) {
                    .main-banner-area {
                        padding-top: 260px;
                        padding-bottom: 260px;
                    }
                    .main-banner-content h1 {
                        font-size: 45px;
                    }
                    .main-banner-content p {
                        font-size: 15px;
                    }
                    .main-banner-animation-image div:nth-child(4) {
                        bottom: 55px;
                    }
                    .main-banner-animation-image div:nth-child(5) {
                        bottom: 80px;
                    }
                    .main-banner-animation-image div:nth-child(7) {
                        bottom: -170px;
                    }
                    .main-banner-animation-image div:nth-child(8) {
                        top: -60px;
                        left: 170px;
                    }
                    .main-banner-animation-image div:nth-child(9) {
                        top: -200px;
                    }
                    .main-banner-animation-image div:nth-child(10) {
                        top: 140px;
                    }
                    .main-banner-animation-image div:nth-child(11) {
                        right: 190px;
                        top: -146px;
                    }
                    .main-banner-animation-image div:nth-child(12) {
                        right: 0;
                        bottom: -5px;
                    }
                    .main-banner-animation-image div:nth-child(13) {
                        top: -180px;
                    }
                }

                @media only screen and (min-width: 1600px) {
                    .main-banner-area {
                        padding-top: 220px;
                        padding-bottom: 220px;
                    }
                }
            `}</style>
        </>
    )
}

export default MainBanner;