import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorkProcess from '../components/Common/WorkProcess';
import CTA from '../components/Common/CTA';
import ServicesDetailsContent from '../components/ServicesDetails/ServicesDetailsContent';
import Footer from '../components/_App/Footer';
import ErrorPage from 'next/error';

import { getContactUsInfo, getService } from '../utils/strapi';

const ServicesDetails = ({ service, contactUsInfo }) => {
    console.log("service-----------", service.data[0].heading)
    if (!service.data) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <>
            {
                (service.data.length == 0)
                    ?
                     <ErrorPage statusCode={404} />
                    :
                    <>
                        <Navbar />

                        <PageBanner
                            pageTitle={service.data[0].heading}
                            homePageUrl="/"
                            homePageText="Home"
                            activePageText={service.data[0].heading}
                        />

                        <ServicesDetailsContent service={service.data[0]} />

                        <WorkProcess />

                        <div className="ptb-100">
                            <CTA />
                        </div>

                        {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}

                    </>
            }

        </>
    )
}

export default ServicesDetails;

export async function getServerSideProps({ params, res }) {
    try {
        const contactUsInfo = await getContactUsInfo();
        const service = await getService(params.service);
        return { 
            props: {
                contactUsInfo: contactUsInfo,
                service: service
            }
        }

    } catch (error) {
        res.statusCode = 404
        return {
            props: {
                service: {}
            }
        }
    }

}