import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOrdersComponent } from './schedule-orders.component';

describe('ScheduleOrdersComponent', () => {
  let component: ScheduleOrdersComponent;
  let fixture: ComponentFixture<ScheduleOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
