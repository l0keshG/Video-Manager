import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DragDropModule } from "@angular/cdk/drag-drop";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from "src/app/shared/shared.module";
import {MatTabsModule} from '@angular/material/tabs';
import { UploadComponent } from 'src/app/core/upload/upload.component';
import { ViewComponent } from 'src/app/core/view/view.component';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';

@NgModule({
  declarations: [
    UploadComponent,
    ViewComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    DragDropModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule
  ],
})
export class CoreModule {}
