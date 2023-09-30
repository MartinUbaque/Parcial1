import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import LoginMail from './components/login/Login-mail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locale-data/es";
import "bootstrap/dist/css/bootstrap.min.css";
import Carros  from './components/login/Carros'

const userLanguage = navigator.language || navigator.userLanguage;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={userLanguage}  messages= {localeEsMessages} >
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginMail />} />
            <Route path="/carros" element={<Carros />} />

          </Routes>
        </BrowserRouter>
  </React.StrictMode>
  </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
