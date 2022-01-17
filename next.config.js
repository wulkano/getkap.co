module.exports = {
  async redirects() {
    return [
      {
        source: '/download',
        destination: '/api/download',
        permanent: true,
      },
      {
        source: '/button/install',
        destination: '/static/images/install.png',
        permanent: true,
      },
      {
        source: '/deep-link/install/:slug*',
        destination: 'kap://install-plugin/:slug*',
        permanent: true,
      },
      {
        source: '/deep-link/configure/:slug*',
        destination: 'kap://configure-plugin/:slug*',
        permanent: true,
      },
    ]
  }
}
