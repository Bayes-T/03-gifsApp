import { TestBed } from '@angular/core/testing';

import { GifServiceTsService } from './gifs.service';

describe('GifServiceTsService', () => {
  let service: GifServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
