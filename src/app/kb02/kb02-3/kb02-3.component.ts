import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogSearchComponent } from 'app/controls/dialog-search/dialog-search.component';
import { MenuTopComponent } from 'app/menu-top/menu-top.component';

@Component({
  selector: 'app-kb02-3',
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

  // Disable & Show
  DSTBALL;
  SHOWBT;

  // Input Text
  TBBUKRS = '2109'; // รหัสงบประมาณ
  TBZZPMT = '2100900006'; // รหัสหน่วยเบิกจ่าย

  // Label
  LBBUKRS = 'กรมอนามัย'; // TEST รหัสงบประมาณ
  LBZZPMT = 'กองคลัง'; // TEST รหัสหน่วยเบิกจ่าย

  // Date
  T_DATE = new Date();
  F_DATE = new Date();

  // User ID
  USERID;

  constructor(private route: Router, private MenuTop: MenuTopComponent, public dialog: MdDialog,) {
    // TEST
    // console.log('Route:' + route.url);
    this.MenuTop.onClick(route.url);
  }

  // Open Dialog Search
  dialogSearch(textcode, textname) {
    const codetx = textcode;
    const nametx = document.getElementById(textname).textContent;
    console.log('Open: ' + codetx + ' | ' + nametx);
    const config = new MdDialogConfig();
    const dialogRef: MdDialogRef<DialogSearchComponent> = this.dialog.open(DialogSearchComponent, {panelClass: 'myapp-no-padding-dialog'});
    dialogRef.componentInstance.code_t = codetx;
    dialogRef.componentInstance.name_t = nametx;

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
