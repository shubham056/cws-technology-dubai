import React from 'react';


const OurRespectiveClientsSingle = ({ testimonial, path }) => {
    const truncateSting = (source, size) => {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }

    return (
        <>

            <div className="clients-item">
                <div className="title-name">
                    <h3>-{testimonial.name}   <i className="ri-quote-left"></i></h3>
                </div>

                <div>{`‘‘${truncateSting(testimonial.testimonial, (path == '/about-us')? 300 : 100)}’’` }</div>

                {
                    (testimonial.is_star_rating)
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

{/* 
                <div className="shape-1">
                    <img src="/images/clients/shape-4.png" alt="shape-4.png" />
                </div>

                <div className="shape-2">
                    <img src="/images/clients/shape-5.png" alt="shape-5.png" />
                </div>

                <div className="shape-3">
                    <img src="/images/clients/shape-6.png" alt="shape-6.png" />
                </div> */}
            </div>


            {/* Clients Style */}
            <style jsx>{`
                .clients-area {
                    background-color: #F4F8FC;
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .clients-item {
                    background-color: var(--white-color);
                    padding: 45px;
                    position: relative;
                    z-index: 1;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border-radius: 5px;
                    height: 240px;
	                max-height: 240px;
                }
                .clients-item img {
                    display: inline-block !important;
                    width: auto !important;
                    border-radius: 50%;
                }
                .clients-item p {
                    margin-top: 25px;
                    margin-bottom: 25px;
                }
                .clients-item .title-name h3 {
                    font-size: 20px;
                    margin-bottom: 15px;
                }
                .clients-item .title-name span {
                    display: inline-block;
                    margin-top: 10px;
                    color: #79798D;
                    font-size: 14px;
                }
                .clients-item .star-rating {
                    position: absolute;
                    //top: 50px;
                    right: 45px;
                    margin-top: 10px;
                }
                .clients-item .star-rating i {
                    font-size: 20px;
                    color: #FFCA40;
                    margin-right: 5px;
                }
                .clients-item .star-rating i:last-child {
                    margin-right: 0;
                }

                // Shape Images 
                .clients-item .shape-1 {
                    position: absolute;
                    top: 25%;
                    left: 45%;
                    -webkit-transform: translateY(-25%) translateX(-45%);
                            transform: translateY(-25%) translateX(-45%);
                    z-index: -1;
                }
                .clients-item .shape-2 {
                    position: absolute;
                    bottom: 20%;
                    right: 20%;
                    -webkit-transform: translateY(-20%) translateX(-20%);
                            transform: translateY(-20%) translateX(-20%);
                    z-index: -1;
                }
                .clients-item .shape-3 {
                    position: absolute;
                    bottom: 16%;
                    right: 16%;
                    -webkit-transform: translateY(-16%) translateX(-16%);
                            transform: translateY(-16%) translateX(-16%);
                    z-index: -1;
                }

                // shape
                .clients-shape-1 {
                    position: absolute;
                    top: 22%;
                    left: 20%;
                    -webkit-transform: translateY(-22%) translateX(-20%);
                            transform: translateY(-22%) translateX(-20%);
                    z-index: -1;
                }
                .clients-shape-2 {
                    position: absolute;
                    top: 28%;
                    left: 18%;
                    -webkit-transform: translateY(-28%) translateX(-18%);
                            transform: translateY(-28%) translateX(-18%);
                    z-index: -1;
                }
                .clients-shape-3 {
                    position: absolute;
                    bottom: 15%;
                    right: 12%;
                    -webkit-transform: translateY(-15%) translateX(-12%);
                            transform: translateY(-15%) translateX(-12%);
                    z-index: -1;
                    max-width: 100px;
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .clients-item {
                        padding: 35px 20px;
                    }
                    .clients-shape-1 {
                        display: none;
                    }
                    .clients-shape-2 {
                        display: none;
                    }
                    .clients-shape-3 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .clients-item {
                        padding: 35px 20px;
                    }
                    .clients-item p {
                        font-size: 14px;
                    }
                    .clients-shape-1 {
                        display: none;
                    }
                    .clients-shape-2 {
                        display: none;
                    }
                    .clients-shape-3 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .clients-shape-1 {
                        display: none;
                    }
                    .clients-shape-2 {
                        display: none;
                    }
                    .clients-shape-3 {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}

export default OurRespectiveClientsSingle;