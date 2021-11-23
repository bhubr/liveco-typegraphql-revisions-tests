import { gql } from 'apollo-server';
import BookStore from './book-store';

// REMPLACE PAR TypeGraphQL

export const typeDefs = gql`
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

type AddBookFields = { title: string, author: string };

export const resolvers = {
  Query: {
    books: () => BookStore.findAll(),
  },
  Mutation: {
    addBook: (_: any, { title, author }: AddBookFields) => {
      const newBook = BookStore.create({ title, author });
      return newBook;
    }
  }
};