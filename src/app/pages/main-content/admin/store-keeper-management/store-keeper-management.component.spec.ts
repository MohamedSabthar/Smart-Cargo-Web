import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKeeperManagementComponent } from './store-keeper-management.component';

describe('StoreKeeperManagementComponent', () => {
  let component: StoreKeeperManagementComponent;
  let fixture: ComponentFixture<StoreKeeperManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreKeeperManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreKeeperManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
