import { Component, OnInit, Input } from '@angular/core';
import { Tab } from 'app/controls/drop-down-view/drop-down-view.interface';

@Component({
  selector: 'app-drop-down-view',
  templateUrl: './drop-down-view.component.html',
  styleUrls: ['./drop-down-view.component.css']
})
export class DropDownViewComponent implements OnInit , Tab {
  @Input() tabTitle;

  constructor() { }

  ngOnInit() {
  }

}
