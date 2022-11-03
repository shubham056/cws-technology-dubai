import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import PartnerStyleOne from '../components/Common/PartnerStyleOne';
import PartnerStyleThree from '../components/Common/PartnerStyleThree';
import PartnerStyleTwo from '../components/Common/PartnerStyleTwo';
import HomeAboutUsContent from '../components/HomeDemoOne/HomeAboutUsContent';
import Industries from '../components/HomeDemoOne/Industries';
import Services from '../components/HomeDemoOne/Services';
import HomeAboutExtraContent from '../components/HomeDemoOne/HomeAboutExtraContent';
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
    getHomeAboutYourself,
    getOurClients,
    getParallaxSectionInfo,
    getContactUsInfo,
    getAllCommonServices,
    getIndustries,
    getTechnologies,
    getBannerData,
    getHomePageMeta,
    getHomeAbouthomeServices
} from '../utils/strapi';
import Technologies from '../components/HomeDemoOne/Technologies';
import { NextSeo } from "next-seo";
import assetsURL from '../utils/assetsURL';
import Script from "next/script";



const IndexPage = ({ banner, posts, testimonials, privileges, portfolios, services, aboutYourself, ourClients, industries, technologies, parallaxInfo, contactUsInfo, homeMeta, homeAbouthomeServices }) => {

    let facebook = homeMeta.data.metaSocial.find(o => o.socialNetwork === 'facebook');
    let twitter = homeMeta.data.metaSocial.find(o => o.socialNetwork === 'twitter');
    const { metaTitle, metaDescription, metaImage, keywords, canonicalURL, structuredData, facebook_image, twitter_image } = homeMeta.data;
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
                    url: (facebook_image != null) ? `${assetsURL}${facebook_image}` : `${assetsURL}${metaImage}`,
                    width: 200,
                    height: 200,
                    alt: 'facebook Og Image alt',
                }
            ],
        },
        twitter: {
            handle: twitter_handle,
            site: site,
            cardType: twitter_cardType,
            title: title,
            description : description,
            images: [
                {
                    url: (twitter_image != null) ? `${assetsURL}${twitter_image}` : `${assetsURL}${metaImage}`,
                    width: 200,
                    height: 200,
                    alt: 'facebook Og Image alt',
                }
            ]
        },
    }

    return (
        <>
            <Script strategy='lazyOnload'
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {homeMeta && <NextSeo {...SEO} />}

            <Navbar />

            {banner && <MainBanner bannerData={banner} />}

            {/* <PartnerStyleThree/> */}

            <PartnerStyleTwo />

            {aboutYourself && <HomeAboutUsContent aboutYourself={aboutYourself} />}

            {/* {aboutYourself && <AboutUsContent aboutYourself={aboutYourself} isReadmore={true} />} */}

            {services && <Services services={services} />}

            {homeAbouthomeServices && <HomeAboutExtraContent content={homeAbouthomeServices}/>}

            <div className="pt-100">
                {privileges && <FunFactStyleTwo ourPrivileges={privileges} />}
            </div>

            {industries && <Industries industries={industries} />}

            {parallaxInfo && <TechSupport parallaxInfo={parallaxInfo} />}

            {portfolios && <RecentCaseStudy portfolios={portfolios} />}

            {getTestimonial && <OurRespectiveClients testimonials={testimonials} />}

            {technologies && <Technologies technologies={technologies} />}

            {posts && <PopularBlogPost blog={posts} />}

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
    const aboutYourself = await getHomeAboutYourself(); // Get Services
    const homeAbouthomeServices = await getHomeAbouthomeServices(); // Get Services
    const ourClients = await getOurClients(); // Get Our Clients
    const industries = await getIndustries(); // Get Industries
    const technologies = await getTechnologies(); // Get Industries
    const parallaxInfo = await getParallaxSectionInfo(); // Get Our Clients
    const contactUsInfo = await getContactUsInfo();
    const homeMeta = await getHomePageMeta();

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
            contactUsInfo,
            homeMeta,
            homeAbouthomeServices
        },
        revalidate: 10, // In seconds
    };
}