import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kb02-3',
  templateUrl: './kb02-3.component.html',
  styleUrls: ['./kb02-3.component.css']
})
export class Kb023Component implements OnInit {

  dateList  =  [
    {id: '1', Name: 'วันที่บันทึกรายการ'},
    {id: '2', Name: 'วันที่ผ่านรายการ'},
    {id: '3', Name: 'วันที่เอกสาร'},
  ];

  SELECTED_DATE = this.dateList[0].id;

  constructor() {}
  onSearch(tab) {
    console.log(tab);
  }

  ngOnInit() {
  }

}
