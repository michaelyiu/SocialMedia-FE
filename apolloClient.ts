import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://social-media-be-gules.vercel.app/graphql/',
  cache: new InMemoryCache(),
});

export default client