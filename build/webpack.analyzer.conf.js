const base = require('./webpack.prod.conf')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = Object.assign({}, base, {
  plugins: [
    ...base.plugins,
    new BundleAnalyzerPlugin()
  ]
})
