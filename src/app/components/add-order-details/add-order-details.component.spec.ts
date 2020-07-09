import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderDetailsComponent } from './add-order-details.component';

describe('AddOrderDetailsComponent', () => {
  let component: AddOrderDetailsComponent;
  let fixture: ComponentFixture<AddOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
