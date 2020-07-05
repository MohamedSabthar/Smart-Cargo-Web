import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderDimentionComponent } from './add-order-dimention.component';

describe('AddOrderDimentionComponent', () => {
  let component: AddOrderDimentionComponent;
  let fixture: ComponentFixture<AddOrderDimentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrderDimentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderDimentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
