import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackVehileMapComponent } from './track-vehile-map.component';

describe('TrackVehileMapComponent', () => {
  let component: TrackVehileMapComponent;
  let fixture: ComponentFixture<TrackVehileMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackVehileMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackVehileMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
