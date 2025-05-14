import { AppolloClient, InMemoryCache } from '@apollo/client';

const client = new AppolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

export default client;