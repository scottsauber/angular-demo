import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';

import { BlogComponent } from './blog/blog.component';
import { PhotoComponent } from './photo/photo.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'demo1', component: Demo1Component },
  { path: 'photos', component: PhotoComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'users', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
