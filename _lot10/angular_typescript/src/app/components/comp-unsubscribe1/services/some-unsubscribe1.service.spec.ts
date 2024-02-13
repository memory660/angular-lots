import { TestBed } from '@angular/core/testing';

import { SomeUnsubscribe1Service } from './some-unsubscribe1.service';

describe('SomeUnsubscribe1Service', () => {
  let service: SomeUnsubscribe1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeUnsubscribe1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
