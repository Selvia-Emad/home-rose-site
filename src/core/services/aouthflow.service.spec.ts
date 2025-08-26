import { TestBed } from '@angular/core/testing';

import { AouthflowService } from './aouthflow.service';

describe('AouthflowService', () => {
  let service: AouthflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AouthflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
