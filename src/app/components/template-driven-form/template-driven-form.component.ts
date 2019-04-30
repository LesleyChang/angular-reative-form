import { Component, OnInit } from '@angular/core';
import { genders } from './../../shared/genders';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  genders: string[] = genders;
  formTemp = {
    name: '',
    age: null,
    id: '',
    gender: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
