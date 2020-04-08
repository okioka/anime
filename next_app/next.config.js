// なんかうまくいかない

const withSass = require('@zeit/next-sass')

module.exports =
withSass({
  cssModules: true,
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  }
})
