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
  html,
  sheets,
  preloadedState,
) {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Homework #7</title>
          <style type="text/css" id="server-side-styles">
            ${sheets.toString()}
          </style>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            window.mode = ${process.env.NODE_ENV.toString()};
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
    const renderedHtml = renderHTML(htmlString, sheets, store.getState());
    console.log('rendered html: ', renderedHtml);
    res.send(renderedHtml);
  };
}
