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
} from '../../utils/strapi';
import PartnerStyleOne from '../../components/Common/PartnerStyleOne';


const OurSatisfiedCustomers = ({ testimonials, contactUsInfo, ourClients }) => {
    const SEO = {
        title: "About title",
        description: "About des"
    }

    return (
        <>
            <NextSeo {...SEO} />
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

           {contactUsInfo && <Footer contactUsInfo={contactUsInfo}/>}
        </>
    )
}

export default OurSatisfiedCustomers;

export async function getStaticProps({ params }) {
    const testimonials = await getTestimonial();
    const contactUsInfo = await getContactUsInfo();
    const ourClients = await getOurClients();

    return {
        props: {
            testimonials,
            contactUsInfo,
            ourClients,
        },
        revalidate: 10, // In seconds
    };
}