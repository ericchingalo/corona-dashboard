import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StyleUtils,
  StylesheetMap,
  MediaMarshaller,
  ɵMatchMedia,
  BreakPointRegistry,
  PrintHook,
  LayoutStyleBuilder,
  FlexStyleBuilder,
  ShowHideStyleBuilder,
  FlexOrderStyleBuilder,
  FlexLayoutModule,
  LayoutGapStyleBuilder,
  LayoutAlignStyleBuilder,
} from '@angular/flex-layout';
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
    FlexLayoutModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [
    StyleUtils,
    StylesheetMap,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    PrintHook,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    ShowHideStyleBuilder,
    FlexOrderStyleBuilder,
    LayoutGapStyleBuilder,
    LayoutAlignStyleBuilder,
  ],
})
export class HomeModule {}
