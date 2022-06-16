import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import OurRespectiveClients from '../../components/Common/OurRespectiveClients';
import CTA from '../../components/Common/CTA';
import Footer from '../../components/_App/Footer';
import { NextSeo } from 'next-seo';


import {
    getTestimonial,
    getContactUsInfo,
    getOurProcess,
    getOurProcessPageMeta
} from '../../utils/strapi';
import assetsURL from '../../utils/assetsURL';
import OurprocessView from '../../components/HomeDemoOne/Ourprocess';


const Ourprocess = ({ testimonials, contactUsInfo, ourProcess, ourProcessMeta }) => {

    let facebook = ourProcessMeta.data.socialNetwork.find(o => o.socialNetwork === 'facebook');
    let twitter = ourProcessMeta.data.socialNetwork.find(o => o.socialNetwork === 'twitter');
    const { metaTitle, metaDescription, metaImage, keywords, canonicalURL } = ourProcessMeta.data;
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
            {ourProcessMeta && <NextSeo {...SEO} />}
            <Navbar />

            <PageBanner
                pageTitle="Our Process"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Our Process"
            />

            <OurprocessView ourProcess={ourProcess} />

            {testimonials && <OurRespectiveClients testimonials={testimonials} />}

            <div className="pb-100">
                <CTA />
            </div>

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default Ourprocess;

export async function getStaticProps({ params }) {

    const testimonials = await getTestimonial();
    const contactUsInfo = await getContactUsInfo();
    const ourProcess = await getOurProcess();
    const ourProcessMeta = await getOurProcessPageMeta();

    return {
        props: {
            testimonials,
            contactUsInfo,
            ourProcess,
            ourProcessMeta
        },
        revalidate: 10, // In seconds
    };
}