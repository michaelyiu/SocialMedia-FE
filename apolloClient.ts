import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: 'https://social-media-be-gules.vercel.app/graphql/'
})

const authLink = setContext(async (_, { headers }) => {
  const token = JSON.parse(await AsyncStorage.getItem('token') || '')

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client