import React from 'react';
import Link from 'next/link';

const HomeAboutExtraContent = () => {
    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2 className='align-center'>Top Rated Web Design & Development Company in Dubai</h2>
                        <p style={{textAlign:'justify'}}>Web solutions tailored to meet your company's needs and business goals are developed by a skilled team of web experts. You can get a wonderful design of your website made by the experts of the best <strong>web design company in Dubai.</strong></p>

                        <p style={{textAlign:'justify'}}>CWS Technology is one of the most renowned and fastest-growing website design companies in Dubai. We develop and design websites for all types of industries, such as education and e-learning, retail, social networking, etc. You will get the best website developed by the no. 1 <Link href="https://www.cwstechnology.ae/services/web-development-services"><a>web development company in Dubai</a></Link>. CWS has catered to support the growth of various web design agencies in Dubai in the past and continues to increase the numbers in the future.</p>

                        <p style={{textAlign:'justify'}}>Once we have a clear picture of the customer's business strategy, we can create a digital platform that meets their needs while staying within their budget. We work determinedly to develop tools that make it simple for you to automate your business in a fast, safe, and secure manner.</p>

                        <h2 style={{fontSize:30}}>Creative Mobile App Development Company in Dubai, UAE</h2>

                        <p style={{textAlign:'justify'}}>Get strong, feature-rich, and UI/UX-friendly mobile apps to tap into the vast Android app market. Our Android app development services in Dubai and the experience of industry-level application developers will help your company generate new records. CWS Technology is one of the famous Mobile app development companies in Dubai.</p>

                        <p style={{textAlign:'justify'}}>As there are so many options for developing mobile applications, with extensive research figure out which approach is right for your project, whether it's Flutter, React Native, or both. We create Android mobile applications and also iOS mobile applications.</p>

                        <h2 style={{fontSize:30}}>Award-Winning Techies at Your Service to Provide Customized Mobile Apps</h2>

                        <p style={{textAlign:'justify'}}>With inventive Android, iOS, and cross-platform mobile applications, you can effectively increase your business's impact beyond the target demographic. We are the best partner for your project because we have worked on mobile application development solutions for years and have access to innovations that are ready for the future.</p>

                        <p style={{textAlign:'justify'}}>CWS Technology provides end-to-end mobile app development services, including strategy, design, development, testing, and deployment. We offer end-to-end mobile application development services in many different industries, whether the app is for customers or businesses.</p>

                        <p style={{textAlign:'justify'}}>Designing a simple and user-friendly mobile app for smartphones, tablets, or both can help your organization flourish.</p>

                        <h2 style={{fontSize:30}}>Custom Software Development Company in Dubai, UAE</h2>

                        <p style={{textAlign:'justify'}}>As a prominent <strong>software development company in Dubai</strong> with more than ten years of experience, CWS Technology has a wide variety of expertise, a staff of highly qualified individuals, and an established working procedure that ensures the best results. We take your ideas and turn them into high-impact products for the future. Develop software as per your business requirements made by the custom software development company in Dubai, <strong>CWS Technology</strong>.</p>

                        <p style={{textAlign:'justify'}}>CWS Technology is one of the <strong>best web design companies in Dubai</strong>, which caters to the requirements of web development Dubai industries.</p>

                    </div>
                </div>

                {/* Shape Images */}
                <div className="services-shape-1">
                    <img src="/images/services/shape-1.png" alt="shape-1.png" />
                </div>
                <div className="services-shape-2">
                    <img src="/images/services/shape-2.png" alt="shape-2.png" />
                </div>
                <div className="services-shape-3">
                    <img src="/images/services/shape-3.png" alt="shape-3.png" />
                </div>
                <div className="services-shape-4">
                    <img src="/images/services/shape-4.png" alt="shape-4.png" />
                </div>
            </div>

            {/* Services Card Style */}
            <style jsx>{`
                .services-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .section-title p{
                    max-width: none !important;
                    padding: 10px;
                }
                .section-title .experiences-btn {
                    padding-top: 20px;
                }
                .single-services {
                    margin-bottom: 30px;
                    padding: 35px;
                    border-radius: 5px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border: 1px solid #eeeeee;
                }
                .single-services .icon {
                    margin-bottom: 25px;
                }
                .single-services .icon i {
                    display: inline-block;
                    height: 80px;
                    width: 80px;
                    line-height: 80px;
                    background-color: #E5F0FF;
                    color: var(--main-color);
                    text-align: center;
                    font-size: 45px;
                    border-radius: 5px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-services .icon.bg-36CC72 i {
                    background-color: #EBFAF1;
                    color: #36CC72;
                }
                .single-services .icon.bg-FF414B i {
                    background-color: #FFECED;
                    color: #FF414B;
                }
                .single-services .icon.bg-FF6D3D i {
                    background-color: #FFF0EC;
                    color: #FF6D3D;
                }
                .single-services .icon.bg-8932F8 i {
                    background-color: #F3EBFE;
                    color: #8932F8;
                }
                .single-services .icon.bg-FFCA40 i {
                    background-color: #FFFAEC;
                    color: #FFCA40;
                }
                .single-services h3 {
                    margin-bottom: 15px;
                }
                .single-services h3 a {
                    color: var(--black-color);
                    font-size: 25px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-services p {
                    margin-bottom: 15px;
                    font-size: 15px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-services .services-btn {
                    font-size: 15px;
                    font-weight: 500;
                    position: relative;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-services .services-btn i {
                    position: absolute;
                    right: -20px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    font-size: 15px;
                }
                .single-services:hover {
                    background-color: var(--white-color);
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                    -webkit-transform: translateY(-10px);
                            transform: translateY(-10px);
                }
                .single-services:hover .icon i {
                    background-color: var(--main-color);
                    color: var(--white-color);
                }
                .single-services:hover .icon.bg-36CC72 i {
                    background-color: #36CC72;
                }
                .single-services:hover .icon.bg-FF414B i {
                    background-color: #FF414B;
                }
                .single-services:hover .icon.bg-FF6D3D i {
                    background-color: #FF6D3D;
                }
                .single-services:hover .icon.bg-8932F8 i {
                    background-color: #8932F8;
                }
                .single-services:hover .icon.bg-FFCA40 i {
                    background-color: #FFCA40;
                }
                .single-services:hover h3 a {
                    color: var(--main-color);
                }
                .single-services:hover .services-btn {
                    color: var(--main-color);
                    letter-spacing: 1px;
                }
                
                // shape
                .services-shape-1 {
                    position: absolute;
                    top: 20%;
                    left: 45%;
                    -webkit-transform: translateY(-20%) translateX(-45%);
                            transform: translateY(-20%) translateX(-45%);
                    z-index: 1;
                }
                .services-shape-2 {
                    position: absolute;
                    top: 15%;
                    left: 45%;
                    -webkit-transform: translateY(-15%) translateX(-45%);
                            transform: translateY(-15%) translateX(-45%);
                    z-index: 1;
                }
                .services-shape-3 {
                    position: absolute;
                    top: 45%;
                    left: 2%;
                    -webkit-transform: translateY(-45%) translateX(-2%);
                            transform: translateY(-45%) translateX(-2%);
                    z-index: -1;
                }
                .services-shape-4 {
                    position: absolute;
                    top: 45%;
                    right: 0%;
                    -webkit-transform: translateY(-45%) translateX(-5%);
                            transform: translateY(-45%) translateX(-5%);
                    z-index: -1;
                }
                .services-shape-5 {
                    position: absolute;
                    bottom: 10%;
                    left: 35%;
                    -webkit-transform: translateY(-10%) translateX(-35%);
                            transform: translateY(-10%) translateX(-35%);
                    z-index: 1;
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-services {
                        padding: 30px 15px;
                        text-align: center;
                    }
                    .single-services .icon {
                        margin-bottom: 30px;
                    }
                    .single-services h3 a {
                        font-size: 20px;
                    }
                    .services-shape-1 {
                        display: none;
                    }
                    .services-shape-2 {
                        display: none;
                    }
                    .services-shape-3 {
                        display: none;
                    }
                    .services-shape-4 {
                        display: none;
                    }
                    .services-shape-5 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-services {
                        padding: 30px 20px;
                    }
                    .single-services .icon {
                        margin-bottom: 30px;
                    }
                    .single-services h3 a {
                        font-size: 20px;
                    }
                    .services-shape-1 {
                        display: none;
                    }
                    .services-shape-2 {
                        display: none;
                    }
                    .services-shape-3 {
                        display: none;
                    }
                    .services-shape-4 {
                        display: none;
                    }
                    .services-shape-5 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-services {
                        padding: 35px 20px;
                    }
                    .single-services h3 a {
                        font-size: 20px;
                    }
                    .services-shape-1 {
                        display: none;
                    }
                    .services-shape-2 {
                        display: none;
                    }
                    .services-shape-3 {
                        display: none;
                    }
                    .services-shape-4 {
                        display: none;
                    }
                    .services-shape-5 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 1200px) and (max-width : 1399px) {
                    .single-services {
                        padding: 30px;
                    }
                    .single-services h3 a {
                        font-size: 24px;
                    }
                }
            `}</style>
        </>
    )
}

export default HomeAboutExtraContent;