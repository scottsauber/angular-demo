import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Blog } from 'src/models/blog';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  let injector: TestBed;
  let service: BlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });
    injector = getTestBed();
    service = injector.get(BlogService);
    httpMock = injector.get(HttpTestingController);
  });

  it('renders object with mock data', async () => {
    const blogs: Blog[] = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
    ];

    service.getBlogs('').subscribe((x) => {
      expect(x).toEqual(blogs);
    });
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(req.request.method).toBe('GET');
    req.flush(blogs);
  });
});
