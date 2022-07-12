import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import FeaturesCard from '../../components/HomeDemoTwo/FeaturesCard';
import FunFactStyleTwo from '../../components/Common/FunFactStyleTwo';
import IntroVideo from '../../components/Common/IntroVideo';
import OurRespectiveClients from '../../components/Common/OurRespectiveClients';
import CTA from '../../components/Common/CTA';
import Footer from '../../components/_App/Footer';
import Team from '../../components/Common/Team';
import AboutUsContent from '../../components/HomeDemoOne/AboutUsContent';
import { NextSeo } from 'next-seo';


import {
    getTestimonial,
    getContactUsInfo,
    getOurClients,
    getOurClientsPageMeta
} from '../../utils/strapi';
import assetsURL from '../../utils/assetsURL';
import PartnerStyleOne from '../../components/Common/PartnerStyleOne';
import Head from 'next/head';
import Script from 'next/script';


const OurSatisfiedCustomers = ({ testimonials, contactUsInfo, ourClients, ourClientsMeta }) => {

    let facebook = ourClientsMeta.data.metaSocial.find(o => o.socialNetwork === 'facebook');
    let twitter = ourClientsMeta.data.metaSocial.find(o => o.socialNetwork === 'twitter');
    const { metaTitle, metaDescription, metaImage, keywords, canonicalURL, structuredData } = ourClientsMeta.data;
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

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            {ourClientsMeta && <NextSeo {...SEO} />}

            <Navbar />

            <PageBanner
                pageTitle="Our Satisfied Customers"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Our Satisfied Customers"
            />

            {ourClients && <PartnerStyleOne ourClients={ourClients} />}

            {testimonials && <OurRespectiveClients testimonials={testimonials} />}

            <div className="pb-100">
                <CTA />
            </div>

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default OurSatisfiedCustomers;

export async function getStaticProps({ params }) {
    const testimonials = await getTestimonial();
    const contactUsInfo = await getContactUsInfo();
    const ourClients = await getOurClients();
    const ourClientsMeta = await getOurClientsPageMeta();

    return {
        props: {
            testimonials,
            contactUsInfo,
            ourClients,
            ourClientsMeta
        },
        revalidate: 10, // In seconds
    };
}