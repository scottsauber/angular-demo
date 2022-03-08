import { HttpClientModule } from '@angular/common/http';
import { render, screen } from '@testing-library/angular';
import { of } from 'rxjs';
import { Todo } from 'src/models/todo';

import { TodoService } from '../services/todo.service';
import { TodoComponent } from './todo.component';

let component: any;
const displayBlogs = async () => {
  component = await render(TodoComponent, {
    declarations: [],
    imports: [HttpClientModule],
  });
};

describe('Todo', () => {
  const service = jest.spyOn(TodoService.prototype, 'getTodos');

  const todos: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: 'false',
    },
  ];

  it('should display items of TodoService', async () => {
    service.mockReturnValue(of(todos));
    await displayBlogs();
    const actual = await screen.findByText('delectus aut autem');
    expect(actual).toBeTruthy();
  });
});
