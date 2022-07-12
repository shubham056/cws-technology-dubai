import '../public/css/bootstrap.min.css'
import '../public/css/animate.min.css'
import '../public/css/remixicon.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-image-lightbox/style.css'
import 'react-tabs/style/react-tabs.css'
import '../public/css/style.css'
import '../public/css/responsive.css'

import Layout from '../components/_App/Layout';
import Script from "next/script";

const MyApp =  ({ Component, pageProps }) => {
    return (
        <>
        <Script strategy="lazyOnload" src="https://www.google.com/recaptcha/api.js?render=6LehBL0gAAAAAHyuJu1qPCWPxAKAGnwoCfHcTD6j" />

        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
        
    )
}

export default MyApp;