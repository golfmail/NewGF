import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input('Text')
  Text: string;

  @Input() visible: boolean;

  constructor() {}

  ngOnInit() {
  }

}
