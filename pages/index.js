import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import PartnerStyleOne from '../components/Common/PartnerStyleOne';
import AboutUsContent from '../components/HomeDemoOne/AboutUsContent';
import Industries from '../components/HomeDemoOne/Industries';
import Services from '../components/HomeDemoOne/Services';
import TechSupport from '../components/Common/TechSupport';
import RecentCaseStudy from '../components/CaseStudy/RecentCaseStudy';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import PopularBlogPost from '../components/Common/PopularBlogPost';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';
import FunFactStyleTwo from '../components/Common/FunFactStyleTwo';
import {
    getOurPrivileges,
    getTestimonial,
    getPopularBlogPost,
    getPortfolio,
    getServices,
    getAboutYourself,
    getOurClients,
    getParallaxSectionInfo,
    getContactUsInfo,
    getAllCommonServices,
    getIndustries,
    getTechnologies,
    getBannerData
} from '../utils/strapi';
import Technologies from '../components/HomeDemoOne/Technologies';


const IndexPage = ({ banner, posts, testimonials, privileges, portfolios, services, aboutYourself, ourClients, industries, technologies, parallaxInfo, contactUsInfo }) => {

    

    return (
        <>
            <Navbar />

            {banner && <MainBanner bannerData={banner} />}

            {aboutYourself && <AboutUsContent aboutYourself={aboutYourself} isReadmore={true} />}

            {services && <Services services={services} />}

            <div className="pt-100">
                {privileges && <FunFactStyleTwo ourPrivileges={privileges} />}
            </div>

            {industries && <Industries industries={industries} />}

            {parallaxInfo && <TechSupport parallaxInfo={parallaxInfo} />}

            {portfolios && <RecentCaseStudy portfolios={portfolios} />}

            {getTestimonial && <OurRespectiveClients testimonials={testimonials} />}

            {posts && <PopularBlogPost blog={posts} />}

            {technologies && <Technologies technologies={technologies} />}

            <div className="pb-100">
                <CTA />
            </div>

            {/* {ourClients && <PartnerStyleOne ourClients={ourClients} />} */}

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}

        </>
    )
}

export default IndexPage;

export async function getStaticProps({ params }) {
    const banner = await getBannerData(); // Get Popular Blog Post
    const posts = await getPopularBlogPost(3); // Get Popular Blog Post
    const testimonials = await getTestimonial(); // Get Testimonial
    const privileges = await getOurPrivileges(); // Get Our Privileges
    const portfolios = await getPortfolio(); // Get Our Privileges
    const services = await getAllCommonServices(); // Get Services
    const aboutYourself = await getAboutYourself(); // Get Services
    const ourClients = await getOurClients(); // Get Our Clients
    const industries = await getIndustries(); // Get Industries
    const technologies = await getTechnologies(); // Get Industries
    const parallaxInfo = await getParallaxSectionInfo(); // Get Our Clients
    const contactUsInfo = await getContactUsInfo();

    return {
        props: {
            banner,
            posts,
            testimonials,
            privileges,
            portfolios,
            services,
            aboutYourself,
            ourClients,
            industries,
            technologies,
            parallaxInfo,
            contactUsInfo
        },
        revalidate: 10, // In seconds
    };
}