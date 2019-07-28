const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
const publicPath = process.env.NODE_ENV === 'procution' ? '/' : '/'

module.exports = {
  lintOnSave: true,
  publicPath,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
