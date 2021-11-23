import { ApolloServer, gql } from 'apollo-server';
import { Book } from './types';

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;


// tableau faisant office de DB
const books: Book[] = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

let nextId = 3;

type AddBookFields = { title: string, author: string };

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_: any, { title, author }: AddBookFields) => {
      const newBook = { id: nextId, title, author };
      nextId++;
      books.push(newBook);
      return newBook;
    }
  }
};

// app.get('/books', (req, res) => {
//   res.send(books);
// });

// app.post('/books', (req, res) => {

//   res.send(newBook);
// });


const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 5000;

// The `listen` method launches a web server.
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});