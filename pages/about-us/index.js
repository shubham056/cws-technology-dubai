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
    getContactUsInfo
} from '../../utils/strapi';


const AboutUs = ({ features, introVideo, testimonials, privileges, teamMembers, aboutYourself, contactUsInfo }) => {
    const SEO = {
        title: "About title",
        description: "About des"
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Navbar />

            <PageBanner
                pageTitle="About Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About Us"
            />

            {aboutYourself && <AboutUsContent aboutYourself={aboutYourself} isReadmore={false} />}

            {features && <FeaturesCard features={features} />}

            <div className="pt-100">
                {privileges && <FunFactStyleTwo ourPrivileges={privileges} />}
            </div>

            {/* {teamMembers && <Team teamMembers={teamMembers} />} */}

            {/* {introVideo && <IntroVideo video={introVideo} />} */}

            {testimonials && <OurRespectiveClients testimonials={testimonials} />}

            <div className="pb-100">
                <CTA />
            </div>

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default AboutUs;

export async function getStaticProps({ params }) {
    const features = await getfeatures();
    const introVideo = await getIntroVideo();
    const testimonials = await getTestimonial();
    const privileges = await getOurPrivileges();
    const teamMembers = await getTeamMembers(true);
    const aboutYourself = await getAboutYourself();
    const contactUsInfo = await getContactUsInfo();

    return {
        props: {
            features,
            introVideo,
            testimonials,
            privileges,
            teamMembers,
            aboutYourself,
            contactUsInfo
        },
        revalidate: 10, // In seconds
    };
}