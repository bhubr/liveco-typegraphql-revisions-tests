import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import BookResolver from './book-resolver';

async function createServer(): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [BookResolver],
  });
  return new ApolloServer({ schema });
}

export default createServer;
