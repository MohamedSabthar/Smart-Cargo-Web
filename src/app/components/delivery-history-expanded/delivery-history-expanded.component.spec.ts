import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryHistoryExpandedComponent } from './delivery-history-expanded.component';

describe('DeliveryHistoryExpandedComponent', () => {
  let component: DeliveryHistoryExpandedComponent;
  let fixture: ComponentFixture<DeliveryHistoryExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryHistoryExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryHistoryExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
