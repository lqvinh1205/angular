import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  name: string = '';
  price: number = 0;
  product: { name: string; price: number } = {
    name: '',
    price: 0,
  };
  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(formAdd: NgForm) {
    console.log(formAdd.value);

    this.productService
      .createProduct(formAdd.value)
      .subscribe(() => {
        this.router.navigateByUrl("admin/products")
      });
  }
}
