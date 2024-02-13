import { TestBed } from '@angular/core/testing';
import { Unsubscriber1Service } from './unsubscriber1.service';


describe('Unsubscribe1Service', () => {
  let service: Unsubscriber1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Unsubscriber1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
