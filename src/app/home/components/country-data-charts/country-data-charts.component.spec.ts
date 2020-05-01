import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDataChartsComponent } from './country-data-charts.component';

describe('CountryDataChartsComponent', () => {
  let component: CountryDataChartsComponent;
  let fixture: ComponentFixture<CountryDataChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDataChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDataChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
