const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/index.js', 'webpack-hot-middleware/client']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              camelCase: true
            }
          }
        ]
      }
    ]
  }
}