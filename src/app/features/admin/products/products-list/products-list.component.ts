import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductElement } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  data: ProductElement[] = [];
  constructor(private ProductServices: ProductsService) { }

  ngOnInit(): void {
    this.ProductServices.getAllProducts().subscribe(data => this.data = data)
  }
  handlerRemove(id: any) {
    this.ProductServices.removeProduct(id).subscribe(data => {
      this.data = this.data.filter(item => item.id != id)
    })
  }

}
