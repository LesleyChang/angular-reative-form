import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ageValidator } from 'app/shared/valid-age.directive';
import { genders } from 'app/shared/genders';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders: string[] = genders;
  group: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.group = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      age: [null, [Validators.required, ageValidator]],
      id: [null, Validators.required],
      gender: [null]
    });
    this.group.valueChanges.subscribe(console.log);
  }
  // convenience getter for easy access to form fields
  get form(): { [key: string]: AbstractControl; } { return this.group.controls; }

}
