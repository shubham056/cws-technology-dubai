import React from 'react';

const WhatsApp = ({ scrollStepInPx, delayInMs }) => {

   

    const renderWhatsAppIcon = () => {
        return (
            <>
                <a href='https://wa.me/971529910891' target="_blank">
                    <div className="go-top active" >
                        <i className='ri-whatsapp-line'></i>
                    </div>
                </a>
                {/* Go Top Button Style */}
                <style jsx>{`
                    .go-top {
                        position: fixed;
                        cursor: pointer;
                        bottom: -100px;
                        right: 20px;
                        color: var(--white-color);
                        background-color: var(--black-color);
                        z-index: 4;
                        width: 45px;
                        text-align: center;
                        height: 45px;
                        line-height: 50px;
                        opacity: 0;
                        visibility: hidden;
                        border-radius: 50%;
                        font-size: 30px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        overflow: hidden;
                        -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
                                box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
                    }
                    .go-top.active {
                        opacity: 1;
                        visibility: visible;
                        bottom: 35px;
                        background-color: #2bb640;
                    }
                    .go-top:hover {
                        background-color: #2bb630;
                        
                        color: var(--white-color);
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                        -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
                                box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
                        -webkit-transform: translateY(-5px);
                                transform: translateY(-5px);
                                
                    }

                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .go-top {
                            width: 40px;
                            height: 40px;
                            line-height: 45px;
                            font-size: 26px;
                            bottom: 20px !important;
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

    return (
        <>
            {renderWhatsAppIcon()}
        </>
    )
}

export default WhatsApp;