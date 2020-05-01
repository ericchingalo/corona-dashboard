import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoaderComponent } from './dashboard-loader.component';

describe('DashboardLoaderComponent', () => {
  let component: DashboardLoaderComponent;
  let fixture: ComponentFixture<DashboardLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
