import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelvoComponent } from './components/belvo/belvo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'belvo', component: BelvoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
