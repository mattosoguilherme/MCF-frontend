import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App"
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3008/';
axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> 

    <App/>
    
    </BrowserRouter>
    
  </React.StrictMode>
);


