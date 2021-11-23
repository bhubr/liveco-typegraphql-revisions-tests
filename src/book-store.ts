import { Book } from "./types";

const BookStore = {
    books: [
        {
            id: 1,
            title: "The Awakening",
            author: "Kate Chopin",
        },
        {
            id: 2,
            title: "City of Glass",
            author: "Paul Auster",
        },
    ],

    nextId: 3,

    // findAll() renvoie tous les livres
    findAll() {
        return this.books;
    },

    // create() crée un livre
    create({ title, author }: { title: string; author: string }) {
        const newBook = { title, author, id: this.nextId };
        this.nextId++;
        this.books.push(newBook);
        return newBook;
    },

    update(
        bookIdToModified: number,
        { title, author }: { title: string; author: string }
    ) {
        const indexBookToModified = this.books.findIndex(
            (itemLoop) => itemLoop.id === bookIdToModified
        );

        if (indexBookToModified !== -1) {
            this.books[indexBookToModified] = {
                ...this.books[indexBookToModified],
                title,
                author,
            };
            return this.books[indexBookToModified];
        }
    },
};

export default BookStore;
