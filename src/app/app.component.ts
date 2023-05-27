import { Component } from '@angular/core';
import { IProduct } from './modals/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // onHandleAdd(product: any) {
  //   console.log(product);
  // }
  // productsList: IProduct[] = data;
  title = 'angular';
}
