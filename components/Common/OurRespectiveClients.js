import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import OurRespectiveClientsSingle from '../../components/Common/OurRespectiveClientsSingle';    


const OurRespectiveClients = ({testimonials}) => {
    const router = useRouter();

    const options = {
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: (router.pathname == '/about-us' ? 2 : 3)
            }
        }
    };

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    const jsxTestimonial = testimonials.data.map((testimonial) => {

        return <OurRespectiveClientsSingle testimonial={testimonial.attributes} key={testimonial.id} path={router.pathname} />
        
    });

    return (
        <>
            <div className="clients-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                    </div>
                    {display ? <OwlCarousel 
                        className="clients-slides owl-carousel owl-theme"
                        {...options}
                    >
                    
                    {jsxTestimonial}

                </OwlCarousel> : ''}
                    
                </div>

                {/* Shape Images */}
                <div className="clients-shape-1">
                    <img src="/images/clients/shape-1.png" alt="image" />
                </div>
                <div className="clients-shape-2">
                    <img src="/images/clients/shape-2.png" alt="image" />
                </div>
                <div className="clients-shape-3">
                    <img src="/images/clients/shape-3.png" alt="image" />
                </div>
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
                    margin-bottom: 0;
                }
                .clients-item .title-name span {
                    display: inline-block;
                    margin-top: 10px;
                    color: #79798D;
                    font-size: 14px;
                }
                .clients-item .star-rating {
                    position: absolute;
                    // top: 50px;
                    right: 45px;
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

export default OurRespectiveClients;