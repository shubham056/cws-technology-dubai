const withPWA = require('next-pwa')
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
module.exports = withPWA({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ["localhost", "cwsadmin.in"],
    },
    compress: true,
    //assetPrefix: isProd ? 'https://cdn.cwstechnology.ae' : '',
    crossOrigin: 'anonymous',
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,

    },
})