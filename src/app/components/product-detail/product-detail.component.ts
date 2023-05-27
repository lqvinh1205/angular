import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/modals/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @Input() data !: IProduct
  product!: IProduct
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) { 
    const id = this.router.snapshot.paramMap.get("id")
    // this.productService.getProduct(id).subscribe(data => {
    //   this.product = data
    //   console.log(data);
    // })
   }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get("id")
    this.getProducts(id)
  }
  getProducts(id: any) {
    this.productService.getProduct(id).subscribe(data => {
      this.product = data
      console.log(data);
    })
  }

}
