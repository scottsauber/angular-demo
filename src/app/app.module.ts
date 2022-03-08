import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { EmployeeComponent } from './employee/employee.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { BlogComponent } from './blog/blog.component';
import { PhotoComponent } from './photo/photo.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, EmployeeComponent, DemoComponent, Demo1Component, BlogComponent, PhotoComponent, SearchComponent, UserComponent, TodoComponent],
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
