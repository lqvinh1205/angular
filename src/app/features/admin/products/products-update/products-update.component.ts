import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductElement } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css'],
})
export class ProductsUpdateComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private ProductService: ProductsService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      price: null,
      images: '',
      id: null
    });
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.ProductService.getProduct(id).subscribe((data) => {
      this.myForm.setValue(data);
    });
  }
  submitHandler() {
    console.log(this.myForm.value);

    this.ProductService.updateProduct(this.myForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/admin/products');
      }
    );
  }
}
