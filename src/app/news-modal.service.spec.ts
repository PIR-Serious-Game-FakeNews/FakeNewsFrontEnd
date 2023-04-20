import { TestBed } from '@angular/core/testing';

import { NewsModalService } from './news-modal.service';

describe('NewsModalService', () => {
  let service: NewsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
