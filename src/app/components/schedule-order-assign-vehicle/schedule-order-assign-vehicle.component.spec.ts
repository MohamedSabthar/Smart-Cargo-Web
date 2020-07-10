import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOrderAssignVehicleComponent } from './schedule-order-assign-vehicle.component';

describe('ScheduleOrderAssignVehicleComponent', () => {
  let component: ScheduleOrderAssignVehicleComponent;
  let fixture: ComponentFixture<ScheduleOrderAssignVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOrderAssignVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOrderAssignVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
