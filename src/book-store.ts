import { Book } from './types';

const BookStore = {
  books: [
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
  ],

  nextId: 3,

  // findAll() renvoie tous les livres
  findAll() {
    return this.books;
  },

  // create() crée un livre
  create({ title, author }: { title: string, author: string }) {
    const newBook = { title, author, id: this.nextId };
    this.nextId++;
    this.books.push(newBook);
    return newBook
  }
}

export default BookStore;
