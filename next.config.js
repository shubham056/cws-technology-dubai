const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ['137.184.38.109',"cws-technology-spaces.nyc3.digitaloceanspaces.com"],
      }
}