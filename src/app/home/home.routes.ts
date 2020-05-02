import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountryDataTableComponent } from './components/country-data-table/country-data-table.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'history', component: CountryDataTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
