import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { components } from './components';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule],
})
export class HomeModule {}
