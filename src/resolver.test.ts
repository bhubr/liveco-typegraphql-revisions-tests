import { ApolloServer, gql } from 'apollo-server';
import { typeDefs, resolvers } from './graphql';

describe('test resolver', () => {

  describe('queries', () => {

    it('get all books', async () => {
      const server = new ApolloServer({ typeDefs, resolvers });

      const GET_BOOKS = gql`query Query {
        books {
          id
          title
          author
        }
      }
      `
      const result = await server.executeOperation({
        query: GET_BOOKS
      });
      expect(result.errors).toBeUndefined();
      expect(result.data?.books.length).toBe(2);
    });

  });

  describe('mutations', () => {

  });
});
