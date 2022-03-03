import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getBlogs(userId: string): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url + userId);
  }
}
