import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import WhatsApp from './WhatsApp'
import Preloader from './Preloader'
import SEO from '../../next-seo-config';
import { DefaultSeo } from 'next-seo';


const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 0);
    }, [])

    // const structuredData = [
    //     {
    //         "url": "https://www.cwstechnology.ae/",
    //         "logo": "https://www.cwstechnology.ae/images/logo.png",
    //         "name": "CWS Technology",
    //         "@type": "Organization",
    //         "sameAs": [
    //             "https://www.facebook.com/cwstechnology"
    //         ],
    //         "@context": "http://schema.org",
    //         "contactPoint": [
    //             {
    //                 "@type": "ContactPoint",
    //                 "telephone": "+971 529910891",
    //                 "contactType": "Business",
    //                 "availableLanguage": "English"
    //             }
    //         ],
    //         "alternateName": [
    //             "CWSTechnology"
    //         ]
    //     },
    //     {
    //         "url": "https://www.cwstechnology.ae/",
    //         "name": "CWS Technology",
    //         "@type": "Website",
    //         "@context": "http://schema.org",
    //         "alternateName": "CWSTechnology"
    //     }
    // ]

    return (
        <>
            {/* <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head> */}
            <DefaultSeo {...SEO} />

            {children}

            {loader ? <Preloader /> : null}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            <WhatsApp scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;