const base = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = Object.assign({}, base, {
  devServer: {
    port: 9015,
    disableHostCheck: true,
  },
  plugins: [
    ...base.plugins,
    new CopyWebpackPlugin([{
      from: 'src/data',
      to: 'dist/data',
      toType: 'dir'
    }])
  ],
  mode: 'development',
})
