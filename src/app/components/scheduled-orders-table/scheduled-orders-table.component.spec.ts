import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledOrdersTableComponent } from './scheduled-orders-table.component';

describe('ScheduledOrdersTableComponent', () => {
  let component: ScheduledOrdersTableComponent;
  let fixture: ComponentFixture<ScheduledOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
