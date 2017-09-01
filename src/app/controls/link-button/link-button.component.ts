import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'LinkButton',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css']
})
export class LinkButtonComponent implements OnInit {
  @Input('Visible')
  visible: boolean;

  constructor() {}

  ngOnInit() {
  }

}