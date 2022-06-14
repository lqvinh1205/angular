import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductElement } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css'],
})
export class ProductsAddComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
    private ProductService: ProductsService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    
  }
  submitHandler(formAdd: NgForm) {
    console.log(formAdd.value);
    
    this.ProductService.createProduct(formAdd.value).subscribe(() => {
      this.router.navigateByUrl('/admin/products');
    });
  }
}
