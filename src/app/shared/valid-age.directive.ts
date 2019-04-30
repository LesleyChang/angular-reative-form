import { Directive, forwardRef, Injectable } from '@angular/core';
import { ValidationErrors, NG_VALIDATORS, Validator, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';


/** age should not less than 0 or larger than 120 */
export const ageValidator: ValidatorFn = (control: FormControl): ValidationErrors | null => {
  const age = +control.value;
  if (!control.value || control.value === '') return null;
  return !(age && age > 0 && age < 120) ? { 'ageValidator': true } : null;
};

@Directive({
  selector: '[appValidAge]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidAgeDirective),
    multi: true
  }]
})
@Injectable({ providedIn: 'root' })
export class ValidAgeDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return ageValidator(control)
  }
}



