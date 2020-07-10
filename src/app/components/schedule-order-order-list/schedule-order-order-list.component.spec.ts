import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOrderOrderListComponent } from './schedule-order-order-list.component';

describe('ScheduleOrderOrderListComponent', () => {
  let component: ScheduleOrderOrderListComponent;
  let fixture: ComponentFixture<ScheduleOrderOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOrderOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOrderOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
