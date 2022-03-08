import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  loadUsers: User[] = [];

  constructor(private api: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.api.getUsers().subscribe((users) => {
      console.log(users);
      this.loadUsers = users;
    });
  }
}
