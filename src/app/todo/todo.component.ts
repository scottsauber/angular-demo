import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  loadTodos: Todo[] = [];

  constructor(private api: TodoService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }
  getAllTodos(): void {
    this.api.getTodos().subscribe((todo) => {
      this.loadTodos = todo;
    });
  }
}
