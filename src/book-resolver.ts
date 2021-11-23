import { Mutation, Query, Resolver, Arg } from "type-graphql";
import BookStore from "./book-store";
import { Book } from "./types";

@Resolver()
class BookResolver {

  @Query(returns => [Book])
  books() {
    const books = BookStore.findAll();
    return books;
  }

  @Mutation(returns => Book)
  addBook(
    @Arg('title') title: string,
    @Arg('author') author: string
  ) {
    const newBook = BookStore.create({ title, author });
    return newBook;
  }
}

export default BookResolver;