import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSignal1Component } from './comp-signal1.component';

describe('CompSignal1Component', () => {
  let component: CompSignal1Component;
  let fixture: ComponentFixture<CompSignal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompSignal1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompSignal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
