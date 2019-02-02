const base = require('./webpack.base.conf');

module.exports = Object.assign({}, base, {
  devServer: {
    port: 9015,
    disableHostCheck: true,
  },
  mode: 'development',
})
