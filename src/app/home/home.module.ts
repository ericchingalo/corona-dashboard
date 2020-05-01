import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './components';
import { MaterialModule } from '../core/material/material.module';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule, HomeRoutingModule],
})
export class HomeModule {}
