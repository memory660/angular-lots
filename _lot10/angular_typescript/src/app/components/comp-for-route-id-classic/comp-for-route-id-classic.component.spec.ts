import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompForRouteIdClassicComponent } from './comp-for-route-id-classic.component';

describe('CompForRouteIdClassicComponent', () => {
  let component: CompForRouteIdClassicComponent;
  let fixture: ComponentFixture<CompForRouteIdClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompForRouteIdClassicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompForRouteIdClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
