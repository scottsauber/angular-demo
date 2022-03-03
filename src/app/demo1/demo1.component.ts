import { Component, EventEmitter, Output } from '@angular/core';
import { ListInfo } from 'src/models/listInfo';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
})
export class Demo1Component {
  list: ListInfo[] = [
    {
      id: 0,
      team: 'Chicago Bears',
      sport: 'Football',
    },
    {
      id: 1,
      team: 'Chicago Cubs',
      sport: 'Baseball',
    },
    {
      id: 2,
      team: 'Chicago Bulls',
      sport: 'Basketball',
    },
    {
      id: 3,
      team: 'Minnesota Vikings',
      sport: 'Football',
    },
    {
      id: 4,
      team: 'Minnesota Wild',
      sport: 'Hockey',
    },
    {
      id: 5,
      team: 'Denver Broncos',
      sport: 'Football',
    },
  ];

  searchText: string = '';

  onSearchTextEntered(searchValue: string): void {
    this.searchText = searchValue;
    // console.log(this.searchText);
  }

  removeRow(id: number): void {
    this.list = this.list.filter((item) => item.id !== id);
    // console.log(`Remove list ID #${id}`);
  }
}
