import { Component } from '@angular/core';
import { BookItem } from './book/domain/book';
import { Title } from './book/domain/vo/title';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: BookItem[] = [
    new BookItem(new Title('El perfume: historia de un asesino'), 'Patrick Suskind'),
    new BookItem(new Title('La ciudad y los perros'), 'Mario Vargas Llosa'),
    new BookItem(new Title('El amor en los tiempos de colera'), 'Gabriel García Márquez'),
    new BookItem(new Title('El Caballero Carmelo'), 'Abraham Valdelomar'),

    // {
    //   title: "El perfume",
    //   author: "Patrick Suskind"},
    // {
    //   title: "La ciudad y los perros",
    //   author: "Mario Vargas Llosa"},
    // {
    //   title: "El amor en los tiempos de colera",
    //   author: "Gabriel García Márquez"},
    // {
    //   title: "El Caballero Carmelo",
    //   author: "Abraham Valdelomar"
    // },
  ]
  // title = 'El Perfume';
  // autor = 'Patrick Suskind';
  // title2 = 'La ciudad y los perros';
  // autor2 = 'Mario Vargas Llosa';

  // getTitle() {
  //   return this.title;
  // }
  deleteBook(book: BookItem){
    alert('Book deleted: ' + book.title.value);
  }
}
