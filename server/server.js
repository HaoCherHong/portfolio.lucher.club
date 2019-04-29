import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import {port} from './config.json';
import logger from './logger';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config');

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('dist'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})

app.use(function (err, req, res, next) {
  res.status(500).send({
    message: err.message
  });
  logger.error({
    req,
    res,
    body: req.body,
    session: req.session
  }, err.message);
})

app.listen(port, function () {
  logger.info(`Server is listening on port ${port}!\n`);
});