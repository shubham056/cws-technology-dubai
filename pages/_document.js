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
                     <script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/4rwLQsl5N_ccppoTAwwwMrEN/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-o1nfdUm9cV7Sx6HxXDsnady1EGmCBTwza/JTA6OSowyOK+wq0YF0+F9jejHVacaR"></script>
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