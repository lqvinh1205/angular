import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.css']
})
export class InfomationComponent implements OnInit {
  myForm = this.FormBuilder.group({
    name: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
    technical: ['', Validators.required],
    images: ['', Validators.required],
    description: ['', Validators.required],
    createAt: '',
  });
  constructor(private FormBuilder: FormBuilder) { }
  validation_messages = {
    name: [
      { type: 'required', message: 'Đây là trường bắt buộc' },
      { type: 'minlength', message: 'Độ dài tối thiểu 5 ký tư' },
    ],
    images: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
    description: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
    technical: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
  };
  ngOnInit(): void {
  }
  submitHandler() {

  }
}
