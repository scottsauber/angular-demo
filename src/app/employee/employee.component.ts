import { Component } from '@angular/core';
import { Employee } from 'src/models/data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
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
      name: 'Jon',
      title: 'Tech Lead',
    },
    {
      id: 2,
      name: 'Scott',
      title: 'Director',
    },
  ];

  isVisible = true;
  counter = 3;

  ngOnInit(): void {
    this.logStuff();
  }

  logStuff() {
    console.log(this.searchText);
  }

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
    console.log(this.employees);
  }

  removeEmployee(id: number) {
    this.employees = this.employees.filter((item) => item.id !== id);
    console.log(`Remove list ID #${id}`);
  }
}
