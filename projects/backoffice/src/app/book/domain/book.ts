import { Title } from "./vo/title";

interface Book {
  title: string;
  author: string;
}

type Books = Book[];

export class BookItem {
  title: Title;
  author: string;

  constructor(title: Title, author: string) {
    this.title = title;
    this.author = author;
  }

  validateTitle(title: string) {
    if(title.length < 15) {
      // console.log('title', title);
      throw new Error("El título debe tener al menos 15 caracteres");
    }
  }
}
