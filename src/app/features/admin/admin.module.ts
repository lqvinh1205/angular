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
import { BlogAddComponent } from './blogs/blog-add/blog-add.component';
import { BlogUpdateComponent } from './blogs/blog-update/blog-update.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { InfomationComponent } from './infomation/infomation.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProductsUpdateComponent,
    ProjectUpdateComponent,
    ProjectAddComponent,
    ProjectListComponent,
    BlogAddComponent,
    BlogUpdateComponent,
    BlogListComponent,
    InfomationComponent,
    ContactListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AntdDesignModule,
    ReactiveFormsModule, //Add if needed
    FormsModule,
    CKEditorModule
  ],
})
export class AdminModule {}
