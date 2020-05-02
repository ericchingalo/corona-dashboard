import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { components } from './components';
import { MaterialModule } from '../core/material/material.module';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
})
export class HomeModule {}
