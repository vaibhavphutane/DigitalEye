import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicPredictionComponent } from './dynamic-prediction/dynamic-prediction.component';
import { CrimeComponent } from './crime/crime.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'dynamic', component: DynamicPredictionComponent },
  { path: 'crime-scene/:caseNumber', component: CrimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
