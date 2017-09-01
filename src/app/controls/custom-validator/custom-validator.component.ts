import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'CustomValidator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent implements OnInit {
  @Input('ErrorMessage')
  errorMessage: string;
  @Input('ForeColor')
  foreColor: string;
  isError: boolean;

  constructor() {}

  ngOnInit() {
  }

}