import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql';

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 5000;

// The `listen` method launches a web server.
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});