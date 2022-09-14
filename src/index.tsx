import React, { Suspense } from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';

import { PokemonsProvider } from 'context/PokemonsContext';

import GraphQLClient from 'services/GraphQL';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ApolloProvider client={GraphQLClient}>
        <PokemonsProvider>
          <App />
        </PokemonsProvider>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
);
