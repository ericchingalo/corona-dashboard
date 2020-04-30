import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers/';
import { loadCountryData } from './store/actions/country-data.actions';
import { loadWorldData } from './store/actions/world-data.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(loadCountryData());
    this.store.dispatch(loadWorldData());
  }
}
