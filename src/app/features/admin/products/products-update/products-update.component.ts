import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css'],
})
export class ProductsUpdateComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private ProductService: ProductsService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private notificationService: NzNotificationService,
    private modalService: NzModalService
  ) {}
  validation_messages = {
    name: [
      { type: 'required', message: 'Đây là trường bắt buộc' },
      { type: 'minlength', message: 'Độ dài tối thiểu 5 ký tư' },
      { type: 'maxlength', message: 'Độ dài tối đa 256 ký tự' },
    ],
    images: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
    price: [
      { type: 'min', message: 'Giá lớn hơn 0' },
      { type: 'required', message: 'Đây là trường bắt buộc' },
    ],
  };

  ngOnInit(): void {
    this.myForm = this.FormBuilder.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      price: [
        null,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      images: ['', Validators.required],
      id: null,
    });

    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.ProductService.getProduct(id).subscribe((data) => {
      this.myForm.setValue(data);
    });
  }
  submitHandler() {
    console.log(this.myForm.value);
    this.modalService.confirm({
      nzTitle: 'Bạn có chắc muốn xóa',
      nzOkText: "Xác nhận",
      nzCancelText: "Hủy",
      nzOnOk: () => {
        this.ProductService.updateProduct(this.myForm.value).subscribe(() => {
          this.router.navigateByUrl('/admin/products');
          this.notificationService.success('Thông báo', 'Cập nhật thành công');
        });
      },
    });
  }
}
