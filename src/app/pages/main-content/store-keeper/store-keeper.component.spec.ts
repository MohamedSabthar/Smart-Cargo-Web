import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKeeperComponent } from './store-keeper.component';

describe('StoreKeeperComponent', () => {
  let component: StoreKeeperComponent;
  let fixture: ComponentFixture<StoreKeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreKeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
