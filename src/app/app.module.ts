import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { EmployeeComponent } from './employee/employee.component';
import { Demo1Component } from './demo1/demo1.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { PhotosComponent } from './photos/photos.component';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    EmployeeComponent,
    Demo1Component,
    SearchComponent,
    HeaderComponent,
    PhotosComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
