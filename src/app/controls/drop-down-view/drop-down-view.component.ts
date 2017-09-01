import { Component, NgModule, OnInit, Input } from '@angular/core';
import { Tab } from 'app/controls/drop-down-view/drop-down-view.interface';
import { ListViewComponent } from 'app/controls/list-view/list-view.component';

@NgModule({
  declarations: [ ListViewComponent ]
})
@Component({
  selector: 'app-drop-down-view',
  templateUrl: './drop-down-view.component.html',
  styleUrls: ['./drop-down-view.component.css']
})
export class DropDownViewComponent implements OnInit , Tab {
  @Input() tabTitle;

  constructor(private ListViewComponent: ListViewComponent) { }

  ngOnInit() {
    // this.ListViewComponent.addTab(this); //TEST
  }

}
