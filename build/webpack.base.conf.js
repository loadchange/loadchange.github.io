const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV !== 'production'
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    path: resolve('dist'),
    publicPath: isDev ? '/' : 'dist/',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'ts', 'tsx', '.scss']
  },
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.(js|jsx|ts|tsx)$/,
      use: ['babel-loader?cacheDirectory'],
      exclude: /node_modules/,
    }, {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: 'url-loader',
      options: {
        limit: isDev ? 0 : 10000,
        name: '/images/[name].[hash:8].[ext]',
      },
    }, {
      test: /\.(ttf|woff|svg|eot)$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: '/fonts/[name].[hash:8].[ext]',
        },
      }],

    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      entryName: 'index',
      filename: isDev ? 'index.html' : '../index.html',
      template: './src/index.html',
      dev: isDev,
      minify: !isDev,
    })
  ],
};
