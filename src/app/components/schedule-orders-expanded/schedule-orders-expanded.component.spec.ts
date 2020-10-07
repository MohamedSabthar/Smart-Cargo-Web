import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOrdersExpandedComponent } from './schedule-orders-expanded.component';

describe('ScheduleOrdersExpandedComponent', () => {
  let component: ScheduleOrdersExpandedComponent;
  let fixture: ComponentFixture<ScheduleOrdersExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOrdersExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOrdersExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
