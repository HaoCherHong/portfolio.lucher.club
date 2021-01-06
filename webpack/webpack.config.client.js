const webpack = require('webpack');
const path = require('path');
const { StatsWriterPlugin } = require("webpack-stats-plugin")

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

/** @type {webpack.Configuration} */
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    main: [
      './src/index.js',
      isDev && 'webpack-hot-middleware/client',
    ].filter(Boolean),
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isProd && new StatsWriterPlugin({
      fields: ['assetsByChunkName', 'publicPath', 'outputPath'],
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
            }
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]--[hash:base64:5]',
              camelCase: true
            }
          }
        ]
      },
    ].filter(Boolean),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
