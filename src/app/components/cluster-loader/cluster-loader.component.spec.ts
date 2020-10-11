import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterLoaderComponent } from './cluster-loader.component';

describe('ClusterLoaderComponent', () => {
  let component: ClusterLoaderComponent;
  let fixture: ComponentFixture<ClusterLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
