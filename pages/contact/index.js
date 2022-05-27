import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';
import Footer from '../../components/_App/Footer';

import { getContactUsInfo } from '../../utils/strapi';

const ContactPage = ({ contactUsInfo }) => {
    return (
        <>
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
    return {
        props: {
            contactUsInfo
        },
        revalidate: 10, // In seconds
    }
}