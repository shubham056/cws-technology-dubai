import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/images/favicon.ico"
                    ></link>
                    <script src="https://www.google.com/recaptcha/api.js?render=6LehBL0gAAAAAHyuJu1qPCWPxAKAGnwoCfHcTD6j"></script>
                    <script src="/js/googleTagManager.js"></script>
                </Head>
                <body>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K674W23" style={{display:'none',visibility:'hidden'}} height="0" width="0"></iframe></noscript>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;