import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrimeComponent } from './crime/crime.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicPredictionComponent } from './dynamic-prediction/dynamic-prediction.component';
import { HomeComponent } from './home/home.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { CaseResultComponent } from './case-result/case-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CrimeComponent,
    DynamicPredictionComponent,
    HomeComponent,
    CaseDetailsComponent,
    CaseResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
