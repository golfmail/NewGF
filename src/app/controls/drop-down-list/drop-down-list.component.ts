import { Component, Input, OnInit } from '@angular/core';
import { ListItemComponent } from 'app/controls/list-item/list-item.component';
import { ListViewComponent } from 'app/controls/list-view/list-view.component';


@Component({
  selector: 'DropDownList',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit {
  @Input('Width')
  width: string;
  @Input()
  values: string[];
  options: string[] = [];

  constructor() {

  }

  addItem(item: ListItemComponent) {
    this.options.push(item.value);
  }

  ngOnInit() {
    const values = this.values;
    for (let idx in values)
      this.options.push(values[idx]);
  }

}
//DEVELOPING A TABS COMPONENT IN ANGULAR
//see ref: https://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html
//https://stackoverflow.com/questions/34736161/how-do-i-create-a-dropdown-component-in-angular-2