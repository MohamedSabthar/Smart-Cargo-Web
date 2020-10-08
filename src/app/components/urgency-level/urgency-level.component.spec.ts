import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgencyLevelComponent } from './urgency-level.component';

describe('UrgencyLevelComponent', () => {
  let component: UrgencyLevelComponent;
  let fixture: ComponentFixture<UrgencyLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgencyLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgencyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
