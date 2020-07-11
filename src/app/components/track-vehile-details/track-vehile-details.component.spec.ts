import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackVehileDetailsComponent } from './track-vehile-details.component';

describe('TrackVehileDetailsComponent', () => {
  let component: TrackVehileDetailsComponent;
  let fixture: ComponentFixture<TrackVehileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackVehileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackVehileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
