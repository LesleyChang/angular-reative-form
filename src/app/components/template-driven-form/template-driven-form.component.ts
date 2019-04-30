import { Component, OnInit } from '@angular/core';
import { genders } from './../../shared/genders';
import { CrossFieldsErrorMatcher } from './../../shared/cross-fields-error-matcher';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  genders: string[] = genders;
  errorMatcher: CrossFieldsErrorMatcher;
  formTemp = {
    name: '',
    age: '',
    id: '',
    gender: ''
  };

  constructor(private errorMatcherProvider: CrossFieldsErrorMatcher) {
    this.errorMatcher = this.errorMatcherProvider;
  }

  ngOnInit() {
  }

}
