import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'RequiredFieldValidator',
  templateUrl: './required-field-validator.component.html',
  styleUrls: ['./required-field-validator.component.css']
})
export class RequiredFieldValidatorComponent implements OnInit {
  @Input('ErrorMessage')
  errorMessage: string;

  @Input('ForeColor')
  foreColor: string;

  @Input('isError')
  isError: boolean;

  constructor() {}

  ngOnInit() {
  }

}