import express from 'express';
import { Book } from './types';

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// tableau faisant office de DB
const books: Book[] = [];
let nextId = 1;

app.get('/books', (req, res) => {
  res.send(books);
});

app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.id = nextId;
  nextId++;
  books.push(newBook);
  res.send(newBook);
});

app.listen(port, () => console.log(`listening on ${port}`))