import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'
import SEO from '../../next-seo-config';
import { DefaultSeo } from 'next-seo';

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 300);
    }, [])

    return(
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="CWS Technology is the best and leading web development company in India. We are among the top web development agency who provide website development services."/>
                <title>Best Web Development Company, Services in India | CWS Technology</title>
            </Head>
            <DefaultSeo {...SEO} />

            {children}

            {loader ? <Preloader /> : null}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;