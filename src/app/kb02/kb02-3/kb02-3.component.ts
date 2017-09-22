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
  TBXBLNR1 = ''; // การอ้างอิง 1
  TBXBLNR2 = ''; // การอ้างอิง 2
  TBSTERM = ''; // รหัสประจำตัวผู้เสียภาษี
  IDBLART1 = ''; // ประเภทเอกสาร
  IDBLART2 = ''; // ประเภทเอกสาร

  // Label
  LBBUKRS = 'กรมอนามัย'; // TEST รหัสงบประมาณ
  LBZZPMT = 'กองคลัง'; // TEST รหัสหน่วยเบิกจ่าย

  // Date
  F_DATE = new Date();
  T_DATE = new Date();
  F_DATEC: String;
  T_DATEC: String;

  // ปีงบประมาณ
  yearList: any[] = [];
  GJAHR = new Date();
  YEAR = Number(this.GJAHR.getFullYear());

  // เลขที่ใบขอเบิก
  BELNR1 = '3100000005';
  BELNR2 = '3100000006';

  // User ID
  USERID;

  // XML
  xml_search = ''; // Gen XML for send to service

  // Hide
  forAdmin: boolean;
  forResult: boolean;

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
    // this.forResult = false;
    this.coverDateFT();
    this.getXMLSearch(tab);
  }

  coverDateFT() {
    this.F_DATEC = this.F_DATE.getDate() + '/' + Number(this.F_DATE.getMonth() + 1) + '/' + this.F_DATE.getFullYear();
    this.T_DATEC = this.T_DATE.getDate() + '/' + Number(this.T_DATE.getMonth() + 1) + '/' + this.T_DATE.getFullYear();
  }

  getXMLSearch(tab) {
    if (tab === 0) {
      this.xml_search = '';
      this.xml_search = `<operation>
      <modelCRUD>
        <tableName>SearchDoc</tableName>
          <recordID>0</recordID>
            <action>CreateUpdate</action>
              <dataRow>
                <field column="TAB">
                  <val>${tab}</val>
                </field>
                <field column="TYPE">
                  <val>${this.RADIO_TYPE}</val>
                </field>
                <field column="BELNR1">
                  <val>${this.BELNR1}</val>
                </field>
                <field column="BELNR2">
                  <val>${this.BELNR2}</val>
                </field>
                  <field column="GJAHR">
                  <val>${this.YEAR}</val>
                </field>
			        </dataRow>
		      </modelCRUD>
	      </operation>`;
    } else if (tab === 1) {
      this.xml_search = '';
      this.xml_search = `<operation>
      <modelCRUD>
        <tableName>SearchDoc</tableName>
          <recordID>0</recordID>
            <action>CreateUpdate</action>
              <dataRow>
                <field column="TAB">
                  <val>${tab}</val>
                </field>
                <field column="DATETYPE">
                  <val>${this.SELECTED_DATE}</val>
                </field>
                <field column="F_DATE">
                  <val>${this.F_DATEC}</val>
                </field>
                <field column="T_DATE">
                  <val>${this.T_DATEC}</val>
                </field>
                <field column="TBXBLNR1">
                  <val>${this.TBXBLNR1}</val>
                </field>
                <field column="TBXBLNR2">
                  <val>${this.TBXBLNR2}</val>
                </field>
                <field column="TBSTERM">
                  <val>${this.TBSTERM}</val>
                </field>
                <field column="IDBLART1">
                  <val>${this.IDBLART1}</val>
                </field>
                <field column="IDBLART2">
                  <val>${this.IDBLART2}</val>
                </field>
			        </dataRow>
		      </modelCRUD>
	      </operation>`;
    }
    console.log(this.xml_search);
  }


  ngOnInit() {
    this.MenuTop.onClick(this.route.url); // TEST
    this.MenuTop.topMenu_s = 'fontMenuTop'; // TEST
    this.forAdmin = true; // TEST NOT ADMIN
    this.forResult = true; // TEST HIDE

    // For Selected Years
    if (this.GJAHR.getMonth() >= 9 ) {
      this.GJAHR.setFullYear(Number(this.GJAHR.getFullYear()) + 544);
      console.log('f' + this.GJAHR);
    } else {
      this.GJAHR.setFullYear(Number(this.GJAHR.getFullYear()) + 543);
    }
    this.YEAR = Number(this.GJAHR.getFullYear());
    let iGJAHR = Number(this.GJAHR.getFullYear());
    iGJAHR = iGJAHR - 8;
    for (let index = -7; index < 7; index++) {
      iGJAHR = iGJAHR + 1;
      console.log(iGJAHR);
      this.yearList.push({YESR: iGJAHR});

    }
    console.log(this.YEAR);
  }

}
