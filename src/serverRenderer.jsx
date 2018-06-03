import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import RunningTitle from './../public/components/ui/RunningTitle';

function renderHTML(html) {
  return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Homework #7</title>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const htmlString = renderToString(<RunningTitle />);
    res.send(renderHTML(htmlString));
  };
}
