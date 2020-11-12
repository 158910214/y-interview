const path = require('path')

const resolve = (paths) => path.join(__dirname, paths)

module.exports = {
  chainWebpack: (config) => config.resolve.alias.set('@', resolve('src'))
}
