import React, { useState } from "react";
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Link from 'next/link';
import WorkProcess from '../../components/Common/WorkProcess';
import TechSupport from '../../components/Common/TechSupport';
import CTA from '../../components/Common/CTA';
import Footer from '../../components/_App/Footer';
import Services from '../../components/HomeDemoOne/Services';
import Router, { withRouter, useRouter } from 'next/router'


import {
    getAllServices,
    getServices,
    getParallaxSectionInfo,
    getContactUsInfo,
    getAllCommonServices,
    getServicesPageMeta
} from '../../utils/strapi';
import assetsURL from '../../utils/assetsURL';
import { NextSeo } from 'next-seo';
import Head from 'next/head';


const ServicesIndex = ({ services, parallaxInfo, contactUsInfo, pageCount, currentPage, servicesMeta }) => {

    let facebook = servicesMeta.data.metaSocial.find(o => o.socialNetwork === 'facebook');
    let twitter = servicesMeta.data.metaSocial.find(o => o.socialNetwork === 'twitter');
    const { metaTitle, metaDescription, metaImage, keywords, canonicalURL, structuredData } = servicesMeta.data;
    const { opengraph_url, title, description, opengraph_type } = facebook;
    const { twitter_handle, site, twitter_cardType } = twitter;

    const SEO = {
        title: metaTitle,
        description: metaDescription,
        canonical: canonicalURL,
        openGraph: {
            type: opengraph_type,
            title: title,
            description: description,
            url: opengraph_url,
            images: [
                {
                    url: `${assetsURL}${metaImage}`,
                    width: 800,
                    height: 600,
                    alt: 'Og Image Alt',
                }
            ],
        },
        twitter: {
            handle: twitter_handle,
            site: site,
            cardType: twitter_cardType,
        },
    }


    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }
    const router = useRouter();
    const pagginationHandler = (page) => {
        //console.log('page', page)
        const currentPath = router.pathname;
        const currentQuery = router.query;
        currentQuery.page = page.selected + 1;
        //console.log('currentQuery', currentQuery, currentPath)

        router.push({
            pathname: currentPath,
            query: currentQuery,
        });

    };


    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            {servicesMeta && <NextSeo {...SEO} />}

            <Navbar />

            <PageBanner
                pageTitle="Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services"
            />

            {/* {services &&  <Services services={services} pageCount={pageCount} currentPage={currentPage} pagginationHandler={pagginationHandler} /> } */}

            {services && <Services services={services} />}

            <div className="pb-100">
                <WorkProcess />
            </div>

            {parallaxInfo && <TechSupport parallaxInfo={parallaxInfo} />}

            <div className="pt-100" >
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <p style={{ fontSize: 20, fontWeight: 450 }}>Web Development Services</p>

                                <ul>
                                    <li className="nav-item">
                                        <Link href="/services/php-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">PHP Development Services</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/enterprise-portal-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Enterprise Portal Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/social-networking-apps" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Social Networking Apps</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/cms-development-company-in-dubai" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Content Management System(CMS)</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <p style={{ fontSize: 20, fontWeight: 450 }}>Mobile Application Development</p>

                                <ul>
                                    <li className="nav-item">
                                        <Link href="/services/android-app-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Android App Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/i-phone-application-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">iPhone Application Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/i-pad-app-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">iPad App Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/hybrid-app-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Hybrid App Development</a>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <p style={{ fontSize: 20, fontWeight: 450 }}> E-Commerce Development</p>

                                <ul>
                                    <li className="nav-item">
                                        <Link href="/services/e-commerce-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">E-Commerce Solutions</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/woo-commerce-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">WooCommerce Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/magento-development-services" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Magento Development Services</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/virtuemart-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">VirtueMart Development</a>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <p style={{ fontSize: 20, fontWeight: 450 }}>RIA Development</p>

                                <ul>
                                    <li className="nav-item">
                                        <Link href="/services/html5-web-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">HTML5 Web Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/web-2-0-design-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Web 2.0 Design / Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/responsive-mobile-design-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Responsive Mobile Design / Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <p style={{ fontSize: 20, fontWeight: 450 }}>PHP CMS Development</p>

                                <ul>
                                    <li className="nav-item">
                                        <Link href="/services/wordpress-website-development-company-in-india" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">WordPress Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/joomla-development-services" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Joomla Development Services</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/magento-development-services" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Magento Development Services</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/drupal-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Drupal Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <p style={{ fontSize: 20, fontWeight: 450 }}>Mobile Development</p>

                                <ul>
                                    <li className="nav-item">
                                        <Link href="/services/php-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">PHP Development Services</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/enterprise-portal-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Enterprise Portal Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/social-networking-apps" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Social Networking Apps</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/cms-development-company-in-dubai" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Content Management System(CMS)</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <p style={{ fontSize: 20, fontWeight: 450 }}>PHP MVC Development</p>

                                <ul>
                                    <li className="nav-item">
                                        <Link href="/services/cake-php-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">CakePHP Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/codeigniter-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Codeigniter Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/zend-development-company" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Zend Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/yii-laravel-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Yii & Laravel Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-3">
                            <div className="single-footer-widget">
                                <p style={{ fontSize: 20, fontWeight: 450 }}>Website Design</p>

                                <ul>
                                    <li className="nav-item">
                                        <Link href="/services/responsive-website-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Responsive Website Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/web-2-0-design-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Web 2.0 Design / Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/mobile-website-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Mobile Website Development</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/services/responsive-website-development" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">RIA Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="ptb-100">
                <CTA />
            </div>

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default ServicesIndex;

export async function getStaticProps({ params }) {

    const services = await getAllCommonServices(); // Get Services
    const parallaxInfo = await getParallaxSectionInfo();
    const contactUsInfo = await getContactUsInfo();
    const servicesMeta = await getServicesPageMeta();

    return {
        props: {
            services,
            servicesMeta,
            parallaxInfo,
            contactUsInfo,
            // totalCount: services.meta.pagination.total,
            // pageCount: services.meta.pagination.pageCount,
            // currentPage: services.meta.pagination.page,
            // perPage: 3,
        },
        revalidate: 10, // In seconds
    };
}

// export async function getServerSideProps({ query: {page = 1 }  }) {

//     const services = await getAllServices(page); // Get Services
//     const parallaxInfo = await getParallaxSectionInfo();
//     const contactUsInfo = await getContactUsInfo();

//     return {
//         props: {
//             services,
//             parallaxInfo,
//             contactUsInfo,
//             totalCount: services.meta.pagination.total,
//             pageCount: services.meta.pagination.pageCount,
//             currentPage: services.meta.pagination.page,
//             perPage: 3,
//         },
//         //revalidate: 10, // In seconds
//     };
// }