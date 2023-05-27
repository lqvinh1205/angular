import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BlogsService } from 'src/app/services/blogs.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-pages',
  templateUrl: './contact-pages.component.html',
  styleUrls: ['./contact-pages.component.css'],
})
export class ContactPagesComponent implements OnInit {
  myForm = this.FormBuilder.group({
    name: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    phone: ['', Validators.required],
    content: ['', Validators.required],
    createAt: '',
  });

  validation_messages = {
    name: [
      { type: 'required', message: 'Đây là trường bắt buộc' },
      { type: 'minlength', message: 'Độ dài tối thiểu 5 ký tư' },
    ],
    email: [
      { type: 'required', message: 'Đây là trường bắt buộc' },
      { type: 'email', message: 'Định dạng là email' },
    ],
    phone: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
    content: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
  };
  constructor(
    private FormBuilder: FormBuilder,
    private ContactsService: ContactsService,
    private ModalConfirm: NzModalService,
    private notification: NzNotificationService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  submitHandler() {
    this.ModalConfirm.confirm({
      nzTitle: 'Bạn có chắc muốn gửi thông tin ?',
      nzOkText: 'Xác nhận',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.ContactsService.createContact({
          ...this.myForm.value,
          createAt: Date(),
        }).subscribe(() => {
          this.notification.success('Thông báo', 'Gửi thông tin thành công');
        });
      },
    });
  }
}
