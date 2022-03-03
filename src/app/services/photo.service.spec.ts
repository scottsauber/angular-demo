import { Photo } from 'src/models/photo';
import { PhotoService } from './photo.service';
import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('PhotoService', () => {
  let injector: TestBed;
  let service: PhotoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoService],
    });
    injector = getTestBed();
    service = injector.get(PhotoService);
    httpMock = injector.get(HttpTestingController);
  });

  test('renders object with manual mock', async () => {
    const photos: Photo[] = [
      {
        albumId: 5,
        id: 201,
        title:
          'nesciunt dolorum consequatur ullam tempore accusamus debitis sit',
        url: 'https://via.placeholder.com/600/250289',
        thumbnailUrl: 'https://via.placeholder.com/150/250289',
      },
    ];

    service.getPhotos('5').subscribe((sub) => {
      expect(sub).toEqual(photos);
    });
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/photos?albumId=5'
    );
    expect(req.request.method).toBe('GET');
    req.flush(photos);
  });
});

// describe('PhotoService', () => {
//   let service;
//   let httpController;
//   beforeEach(async () => {
//     const photos = {
//       data: [
//         {
//           albumId: 5,
//           id: 201,
//           title:
//             'nesciunt dolorum consequatur ullam tempore accusamus debitis sit',
//           url: 'https://via.placeholder.com/600/250289',
//           thumbnailUrl: 'https://via.placeholder.com/150/250289',
//         },
//       ],
//     };
//   });

//   it('should call the get photos endpoint', () => {
//     const diffPhoto = [
//       '5 201 nesciunt dolorum consequatur ullam tempore accusamus debitis sit	https://via.placeholder.com/600/250289 	https://via.placeholder.com/150/250289',
//     ];
//     let response: Photo[];
//     service.service.getPhotos().subscribe((res) => (response = res));
//     httpController
//       .expectOne((request) => request.url === '/photos')
//       .flush(diffPhoto);
//     expect(response).toEqual(diffPhoto);
//   });

//   const testPhoto = async (listItem: string) => {
//     await render(PhotoService);
//     const actual = await screen.findByText(listItem);
//     expect(actual).toBeTruthy();
//   };

//   test('should render properties of the 1st object', async () => {
//     await testPhoto(
//       '5 201 nesciunt dolorum consequatur ullam tempore accusamus debitis sit	https://via.placeholder.com/600/250289 	https://via.placeholder.com/150/250289'
//     );
//   });
// });
