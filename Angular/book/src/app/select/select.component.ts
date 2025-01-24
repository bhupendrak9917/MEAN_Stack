import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  books = [
    { bookId: 1, bookName: 'Do Epic Shit', bookCost: 289 },
    { bookId: 2, bookName: 'Get Epic Shit Done', bookCost: 260 },
    { bookId: 3, bookName: 'ALchemist', bookCost: 259 },
    { bookId: 4, bookName: 'Rich Dad Poor Dad', bookCost: 350 }
  ]
  showCost: boolean = true
  toggleCost() {
    this.showCost = !this.showCost
  }
}
