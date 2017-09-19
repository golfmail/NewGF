import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuTopComponent } from 'app/menu-top/menu-top.component';

@Component({
  selector: 'kb02-3',
  templateUrl: './kb02-3.component.html',
  styleUrls: ['./kb02-3.component.css'],
  providers: [MenuTopComponent]
})
export class Kb023Component implements OnInit {

  dateList  =  [
    {id: '1', Name: 'วันที่บันทึกรายการ'},
    {id: '2', Name: 'วันที่ผ่านรายการ'},
    {id: '3', Name: 'วันที่เอกสาร'},
  ];

  SELECTED_DATE = this.dateList[0].id;
  RADIO_TYPE = 'web';

  constructor(private route: Router, private MenuTop: MenuTopComponent) {
    // TEST
    // console.log('Route:' + route.url);
    this.MenuTop.onClick(route.url);
  }

  // TEST
  onSearch(tab) {
    console.log(tab);
    console.log(this.RADIO_TYPE);
  }

  ngOnInit() {
    this.MenuTop.onClick(this.route.url); // TEST
    this.MenuTop.topMenu_s = 'fontMenuTop'; // TEST
  }

}
