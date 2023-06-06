import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from './config';
import App from './App';

const onRedirectCallback = (appState) => {
  // Redirect logic here
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider {...providerConfig}>

      <App />

  </Auth0Provider>,
);


