import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { EmployeeComponent } from './employee/employee.component';
import { PhotosComponent } from './photos/photos.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'demo1', component: Demo1Component },
  { path: 'photos', component: PhotosComponent },
  { path: 'blogs', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
