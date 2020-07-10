import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOrderAssignDriverComponent } from './schedule-order-assign-driver.component';

describe('ScheduleOrderAssignDriverComponent', () => {
  let component: ScheduleOrderAssignDriverComponent;
  let fixture: ComponentFixture<ScheduleOrderAssignDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOrderAssignDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOrderAssignDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
