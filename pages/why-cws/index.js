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
    getIntroVideo,
    getfeatures,
    getOurPrivileges,
    getTestimonial,
    getTeamMembers,
    getAboutYourself,
    getContactUsInfo,
    getWhyCwsPageMeta
} from '../../utils/strapi';
import assetsURL from '../../utils/assetsURL';
import Head from 'next/head';


const WhyCws = ({ features, introVideo, testimonials, privileges, teamMembers, aboutYourself, contactUsInfo, whycwsMeta }) => {

    let facebook = whycwsMeta.data.metaSocial.find(o => o.socialNetwork === 'facebook');
    let twitter = whycwsMeta.data.metaSocial.find(o => o.socialNetwork === 'twitter');
    const { metaTitle, metaDescription, metaImage, keywords, canonicalURL, structuredData } = whycwsMeta.data;
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

            {whycwsMeta && <NextSeo {...SEO} />}

            <Navbar />

            <PageBanner
                pageTitle="Why Cws?"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Why Cws?"
            />

            {features && <FeaturesCard features={features} />}

            {aboutYourself && <AboutUsContent aboutYourself={aboutYourself} isReadmore={false} />}

            <div className="pt-100">
                {privileges && <FunFactStyleTwo ourPrivileges={privileges} />}
            </div>

            {/* {teamMembers && <Team teamMembers={teamMembers} />}

            {introVideo && <IntroVideo video={introVideo} />} */}

            {testimonials && <OurRespectiveClients testimonials={testimonials} />}

            <div className="pb-100">
                <CTA />
            </div>

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default WhyCws;

export async function getStaticProps({ params }) {
    const features = await getfeatures();
    const introVideo = await getIntroVideo();
    const testimonials = await getTestimonial();
    const privileges = await getOurPrivileges();
    const teamMembers = await getTeamMembers(true);
    const aboutYourself = await getAboutYourself();
    const contactUsInfo = await getContactUsInfo();
    const whycwsMeta = await getWhyCwsPageMeta();


    return {
        props: {
            features,
            introVideo,
            testimonials,
            privileges,
            teamMembers,
            aboutYourself,
            contactUsInfo,
            whycwsMeta
        },
        revalidate: 10, // In seconds
    };
}