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
    getOurProcess
} from '../../utils/strapi';
import OurprocessView from '../../components/HomeDemoOne/Ourprocess';


const Ourprocess = ({ testimonials, contactUsInfo, ourProcess }) => {
    const SEO = {
        title: "Our Process title",
        description: "Our Process des"
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Navbar />

            <PageBanner
                pageTitle="Our Process"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Our Process"
            />

            <OurprocessView ourProcess={ourProcess}/>

            {testimonials && <OurRespectiveClients testimonials={testimonials} />}

            <div className="pb-100">
                <CTA />
            </div>

           {contactUsInfo && <Footer contactUsInfo={contactUsInfo}/>}
        </>
    )
}

export default Ourprocess;

export async function getStaticProps({ params }) {

    const testimonials = await getTestimonial();
    const contactUsInfo = await getContactUsInfo();
    const ourProcess = await getOurProcess();

    return {
        props: {
            testimonials,
            contactUsInfo,
            ourProcess
        },
        revalidate: 10, // In seconds
    };
}