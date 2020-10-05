import { NgModule } from '@angular/core';
import { NgHttpLoaderModule } from "ng-http-loader";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, HammerModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  entryComponents: [LoadingSpinnerComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    LayoutComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HammerModule,
    SharedModule,
    MatDialogModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
