import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Link from 'next/link';
import WorkProcess from '../../components/Common/WorkProcess';
import TechSupport from '../../components/Common/TechSupport';
import CTA from '../../components/Common/CTA';
import Footer from '../../components/_App/Footer';
import Services from '../../components/HomeDemoOne/Services';
import Router, {withRouter,useRouter  } from 'next/router'


import {getAllServices, getParallaxSectionInfo, getContactUsInfo} from '../../utils/strapi';

const ServicesIndex = ({ services, parallaxInfo, contactUsInfo, pageCount, currentPage }) => {

    const router = useRouter();
    const pagginationHandler = (page) => {
        //console.log('page',page)
        const currentPath = router.pathname;
        const currentQuery = router.query;
        currentQuery.page = page.selected + 1;
        //console.log('currentQuery',currentQuery,currentPath)

        router.push({
            pathname: currentPath,
            query: currentQuery,
        });

    };


    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services"
            /> 
             
            {services &&  <Services services={services} pageCount={pageCount} currentPage={currentPage} pagginationHandler={pagginationHandler} /> }

            <div className="pb-100">
                <WorkProcess />
            </div>
            
           {parallaxInfo && <TechSupport parallaxInfo={parallaxInfo} />}
            
            <div className="ptb-100">
                <CTA />
            </div>

			{contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
		</>
    )
}

export default ServicesIndex;

export async function getServerSideProps({ query: {page = 1 }  }) {

    const services = await getAllServices(page); // Get Services
    const parallaxInfo = await getParallaxSectionInfo();
    const contactUsInfo = await getContactUsInfo();

    return {
        props: {
            services,
            parallaxInfo,
            contactUsInfo,
            totalCount: services.meta.pagination.total,
            pageCount: services.meta.pagination.pageCount,
            currentPage: services.meta.pagination.page,
            perPage: 3,
        },
        //revalidate: 10, // In seconds
    };
}