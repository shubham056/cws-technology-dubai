import React from 'react';
import Link from 'next/link';

const SingleService = ({ service, randColor }) => {

    return (
        <>
            <div className="col-lg-3 col-md-6" key={service.id}>
                <div className="single-services-item">
                    <div className={`icon bg-FF414B`}>
                        <i className={(service.icon !=null )? `ri-${service.icon}-line` : "ri-quill-pen-line"}></i>
                    </div>
                    <h3>
                        <Link href="/services">
                            <a>{service.heading}</a>
                        </Link>
                    </h3>
                    <p>{service.description}</p>

                    {/* <Link href="/services-details">
                        <a className="services-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                        </a>
                    </Link> */}
                </div>
            </div>

            {/* Services Card Style */}
            <style jsx>{`
                .single-services-item {
                    margin-bottom: 30px;
                    padding: 35px;
                    border-radius: 5px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border: 1px solid #eeeeee;
                    text-align: center;
                    height: 470px;
	                max-height: 470px;
                }
                .single-services-item .icon {
                    margin-bottom: 30px;
                }
                .single-services-item .icon i {
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
                .single-services-item .icon.bg-36CC72 i {
                    background-color: #EBFAF1;
                    color: #36CC72;
                }
                .single-services-item .icon.bg-FF414B i {
                    background-color: #FFECED;
                    color: #FF414B;
                }
                .single-services-item .icon.bg-FF6D3D i {
                    background-color: #FFF0EC;
                    color: #FF6D3D;
                }
                .single-services-item .icon.bg-8932F8 i {
                    background-color: #F3EBFE;
                    color: #8932F8;
                }
                .single-services-item .icon.bg-FFCA40 i {
                    background-color: #FFFAEC;
                    color: #FFCA40;
                }
                .single-services-item h3 {
                    margin-bottom: 15px;
                    font-size: 25px;
                }
                .single-services-item h3 a {
                    color: var(--black-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-services-item p {
                    margin-bottom: 15px;
                    font-size: 15px;
                }
                .single-services-item .services-btn {
                    font-size: 15px;
                    font-weight: 500;
                    position: relative;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .single-services-item .services-btn i {
                    position: absolute;
                    right: -20px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    font-size: 15px;
                }
                .single-services-item:hover {
                    background-color: var(--white-color);
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                    -webkit-transform: translateY(-10px);
                            transform: translateY(-10px);
                }
                .single-services-item:hover .icon i {
                    background-color: var(--main-color);
                    color: var(--white-color);
                }
                .single-services-item:hover .icon.bg-36CC72 i {
                    background-color: #36CC72;
                }
                .single-services-item:hover .icon.bg-FF414B i {
                    background-color: #FF414B;
                }
                .single-services-item:hover .icon.bg-FF6D3D i {
                    background-color: #FF6D3D;
                }
                .single-services-item:hover .icon.bg-8932F8 i {
                    background-color: #8932F8;
                }
                .single-services-item:hover .icon.bg-FFCA40 i {
                    background-color: #FFCA40;
                }
                .single-services-item:hover h3 a {
                    color: var(--main-color);
                }
                .single-services-item:hover .services-btn {
                    color: var(--main-color);
                    letter-spacing: 1px;
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .single-services-item {
                        padding: 30px 20px;
                    }
                    .single-services-item .icon {
                        margin-bottom: 25px;
                    }
                    .single-services-item h3 {
                        font-size: 20px;
                        margin-bottom: 10px;
                    }
                    .single-services-item p {
                        margin-bottom: 15px;
	                    font-size: 14px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-services-item {
                        padding: 30px 20px;
                    }
                    .single-services-item .icon {
                        margin-bottom: 25px;
                    }
                    .single-services-item h3 {
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-services-item {
                        padding: 35px 15px;
                    }
                    .single-services-item h3 {
                        font-size: 20px;
                    }
                }

                @media only screen and (min-width : 1200px) and (max-width : 1399px) {
                    .single-services-item {
                        padding: 30px;
                    }
                    .single-services-item h3 a {
                        font-size: 24px;
                    }
                }
            `}</style>
        </>
    )
}

export default SingleService;