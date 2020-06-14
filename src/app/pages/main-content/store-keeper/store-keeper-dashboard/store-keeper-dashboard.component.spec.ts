import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKeeperDashboardComponent } from './store-keeper-dashboard.component';

describe('StoreKeeperDashboardComponent', () => {
  let component: StoreKeeperDashboardComponent;
  let fixture: ComponentFixture<StoreKeeperDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreKeeperDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreKeeperDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
