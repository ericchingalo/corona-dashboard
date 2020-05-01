import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDataTableComponent } from './country-data-table.component';

describe('CountryDataTableComponent', () => {
  let component: CountryDataTableComponent;
  let fixture: ComponentFixture<CountryDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
