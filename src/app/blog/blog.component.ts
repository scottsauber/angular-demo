import { Component, OnInit } from '@angular/core';

import { Blog } from 'src/models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  loadBlogs: Blog[] = [];

  constructor(private api: BlogService) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.api.getBlogs().subscribe((blog) => {
      this.loadBlogs = blog;
    });
  }
}
