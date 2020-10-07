import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDimensionTableComponent } from './order-dimension-table.component';

describe('OrderDimensionTableComponent', () => {
  let component: OrderDimensionTableComponent;
  let fixture: ComponentFixture<OrderDimensionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDimensionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDimensionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
