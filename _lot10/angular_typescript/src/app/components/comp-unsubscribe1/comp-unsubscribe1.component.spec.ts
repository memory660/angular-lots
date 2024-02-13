import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUnsubscribe1Component } from './comp-unsubscribe1.component';

describe('CompUnsubscribe1Component', () => {
  let component: CompUnsubscribe1Component;
  let fixture: ComponentFixture<CompUnsubscribe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompUnsubscribe1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompUnsubscribe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
