import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

import "bootstrap/dist/css/bootstrap.min.css"

const client_id = process.env.REACT_APP_CLIENTID
const domain = process.env.REACT_APP_DOMAIN
console.log(client_id)
console.log(domain)
ReactDOM.render(
  <Auth0Provider
    clientId={client_id}
    domain={domain}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

