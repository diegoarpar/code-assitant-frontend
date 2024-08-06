import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/App";
import recipeController from './middleware/controller';
import bodyParser from 'body-parser';

const expressApp = express();
expressApp.use(express.static('public'));
expressApp.use(bodyParser.json());

expressApp.get('*/home/*', (req, res) => {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} >
      <App />
  </StaticRouter>
  );
  res.send(
      `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>SSR React App</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`
  )
})




//Express Route
expressApp.post('/api/recipes', (req, res) => {
  
  async function getInfoAPI() {
    try {
      const imageUrl = await recipeController.getRecipes(req, res);
      //res.json(imageUrl); // Renderizamos la URL como JSON.
      return res.json(imageUrl.data);
    } catch (error) {
      return error;
    }
  }

  getInfoAPI();
});


expressApp.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});