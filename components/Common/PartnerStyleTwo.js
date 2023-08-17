import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 500,
    margin: 40,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='ri-arrow-left-line'></i>",
        "<i class='ri-arrow-right-line'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        375: {
            items: 3
        },
        576: {
            items: 3
        },
        768: {
            items: 3
        },
        1200: {
            items: 5
        }
    }
};

const PartnerStyleTwo = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="partner-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>As Seen on</h2>
                    </div>
                    {display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-partner">
                            <a target="_blank" href='https://theprint.in/ani-press-releases/india-based-cws-technology-celebrates-its-12-years-of-excellence-launches-it-staff-augmentation-portal/1145142/'>
                            <img src="/images/partner/theprint.png" alt="theprint" />
                            </a>
                            
                        </div>
    
                        <div className="single-partner">
                        <a target="_blank" href='https://m.dailyhunt.in/news/india/english/ani67917250816496966-epaper-anieng/india+based+cws+technology+celebrates+its+12+years+of+excellence+launches+it+staff+augmentation+portal-newsid-n426627282?listname=newspaperLanding&topic=business&index=10&topicIndex=4&mode=pwa&action=click'>
                            <img src="/images/partner/dailyhunt.png" alt="dailyhunt" />
                            </a>
                        </div>
    
                        <div className="single-partner">
                        <a target="_blank" href='https://www.zee5.com/articles/india-based-cws-technology-celebrates-its-12-years-of-excellence-launches-it-staff-augmentation-portal'>
                            <img src="/images/partner/zee5.png" alt="zee5" />
                            </a>
                        </div>
    
                        <div className="single-partner">
                        <a target="_blank" href='https://www.business-standard.com/content/press-releases-ani/india-based-cws-technology-celebrates-its-12-years-of-excellence-launches-it-staff-augmentation-portal-122092701241_1.html'>
                            <img src="/images/partner/bstandard.png" alt="bstandard" />
                            </a>
                        </div>
    
                        <div className="single-partner">
                        <a target="_blank" href='https://www.aninews.in/news/business/business/india-based-cws-technology-celebrates-its-12-years-of-excellence-launches-it-staff-augmentation-portal20220927175446/'>
                            <img src="/images/partner/ani.png" alt="ani" />
                            </a>
                        </div>

                        <div className="single-partner">
                        <a target="_blank" href='https://www.dubaisbest.com/best-software-developers-dubai/'>
                            <img src="/images/partner/Dubai's-Best-Badge-3.png" alt="ani" />
                            </a>
                        </div>

                    </OwlCarousel> : ''}
                </div>
            </div>

            {/* Partner Style */}
            <style jsx>{`
                .partner-area {
                    position: relative;
                    z-index: 1;
                }
                .single-partner {
                    text-align: center;
                }
                .single-partner img {
                    
                    width: 170px !important;
                    height: 110px !important;
                    object-fit: contain !important;
                    display: inline-block !important;
                }
                .partner-shape-1 {
                    position: absolute;
                    top: -20%;
                    left: 15%;
                    -webkit-transform: translateY(-20%) translateX(-20%);
                            transform: translateY(-20%) translateX(-20%);
                    z-index: -1;
                }
                .partner-shape-2 {
                    position: absolute;
                    bottom: -50%;
                    right: 10%;
                    -webkit-transform: translateY(-28%) translateX(-10%);
                            transform: translateY(-28%) translateX(-10%);
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .partner-shape-1 {
                        display: none;
                    }
                    .partner-shape-2 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .partner-shape-1 {
                        display: none;
                    }
                    .partner-shape-2 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default PartnerStyleTwo;