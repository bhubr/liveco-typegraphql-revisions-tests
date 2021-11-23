import { Mutation, Query, Resolver, Arg, ID } from "type-graphql";
import BookStore from "./book-store";
import { Book } from "./types";

@Resolver()
class BookResolver {
    @Query((returns) => [Book])
    books() {
        const books = BookStore.findAll();
        return books;
    }

    @Query((returns) => Book)
    singleBook(@Arg("id", (type) => ID) id: string) {
        return BookStore.books.find((book) => {
            return book.id.toString() === id;
        });
    }

    @Mutation((returns) => Book)
    addBook(@Arg("title") title: string, @Arg("author") author: string) {
        const newBook = BookStore.create({ title, author });
        return newBook;
    }

    @Mutation((returns) => Book)
    editBook(
        @Arg("id", (type) => ID) id: string,
        @Arg("title") title: string,
        @Arg("author") author: string
    ) {
        const newBook = BookStore.update(Number(id), { title, author });
        return newBook;
    }
}

export default BookResolver;
