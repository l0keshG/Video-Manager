import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './modules/material.module';
import { Globals } from './models/globals';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  entryComponents:[],
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers:[Globals]
})
export class SharedModule { }
