import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompForRouteIdSignalComponent } from './comp-for-route-id-signal.component';

describe('CompForRouteIdSignalComponent', () => {
  let component: CompForRouteIdSignalComponent;
  let fixture: ComponentFixture<CompForRouteIdSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompForRouteIdSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompForRouteIdSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
