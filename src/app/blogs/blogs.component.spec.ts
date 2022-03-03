import { HttpClientModule } from '@angular/common/http';
import { render, screen } from '@testing-library/angular';
import { of } from 'rxjs';
import { Blog } from 'src/models/blog';
import { BlogService } from '../services/blog.service';
import { BlogsComponent } from './blogs.component';

let component: any;
const displayBlogs = async () => {
  component = await render(BlogsComponent, {
    declarations: [],
    imports: [HttpClientModule],
  });
};

describe('Blogs', () => {
  const service = jest.spyOn(BlogService.prototype, 'getBlogs');

  const blogs: Blog[] = [
    {
      userId: 1,
      id: 1,
      title: 'Another feather in your cap!',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    },
  ];

  it('should display items of blogsService', async () => {
    service.mockReturnValue(of(blogs));
    await displayBlogs();
    const actual = await screen.findByText('Another feather in your cap!');
    expect(actual).toBeTruthy();
  });
});
