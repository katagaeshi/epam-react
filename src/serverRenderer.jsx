// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {
  JssProvider,
  SheetsRegistry,
} from 'react-jss';
import Root from './../public/components/ui/Root';
import configureStore from './../public/store';
import initialState from './../public/store/initialState.json';

function renderHTML(
  html: string,
  sheets: string,
  preloadedState: string,
  mode: string,
) {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Homework #7</title>
          <style type="text/css" id="server-side-styles">
            ${sheets}
          </style>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${preloadedState};
            const mode = "${mode}";
            window.mode = mode;
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (
    req: {
      url: string
    },
    res: {
      writeHead: (
        code: number,
        headers: {}
      ) => {},
      end: () => {},
      send: (renderedHtml: string) => {},
    },
  ) => {
    const { store } = configureStore(initialState);
    const context = {};
    const sheets = new SheetsRegistry();

    const root = (
      <JssProvider
        registry={sheets}
      >
        <Root
          location={req.url}
          context={context}
          Router={StaticRouter}
          store={store}
        />
      </JssProvider>
    );

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(root);
    const renderedHtml = renderHTML(
      htmlString,
      sheets.toString(),
      JSON.stringify(store.getState()).replace(/</g, '\\u003c'),
      (process && process.env && process.env.NODE_ENV) || 'production',
    );
    console.log('rendered html: ', renderedHtml);
    res.send(renderedHtml);
  };
}
