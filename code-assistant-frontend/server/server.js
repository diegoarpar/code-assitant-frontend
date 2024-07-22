import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";
import recipeController from './middleware/controller';

const expressApp = express();



expressApp.get("/home/*", (req, res) => {
  const entryPoint = ["/main.js"];
  var rta = recipeController.getRecipes(req, res);
  console.log(">>>>>< "+ rta);
  const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: entryPoint,
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Loading...</p>");
      },
    }
  );
});

//Express Route
expressApp.get('/api/recipes', (req, res) => {
  var rta = recipeController.getRecipes(req, res);
  const entryPoint = ["/main.js"];
  debugger;
  <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: entryPoint,
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Loading...</p>");
      },
    }
});


expressApp.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});