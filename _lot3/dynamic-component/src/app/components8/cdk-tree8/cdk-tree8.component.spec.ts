import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTree8Component } from './cdk-tree8.component';

describe('CdkTree8Component', () => {
  let component: CdkTree8Component;
  let fixture: ComponentFixture<CdkTree8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkTree8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkTree8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
