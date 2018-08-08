import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionControlComponent } from './admin-section-control.component';

describe('AdminSectionControlComponent', () => {
  let component: AdminSectionControlComponent;
  let fixture: ComponentFixture<AdminSectionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSectionControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSectionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
