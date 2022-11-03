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

    return (
        <>
            <DefaultSeo {...SEO} />

            {children}

            {/* {loader ? <Preloader /> : null} */}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            <WhatsApp scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;