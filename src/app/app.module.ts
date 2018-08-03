import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalNavComponent } from './shared/global-nav/global-nav.component';
import { SummaryComponent } from './modules/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
