import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterAdminComponent } from './components/admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { AdminLayoutsComponent } from './pages/admin-layouts/admin-layouts.component';
import { ClientLayoutsComponent } from './pages/client-layouts/client-layouts.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SidebarAdminComponent } from './components/admin/sidebar-admin/sidebar-admin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ModalDetailsComponent } from './components/admin/modal-details/modal-details.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    AdminLayoutsComponent,
    ClientLayoutsComponent,
    ProductsComponent,
    ProductDetailComponent,
    AddProductComponent,
    SidebarAdminComponent,
    NotFoundComponent,
    ModalDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
