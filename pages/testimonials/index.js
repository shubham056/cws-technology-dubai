import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import CTA from '../../components/Common/CTA';
import Footer from '../../components/_App/Footer';
import Testimonial from '../../components/Common/Testimonial';
import { NextSeo } from 'next-seo';


import {
    getTestimonial,
    getContactUsInfo
} from '../../utils/strapi';


const Testimonials = ({ testimonials, contactUsInfo }) => {
    const SEO = {
        title: "Testimonials title",
        description: "Testimonials des"
    }

    const jsxTestimonial = testimonials.data.map((testimonial) => {
        return <Testimonial testimonials={testimonial.attributes} key={testimonial.id} />
    });



    return (
        <>
            <NextSeo {...SEO} />
            <Navbar />

            <PageBanner
                pageTitle="Testimonials"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Testimonials"
            />

            <div className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="terms-of-service-content">


                                <h2>Testimonials</h2>
                                <br/>
                                  {jsxTestimonial}

                                
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                     .terms-of-service-content .star-rating {
                       
                        //top: 50px;
                        right: 45px;
                        margin-top: 10px;
                    }
                    .terms-of-service-content .star-rating i {
                        font-size: 20px;
                        color: #FFCA40;
                        margin-right: 5px;
                    }
                    .terms-of-service-content .star-rating i:last-child {
                        margin-right: 0;
                    }
                    .terms-of-service-content img {
                        border-radius: 5px;
                        margin-bottom: 30px;
                    }
                    .terms-of-service-content h3 {
                        margin-top: 25px;
                        margin-bottom: 15px;
                        font-size: 25px;
                    }
                    .terms-of-service-content .blockquote, .terms-of-service-content blockquote {
                        margin-top: 25px;
                        margin-bottom: 30px;
                        background-color: #e6f2f5;
                        text-align: left !important;
                        padding: 25px !important;
                        border-radius: 5px;
                    }
                    .terms-of-service-content .blockquote p, .terms-of-service-content blockquote p {
                        margin-bottom: 0;
                        line-height: 1.8;
                        font-size: 15px !important;
                        font-weight: 500;
                    }
                    .terms-of-service-content .blockquote::after, .terms-of-service-content blockquote::after {
                        display: none;
                    }
                    .terms-of-service-content .blockquote::before, .terms-of-service-content blockquote::before {
                        display: none;
                    }
                    .terms-of-service-content ol, .terms-of-service-content ul {
                        margin-top: 20px;
                    }
                    .terms-of-service-content ol li, .terms-of-service-content ul li {
                        margin-bottom: 10px;
                        color: var(--paragraph-color);
                        line-height: 1.8;
                        font-weight: 500;
                        font-size: 15px;
                    }
                    
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .terms-of-service-content h3 {
                            font-size: 22px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        
                    }
                `}</style>
            </div>





            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default Testimonials;

export async function getStaticProps({ params }) {
    const testimonials = await getTestimonial();
    const contactUsInfo = await getContactUsInfo();

    return {
        props: {
            testimonials,
            contactUsInfo
        },
        revalidate: 10, // In seconds
    };
}