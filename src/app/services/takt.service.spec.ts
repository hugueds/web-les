import { TestBed } from '@angular/core/testing';

import { TaktService } from './takt.service';

describe('TaktService', () => {
  let service: TaktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
