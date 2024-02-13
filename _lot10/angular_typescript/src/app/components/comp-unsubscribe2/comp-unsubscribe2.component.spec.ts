import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUnsubscribe2Component } from './comp-unsubscribe2.component';

describe('CompUnsubscribe2Component', () => {
  let component: CompUnsubscribe2Component;
  let fixture: ComponentFixture<CompUnsubscribe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompUnsubscribe2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompUnsubscribe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
