import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginContainerComponent } from './plugin-container.component';

describe('PluginContainerComponent', () => {
  let component: PluginContainerComponent;
  let fixture: ComponentFixture<PluginContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PluginContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PluginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
