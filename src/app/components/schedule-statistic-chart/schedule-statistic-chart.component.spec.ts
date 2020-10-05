import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleStatisticChartComponent } from './schedule-statistic-chart.component';

describe('ScheduleStatisticChartComponent', () => {
  let component: ScheduleStatisticChartComponent;
  let fixture: ComponentFixture<ScheduleStatisticChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleStatisticChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleStatisticChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
