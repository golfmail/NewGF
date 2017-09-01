import { Component, OnInit, Input  } from '@angular/core';
import { TableList } from 'app/kb02/table-list-view';

@Component({
  selector: 'app-list-detail',
  // templateUrl: './list-detail.component.html',
  template: `
    <div *ngIf="save">
      <h2>{{save.LBZZPMT}} details!</h2>
      <div><label>id: </label>{{save.TBFISTL}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="save.LBZZPMT" placeholder="name"/>
      </div>
    </div>
  `,
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  @Input() save: TableList;

  constructor() { }

  ngOnInit() {
  }

}
