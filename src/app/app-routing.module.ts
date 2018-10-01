import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
const routes:Routes = [
  {path:'heroes',component:HeroesComponent}
];
@NgModule({
  exports: [ RouterModule ],
  //Initialize router and start listening for browser location changes
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}