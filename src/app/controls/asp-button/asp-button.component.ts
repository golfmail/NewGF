import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Button',
  templateUrl: './asp-button.component.html',
  styleUrls: ['./asp-button.component.css']
})
export class AspButtonComponent implements OnInit {
  @Input('Text')
  text: string;

  @Input('Visible')
  visible: boolean;

  constructor() {}

  ngOnInit() {
  }

}