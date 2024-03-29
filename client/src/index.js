import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store/index.js';
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
ReactDOM.render(
  <React.StrictMode>
   <Router>
    <Provider store= {store}>
       <App />
    </Provider>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);