import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-abstract-controls',
  templateUrl: './abstract-controls.component.html',
  styleUrls: ['./abstract-controls.component.css']
})
export class AbstractControlsComponent implements OnInit {
  name: FormControl;
  orderForm: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.name = new FormControl('Eric');

    /* use constructor
    *  this.orderForm = new FormGroup({
    *    'customerName': new FormControl(''),
    *    'email': new FormControl(''),
    *    items: new FormArray([this.createItem()])
    *  });
    */

    /* use formBuilder */
    this.orderForm = this.fb.group({
      customerName: '',
      email: '',
      items: this.fb.array([this.createItem()])
    });

    this.items = this.orderForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }
  addItem(): void {
    this.items.push(this.createItem());
  }
}
