import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
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
                    <script type="text/javascript">
                        {`var config = {
                            phone :" 971529910891",
                        call :"Message Us",
                        position :"ww-right",
                        size : "ww-normal",
                        text : "",
                        type: "ww-extended",
                        brand: "",
                        subtitle: "",
                        welcome: ""
    };
                        var proto = document.location.protocol, host = "cloudfront.net", url = proto + "//d3kzab8jj16n2f." + host;
                        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = url + "/v2/main.js";

                        s.onload = function () {tmWidgetInit(config)};
                        var x = document.getElementsByTagName("script")[0]; x.parentNode.insertBefore(s, x);
                    `}
                    </script>
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