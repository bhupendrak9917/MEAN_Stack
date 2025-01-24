import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { productId: 1, productName: 'Mobile', quantity: 10 },
    { productId: 2, productName: 'Laptop', quantity: 2 }
  ]
}
