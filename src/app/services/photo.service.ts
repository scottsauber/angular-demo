import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  url: string = 'https://jsonplaceholder.typicode.com/photos?albumId=';

  constructor(private http: HttpClient) {}

  getPhotos(albumId: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.url}${albumId}`);
  }
}
