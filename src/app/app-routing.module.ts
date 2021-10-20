import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicPredictionComponent } from './dynamic-prediction/dynamic-prediction.component';

const routes: Routes = [
  {path: '', redirectTo: '/dynamic', pathMatch: 'full'},
  { path: 'dynamic', component: DynamicPredictionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
