import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackVehiclesComponent } from './track-vehicles.component';

describe('TrackVehiclesComponent', () => {
  let component: TrackVehiclesComponent;
  let fixture: ComponentFixture<TrackVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
