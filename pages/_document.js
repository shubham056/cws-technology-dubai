import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";
class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/manifest.json" rel="manifest" />
                    <link rel="apple-touch-icon" href="/images/logo.png"></link>
                    <meta name="theme-color" content="#093653" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/images/favicon.ico"
                    ></link>
                    <script src="https://www.google.com/recaptcha/api.js?render=6LehBL0gAAAAAHyuJu1qPCWPxAKAGnwoCfHcTD6j" />
                    <script  src="/js/googleTagManager.js" />
                </Head>
                <body>
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K674W23" style={{ display: 'none', visibility: 'hidden' }} height="0" width="0"></iframe></noscript>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;