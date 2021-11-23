import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql';

function createServer(): ApolloServer {
  return new ApolloServer({ typeDefs, resolvers });
}

export default createServer;
