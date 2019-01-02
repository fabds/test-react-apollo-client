import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

// Import app and client
import App from './App';
import client from './client';

//import registerServiceWorker from './registerServiceWorker';

// App with apollo client
const appWithApolloClient = (
    <ApolloProvider client={client}><App /></ApolloProvider>
);

// Inject app with apollo to DOM
ReactDOM.render(appWithApolloClient,document.getElementById('root'));

//registerServiceWorker();
