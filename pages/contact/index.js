import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';
import Footer from '../../components/_App/Footer';

import { getContactUsInfo, getcontactusPageMeta } from '../../utils/strapi';
import assetsURL from '../../utils/assetsURL';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Script from 'next/script';

const ContactPage = ({ contactUsInfo, contactUsMeta }) => {

    let facebook = contactUsMeta.data.metaSocial.find(o => o.socialNetwork === 'facebook');
    let twitter = contactUsMeta.data.metaSocial.find(o => o.socialNetwork === 'twitter');
    const { metaTitle, metaDescription, metaImage, keywords, canonicalURL, structuredData } = contactUsMeta.data;
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
                <script type="text/javascript" src='/js/zohoContactForm.js' />
            </Head>

            <Script strategy='lazyOnload'
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />


            {contactUsMeta && <NextSeo {...SEO} />}

            <Navbar />

            <PageBanner
                pageTitle="Contact"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact"
            />

            <ContactForm />

            {contactUsInfo && <ContactInfo contactUsInfo={contactUsInfo} />}

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default ContactPage;

export async function getStaticProps({ params }) {

    const contactUsInfo = await getContactUsInfo();
    const contactUsMeta = await getcontactusPageMeta();
    return {
        props: {
            contactUsInfo,
            contactUsMeta
        },
        revalidate: 10, // In seconds
    }
}