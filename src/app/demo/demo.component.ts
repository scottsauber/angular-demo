import { Component, OnInit } from '@angular/core';
import { Info } from 'src/info';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  info: Info[] = [
    {
      title: 'Iowa State Cyclones',
    },
    {
      title: 'Iowa Hawkeyes',
    },
    {
      title: 'Chicago Cubs',
    },
    {
      title: 'St. Louis Cardinals',
    },
    {
      title: 'Green Bay Packers',
    },
  ];

  headerVisible = true;
  listVisible = true;

  constructor() {}

  hideInfo() {
    this.headerVisible = !this.headerVisible;
  }
  hideList() {
    this.listVisible = !this.listVisible;
  }

  ngOnInit(): void {}
}
