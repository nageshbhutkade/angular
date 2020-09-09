import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesModule } from './courses/courses.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { EmplyeeserviceService } from './auth/employeeservice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesModule,
    ProductsModule,
    StaticpagesModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [EmplyeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
