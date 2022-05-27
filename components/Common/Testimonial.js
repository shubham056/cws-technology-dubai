import React from 'react';



const Testimonials = ({ testimonials }) => {


    return (
        <>
            <div>
                <p>"{testimonials.testimonial}"</p>

                <div style={{ textAlign: 'center' }}>
                <p>- {testimonials.name} </p>
                    
                       
                        {
                           testimonials.is_star_rating
                           ?
                           <div className="star-rating">
                           <i className="ri-star-fill"></i>
                           <i className="ri-star-fill"></i>
                           <i className="ri-star-fill"></i>
                           <i className="ri-star-fill"></i>
                           <i className="ri-star-fill"></i>
                           </div>
                           :
                           null
                        }
                        
                    

                </div>
                <hr />
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


        </>
    )
}

export default Testimonials;
