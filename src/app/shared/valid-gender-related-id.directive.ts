import { Directive, forwardRef, Injectable } from '@angular/core';
import { NG_VALIDATORS, FormGroup, ValidatorFn, ValidationErrors, Validator, AbstractControl } from '@angular/forms';
import { genders } from './genders';

/** Id's second character should correspond to gender */
export const genderIdRelatedValidator: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
  const id = group.controls['id'];
  const gender = group.controls['gender'];
  if (!gender || !id) return null;

  const genderIndex: number = genders.indexOf(gender.value);

  if (genderIndex === -1 || !id || id.value === '') return null;
  return (+id.value.substring(1, 2) === genderIndex + 1) ? null : { 'genderIdRelatedValidator': true };
};

@Directive({
  selector: '[appValidGenderRelatedId]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidGenderRelatedIdDirective),
    multi: true
  }]
})
export class ValidGenderRelatedIdDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return genderIdRelatedValidator(control)
  }
}
