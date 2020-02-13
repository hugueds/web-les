import { TestBed } from '@angular/core/testing';

import { LesService } from './les.service';

describe('LesService', () => {
  let service: LesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
