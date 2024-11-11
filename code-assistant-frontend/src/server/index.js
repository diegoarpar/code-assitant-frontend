import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/App";
import suggestionController from './middleware/suggestionController';
import logsController from './middleware/logsController';
import tokenController from './middleware/tokenController';
import feedbaclController from './middleware/feedbaclController';
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
      <title>Code Assistant AI</title>
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
      const imageUrl = await suggestionController.getRecipes(req, res);
      //res.json(imageUrl); // Renderizamos la URL como JSON.
      return res.json(imageUrl.data);
    } catch (error) {
      return error;
    }
  }

  getInfoAPI();
});

//Express Route
expressApp.post('/api/token', (req, res) => {
  
  async function getToken() {
    try {
      const imageUrl = await tokenController.getRecipes(req, res);
      //res.json(imageUrl); // Renderizamos la URL como JSON.
      return res.json(imageUrl.data);
    } catch (error) {
      return error;
    }
  }

  getToken();
});


//Express Route
expressApp.post('/api/logs', (req, res) => {
  
  async function getToken() {
    try {
      const imageUrl = await logsController.getRecipes(req, res);
      //res.json(imageUrl); // Renderizamos la URL como JSON.
      return res.json(imageUrl.data);
    } catch (error) {
      return error;
    }
  }

  getToken();
});

//Express Route
expressApp.post('/api/feedback', (req, res) => {
  
  async function getToken() {
    try {
      const imageUrl = await feedbaclController.getRecipes(req, res);
      //res.json(imageUrl); // Renderizamos la URL como JSON.
      return res.json(imageUrl.data);
    } catch (error) {
      return error;
    }
  }

  getToken();
});

expressApp.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});