const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ["localhost","cwsadmin.in"],
      }
}