import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterAdminComponent } from './components/admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { AdminLayoutsComponent } from './pages/admin-layouts/admin-layouts.component';
import { ClientLayoutsComponent } from './pages/client-layouts/client-layouts.component';
import { HelloComponent } from './pages/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    AdminLayoutsComponent,
    ClientLayoutsComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
