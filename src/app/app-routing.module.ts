import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AbstractControlsComponent } from './components/abstract-controls/abstract-controls.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent
  },
  {
    path: 'abstract-controls',
    component: AbstractControlsComponent
  },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
