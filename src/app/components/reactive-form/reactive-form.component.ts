import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ageValidator } from '../../shared/valid-age.directive';
import { genders } from '../../shared/genders';
import { genderIdRelatedValidator } from '../../shared/valid-gender-related-id.directive';
import { CrossFieldsErrorMatcher } from '../../shared/cross-fields-error-matcher';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders: string[] = genders;
  group: FormGroup;
  errorMatcher: CrossFieldsErrorMatcher;
  constructor(private fb: FormBuilder,
    private errorMatcherProvider: CrossFieldsErrorMatcher) {
    this.errorMatcher = this.errorMatcherProvider;
  }

  formModel: FormGroup;
  ngOnInit() {

    this.group = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, ageValidator]],
      id: ['', [Validators.required]],
      gender: ['']
    },
      // validators for fromGroup
      { validators: [genderIdRelatedValidator] });
    //this.group.valueChanges.subscribe(res => { console.log(this.group) });
  }

  /** convenience getter for easy access to form fields */
  get form(): { [key: string]: AbstractControl; } { return this.group.controls; }

}
