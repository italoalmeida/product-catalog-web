import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/routes';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const cache = new InMemoryCache();

  const link: ApolloLink = createHttpLink({
    uri: 'http://localhost:3333/graphql',
  });

  const client = new ApolloClient({
    cache,
    link,
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Router history={history}>
          <Routes />
        </Router>
      </ApolloProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
