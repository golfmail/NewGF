import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input('ImageUrl')
  imageUrl: string;
  @Input('Height')
  height: string;
  @Input('Width')
  width: string;
  @Input('ToolTip')
  toolTip: string;

  constructor() {}

  ngOnInit() {
  }

}