import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './../public/components/ui/Root';
import configureStore from './../public/store';
import initialState from './../public/store/initialState.json';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Homework #7</title>
          <link href="/css/main.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const { store } = configureStore(initialState);
    const context = {};

    const root = (
      <Root
        location={req.url}
        context={context}
        Router={StaticRouter}
        store={store}
      />
    );

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(root);
    res.send(renderHTML(htmlString, store.getState()));
  };
}
