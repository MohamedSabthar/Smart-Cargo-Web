import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryHistoryTableComponent } from './delivery-history-table.component';

describe('DeliveryHistoryTableComponent', () => {
  let component: DeliveryHistoryTableComponent;
  let fixture: ComponentFixture<DeliveryHistoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryHistoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
