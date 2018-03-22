const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withCSS = require('@zeit/next-css')

const nextConfig = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = withPlugins(
  [
    [withCSS, {}],
    [
      optimizedImages,
      {
        optimizeImagesInDev: true
      }
    ]
  ],
  nextConfig
)
