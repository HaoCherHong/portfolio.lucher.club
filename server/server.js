import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import requireFromString from 'require-from-string';

import logger from './logger';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const clientConfig = require('../webpack/webpack.config.client');
  const ssrConfig = require('../webpack/webpack.config.ssr');

  const compiler = webpack([
    clientConfig,
    ssrConfig
  ]);
  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: clientConfig.output.publicPath,
    writeToDisk: false,
    serverSideRender: true,
  });
  const fs = devMiddleware.fileSystem;

  app.use(devMiddleware);

  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res) => {
    const ssrStats = res.locals.webpackStats.toJson().children[1];
    const ssrModulePath = path.resolve(ssrStats.outputPath, ssrStats.assetsByChunkName.ssr);
    const ssr = requireFromString(fs.readFileSync(ssrModulePath, 'utf8')).default;
    ssr()(req, res);
  })
} else {
  const clientStats = require(path.resolve(__dirname, '../dist/client/stats.json'));
  const ssrStats = require(path.resolve(__dirname, '../dist/ssr/stats.json'));
  const ssr = require(path.resolve(__dirname, '../dist/ssr/', ssrStats.assetsByChunkName.ssr)).default;
  app.use(express.static(clientStats.outputPath));
  app.get('*', ssr(clientStats));
}

app.use(function (err, req, res, next) {
  console.error(err.callstack)
  res.status(500).send({
    message: err.message
  });
  logger.error({
    req,
    res,
    body: req.body,
    session: req.session
  }, err);
})

const port = process.env.PORT || 8080;

app.listen(port, function () {
  logger.info(`Server is listening on port ${port}!\n`);
});