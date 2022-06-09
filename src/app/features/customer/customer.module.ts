import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomePagesComponent } from './home-pages/home-pages.component';
import { BannerComponent } from './component/banner/banner.component';
import { RecentPostComponent } from './component/recent-post/recent-post.component';
import { MyProjectComponent } from './component/my-project/my-project.component';
import { WorkPagesComponent } from './work-pages/work-pages.component';
import { BlogPagesComponent } from './blog-pages/blog-pages.component';
import { WorkPagesDetailComponent } from './work-pages-detail/work-pages-detail.component';


@NgModule({
  declarations: [
    HomePagesComponent,
    BannerComponent,
    RecentPostComponent,
    MyProjectComponent,
    WorkPagesComponent,
    BlogPagesComponent,
    WorkPagesDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
