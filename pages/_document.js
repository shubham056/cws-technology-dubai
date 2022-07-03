import Document, { Html, Head, Main, NextScript } from 'next/document';
let config = {
    phone :"971529910891",
    call :"Message Us",
    position :"ww-right",
    size : "ww-normal",
    text : "",
    type: "ww-extended",
    brand: "",
    subtitle: "",
    welcome: ""
    };
class MyDocument extends Document {
    
    render() {
        return (
            <Html lang="english">
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
                     <script type="text/javascript" src="/js/whatsapp_script.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;