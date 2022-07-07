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
import Head from 'next/head';

import { getContactUsInfo, getService } from '../../utils/strapi';
import Script from 'next/script';

const ServicesDetails = ({ service, contactUsInfo }) => {

    // let facebook = service.data.metaSocial.find(o => o.socialNetwork === 'facebook');
    // let twitter = service.data.metaSocial.find(o => o.socialNetwork === 'twitter');
    const { metaTitle, metaDescription, metaImage, keywords, canonicalURL, structuredData } = service.data[0];
    // const { opengraph_url, title, description, opengraph_type } = facebook;
    // const { twitter_handle, site, twitter_cardType } = twitter;

    const SEO = {
        title: metaTitle,
        description: metaDescription,
        canonical: canonicalURL,
        // openGraph: {
        //     type: opengraph_type,
        //     title: title,
        //     description: description,
        //     url: opengraph_url,
        //     images: [
        //         {
        //             url: `${assetsURL}${metaImage}`,
        //             width: 800,
        //             height: 600,
        //             alt: 'Og Image Alt',
        //         }
        //     ],
        // },
        // twitter: {
        //     handle: twitter_handle,
        //     site: site,
        //     cardType: twitter_cardType,
        // },
    }
    console.log(SEO)
    // return false
    if (!service.data) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <>
            {
                (service.data.length == 0)
                    ?
                    <ErrorPage statusCode={404} />
                    :
                    <>
                        <Head>
                            <Script strategy='lazyOnload'
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                            />
                        </Head>

                        {service && <NextSeo {...SEO} />}

                        <Navbar />

                        <PageBanner
                            pageTitle={service.data[0].heading}
                            homePageUrl="/"
                            homePageText="Home"
                            activePageText={service.data[0].heading}
                        />

                        <ServicesDetailsContent service={service.data[0]} />

                        <WorkProcess />

                        <div className="ptb-100">
                            <CTA />
                        </div>

                        {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}

                    </>
            }

        </>
    )
}

export default ServicesDetails;

export async function getServerSideProps({ params, res }) {
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