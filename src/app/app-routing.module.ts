import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminLayoutsComponent } from './pages/admin-layouts/admin-layouts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutsComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: AddProductComponent },
      { path: 'products/:id', component: ProductDetailComponent },
    ],
  },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
