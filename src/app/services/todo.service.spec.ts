import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Todo } from 'src/models/todo';
import { TodoService } from './todo.service';

describe('Todo', () => {
  let injector: TestBed;
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService],
    });
    injector = getTestBed();
    service = injector.get(TodoService);
    httpMock = injector.get(HttpTestingController);
  });

  it('renders object with mock data', async () => {
    const todos: Todo[] = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: 'false',
      },
    ];

    service.getTodos().subscribe((x) => {
      expect(x).toEqual(todos);
    });
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/todos'
    );
    expect(req.request.method).toBe('GET');
    req.flush(todos);
  });
});
