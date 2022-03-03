import { Component } from '@angular/core';
import { Info } from 'src/models/info';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
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

  headerVisible: boolean = true;
  listVisible = true;

  hideInfo(): number {
    this.headerVisible = !this.headerVisible;
    return 3;
  }
  hideList(): void {
    this.listVisible = !this.listVisible;
  }
}
