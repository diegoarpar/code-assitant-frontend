import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from "react";
import App from './App';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const domNode = document.getElementById('root');

hydrateRoot(domNode, 
    <BrowserRouter>
    <App />
</BrowserRouter>
);
