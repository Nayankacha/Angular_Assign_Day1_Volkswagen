import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Update the import path and filename to match your actual component file, for example:
import { FlightDashboardComponent } from './flight-dashboard/flight-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
