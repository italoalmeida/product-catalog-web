import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import React from "react";
import Catalog from "./pages/Catalog";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const cache = new InMemoryCache();

  const link: ApolloLink = createHttpLink({
    uri: "http://localhost:3333/graphql",
  });

  const client = new ApolloClient({
    cache,
    link,
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Catalog />
      </ApolloProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
