import { Directive, forwardRef, Injectable } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appValidGenderRelatedId]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ValidGenderRelatedIdDirective),
    multi: true
  }]
})
export class ValidGenderRelatedIdDirective {

  constructor() { }

}
