import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsAddComponent } from './products/products-add/products-add.component';
import { ProductsUpdateComponent } from './products/products-update/products-update.component';
import { AntdDesignModule } from 'src/app/antd-design/antd-design.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectUpdateComponent } from './projects/project-update/project-update.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsUpdateComponent,
    ProjectUpdateComponent,
    ProjectAddComponent,
    ProjectListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AntdDesignModule,
    ReactiveFormsModule, //Add if needed
    FormsModule,
  ],
})
export class AdminModule {}
