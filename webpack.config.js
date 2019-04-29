const defaults = require('./webpack/webpack.config.default.js');;
const merge = require('webpack-merge');

if (process.env.NODE_ENV === 'development')
  module.exports = merge([
    defaults,
    require('./webpack/webpack.config.dev.js')
  ]);
else if (process.env.NODE_ENV === 'production') 
  module.exports = merge([
    defaults,
    require('./webpack/webpack.config.prod.js')
  ]);
else
  throw new Error("NODE_ENV is not defined.");