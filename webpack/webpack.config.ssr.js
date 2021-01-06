const webpack = require('webpack');
const path = require('path');
const { StatsWriterPlugin } = require("webpack-stats-plugin")

const isProd = process.env.NODE_ENV === 'production';

/** @type {webpack.Configuration} */
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    ssr: [
      './server/ssr.js',
    ],
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../dist/ssr'),
    libraryTarget: 'commonjs',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    isProd && new StatsWriterPlugin({
      fields: ['assetsByChunkName', 'publicPath'],
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: path.resolve(__dirname, '../ssr-babel-config.js'),
          }
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
    ].filter(Boolean),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
