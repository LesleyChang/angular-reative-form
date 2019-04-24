import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'reative-form',
    pathMatch:'full'
  },
  // {
  //   path:'reative-form',
  //   component:
  // }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }