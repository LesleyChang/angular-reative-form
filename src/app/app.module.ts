import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NavComponent } from './shared/nav/nav.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ValidAgeDirective } from './shared/valid-age.directive';
import { ValidGenderRelatedIdDirective } from './shared/valid-gender-related-id.directive';
import { AbstractControlsComponent } from './components/abstract-controls/abstract-controls.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LayoutComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    ValidAgeDirective,
    ValidGenderRelatedIdDirective,
    AbstractControlsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) { }
}
