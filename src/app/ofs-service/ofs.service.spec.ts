import { TestBed } from '@angular/core/testing';

import { OfsService } from './ofs.service';

describe('OfsService', () => {
  let service: OfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
