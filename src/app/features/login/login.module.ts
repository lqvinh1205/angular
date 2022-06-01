import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AntdDesignModule } from 'src/app/antd-design/antd-design.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AntdDesignModule,
    FormsModule
  ]
})
export class LoginModule { }
