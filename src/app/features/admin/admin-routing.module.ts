import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from 'src/app/layouts/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsAddComponent } from './products/products-add/products-add.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsUpdateComponent } from './products/products-update/products-update.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'products',
        children: [
          { path: '', component: ProductsListComponent },
          { path: 'add', component: ProductsAddComponent },
          { path: 'edit/:id', component: ProductsUpdateComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
