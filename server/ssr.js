import ReactDOMServer from 'react-dom/server';
import {MemoryRouter} from 'react-router';
import React from 'react';

import App from '../src/App';

const description = 'Works and projects by Hao-Cher Hong. Showing and describing the works done by Hao-Cher Hong, including websites, games, tools, etc., and featuring the highlights of the works. 洪晧哲的作品集，描述並展示洪晧哲的網站、遊戲、工具等作品，並描述了每個專案的特色。';


/**
 * @type {(any) => import('express').RequestHandler}
 */
const ssr = clientStats => (req, res) => {
  clientStats = clientStats || res.locals.webpackStats.toJson().children[0];
  const app = (
    <html lang="en-US">
      <head>
        <title>Portfolio - Hao-Cher Hong</title>
        <meta name="Description" content={description} />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:title" content="Portfolio - Hao-Cher Hong" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.lucher.club/" />
        <meta property="og:image" content="https://portfolio.lucher.club/images/og_image.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png"/>
      </head>
      <body>
        <div id="app">
          <MemoryRouter initialEntries={[req.path]}>
            <App/>
          </MemoryRouter>
        </div>
        {
          Object.values(clientStats.assetsByChunkName).map(value => {
            const assets = Array.isArray(value) ? value : [value];
            return (
              <>
                {assets.map(asset => <script src={clientStats.publicPath + asset}/>)}
              </>
            );
          })
        }
      </body>
    </html>
  );
  const html = '<!DOCTYPE html>' + ReactDOMServer.renderToString(app);
  res.send(html);
};

export default ssr;