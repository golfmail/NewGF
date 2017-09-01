import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ImageButton',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.css'],
})
export class ImageButtonComponent implements OnInit {
  @Input('ImageUrl')
  imageUrl: string;
  @Input('Height')
  height: string;
  @Input('Width')
  width: string;
  @Input('ToolTip')
  toolTip: string;

  @Input('Visible')
  visible: boolean;

  constructor() {

  }

  ngOnInit() {
    //this.imageUrl = "hello";
  }

}