import { Component } from '@angular/core';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  searchText: any;
  employees: Employee[] = [
    {
      id: 0,
      name: 'Andy',
      title: 'Engineer',
    },
    {
      id: 1,
      name: 'Scott',
      title: 'Director',
    },
    {
      id: 2,
      name: 'Jon',
      title: 'Tech Lead',
    },
  ];

  isVisible = true;
  counter = 3;

  hideList() {
    this.isVisible = !this.isVisible;
  }

  addEmployee(name: string, title: string) {
    this.employees.push({
      id: this.counter,
      name: name,
      title: title,
    });
    this.counter++;
    // console.log(this.employees);
  }

  removeEmployee(id: number) {
    this.employees = this.employees.filter((item) => item.id !== id);
    // console.log('Remove list ID #' + id);
  }
}
