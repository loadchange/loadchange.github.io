const path = require('path')
const base = require('./webpack.base.conf')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = Object.assign({}, base, {
  devtool: "cheap-source-map",
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {
      root: path.resolve(__dirname, '../')
    }),
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "/css/[id].[hash:8].css"
    })
  ],
  mode: 'production'
})
