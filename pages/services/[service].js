import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import WorkProcess from '../../components/Common/WorkProcess';
import CTA from '../../components/Common/CTA';
import ServicesDetailsContent from '../../components/ServicesDetails/ServicesDetailsContent';
import Footer from '../../components/_App/Footer';
import ErrorPage from 'next/error';
import assetsURL from '../../utils/assetsURL';
import { NextSeo } from 'next-seo';

import { getContactUsInfo, getService } from '../../utils/strapi';
import Script from 'next/script';
import CommonFaq from '../../components/ServicesDetails/CommonFaq';

const ServicesDetails = ({ service, contactUsInfo }) => {

    if (!service.data || service.data.length == 0) {
        return <ErrorPage statusCode={404} />
    }

    const { metaTitle, metaDescription, metaImage, keywords, canonicalURL, structuredData } = service.data[0];
    if (service.data[0].metaSocial != undefined) {
        let facebook = service.data[0].metaSocial.filter(o => o.socialNetwork === 'facebook');
        let twitter = service.data[0].metaSocial.filter(o => o.socialNetwork === 'twitter');
        const { opengraph_url, title, description, opengraph_type } = facebook;
        const { twitter_handle, site, twitter_cardType } = twitter;
    }

    const SEO = {
        title: metaTitle,
        description: metaDescription,
        canonical: canonicalURL,
        openGraph: {
            type: (typeof opengraph_type != "undefined") ? opengraph_type : null,
            title: (typeof title != "undefined") ? title : null,
            description: (typeof description != "undefined") ? description : null,
            url: (typeof opengraph_url != "undefined") ? opengraph_url : null,
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
            handle: (typeof twitter_handle != "undefined") ? twitter_handle : null,
            site: (typeof site != "undefined") ? site : null,
            cardType: (typeof twitter_cardType != "undefined") ? twitter_cardType : null,
        },
    }
    
    
    return (
        <>
            {
                (service.data.length == 0)
                    ?
                    <ErrorPage statusCode={404} />
                    :
                    <>

                        <Script strategy='lazyOnload'
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                        />


                        {service && <NextSeo {...SEO} />}

                        <Navbar />

                        <PageBanner
                            pageTitle={service.data[0].heading}
                            homePageUrl="/"
                            homePageText="Home"
                            activePageText={service.data[0].heading}
                        />

                        <ServicesDetailsContent service={service.data[0]} />

                        {/* <WorkProcess /> */}

                        {service.data[0].faq.length > 0 && <CommonFaq faq={service.data[0].faq} />}

                        {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}

                    </>
            }

        </>
    )
}

export default ServicesDetails;

export async function getServerSideProps({ params, res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    try {
        const contactUsInfo = await getContactUsInfo();
        const service = await getService(params.service);
        return {
            props: {
                contactUsInfo: contactUsInfo,
                service: service
            }
        }

    } catch (error) {
        res.statusCode = 404
        return {
            props: {
                service: {}
            }
        }
    }

}