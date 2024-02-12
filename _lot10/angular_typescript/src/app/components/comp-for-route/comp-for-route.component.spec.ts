import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompForRouteComponent } from './comp-for-route.component';

describe('CompForRouteComponent', () => {
  let component: CompForRouteComponent;
  let fixture: ComponentFixture<CompForRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompForRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompForRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
