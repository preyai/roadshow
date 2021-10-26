const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const auth = require('@feathersjs/authentication-client');

const reactAppServerUrl = process.env.REACT_APP_SERVER_URL;

export const app = feathers();

// Connect to a different URL
const restClient = rest(reactAppServerUrl)

// Configure an AJAX library (see below) with that client 
app.configure(restClient.fetch(window.fetch));
app.configure(auth({ jwtStrategy: 'jwt', storage: localStorage }));
