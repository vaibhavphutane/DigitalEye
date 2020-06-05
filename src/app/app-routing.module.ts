import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicPredictionComponent } from './dynamic-prediction/dynamic-prediction.component';
import { CrimeComponent } from './crime/crime.component';
import { HomeComponent } from './home/home.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { CaseResultComponent } from './case-result/case-result.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'case-details', component: CaseDetailsComponent },
  { path: 'case-result', component: CaseResultComponent },
  { path: 'dynamic', component: DynamicPredictionComponent },
  { path: 'static', component: CrimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
