import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from 'src/models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  loadPhotos: Photo[] = [];

  constructor(private api: PhotoService) {}

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.api.getPhotos('6').subscribe((photos) => {
      this.loadPhotos = photos;
    });
  }
}
