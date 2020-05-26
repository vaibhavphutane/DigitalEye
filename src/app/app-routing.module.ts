import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicPredictionComponent } from './dynamic-prediction/dynamic-prediction.component';
import { CrimeComponent } from './crime/crime.component';


const routes: Routes = [
  {path: '', redirectTo:'/static', pathMatch: 'full'},
  { path: 'dynamic', component: DynamicPredictionComponent },
  { path: 'static', component: CrimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
