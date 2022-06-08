import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from 'src/app/layouts/customer/customer-layout/customer-layout.component';
import { HomePagesComponent } from './home-pages/home-pages.component';

const routes: Routes = [{path: "", component: CustomerLayoutComponent, children: [
  {path: "", component: HomePagesComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
