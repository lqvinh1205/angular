import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/modals/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // @Input("products")  productsList!: IProduct[]
  productsList!: IProduct[]

  constructor( private productServices: ProductService) {
    this.productServices.getProductList().subscribe((data) => {
      this.productsList = data
    })
  }

  ngOnInit(): void {}
  handlerRemove(id: number) {
    this.productServices.removeProduct(id).subscribe(data => {
      this.productsList = this.productsList.filter(item => item.id != id) 
    })
  }
  onHandleGetInfo(id: number) {
    
  }
}
