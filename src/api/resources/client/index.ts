import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { GRAPHQL_BASE_URL } from '../configs/URL';
import { SESSION_STORAGE } from '../../../common/constants/sessionStorage';

const link = createHttpLink({
  uri: GRAPHQL_BASE_URL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem(SESSION_STORAGE.TOKEN)}`
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export { client };
