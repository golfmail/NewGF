import { GridViewComponent } from './../../controls/grid-view/grid-view.component';
import { Component, OnInit, forwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogSearchComponent } from 'app/controls/dialog-search/dialog-search.component';
// import { GridViewComponent } from 'app/controls/grid-view/grid-view.component';
import { MenuTopComponent } from 'app/menu-top/menu-top.component';
import { Http, Headers, RequestOptions} from '@angular/http';
// import { Kb021Component } from 'app/kb02/kb02-1/kb02-1.component';

@Component({
  selector: 'app-kb02-3',
  templateUrl: './kb02-3.component.html',
  styleUrls: ['./kb02-3.component.css'],
  providers: [MenuTopComponent ] // , Kb021Component
})
export class Kb023Component implements OnInit {

  dateList  =  [
    {id: 'CPUDT', Name: 'วันที่บันทึกรายการ'},
    {id: 'BUDAT', Name: 'วันที่ผ่านรายการ'},
    {id: 'BLDAT', Name: 'วันที่เอกสาร'},
  ];

  typeDocList = [
    {id: '', Name: '---- ไม่กำหนด ----'},
    {id: 'K0', Name: 'K0 - เงินจ่ายสิ้นเดือน'},
    {id: 'K1', Name: 'K1 - ลูกหนี้เงินยืม'},
    {id: 'K8', Name: 'K8 - เงินอุดหนุน'},
    {id: 'KC', Name: 'KC - ขอเบิก(1.ข)'},
    {id: 'KD', Name: 'KD - ขอเบิก(1.ข) กันเงิน'},
    {id: 'KE', Name: 'KE - ขอเบิก(2.ข)'},
    {id: 'KF', Name: 'KF - ขอเบิก(2.ข) กันเงิน'},
    {id: 'KL', Name: 'KL - ใบสำคัญงปม(2)'},
    {id: 'KM', Name: 'KM - ใบสำคัญงปม(2) กันเงิน'},
  ];

  SELECTED_DATE = this.dateList[0].id;
  RADIO_TYPE = 'web';

  RESLIST: any[] = [];
  RLINK = 'kb021';

  // Disable & Show
  DSTBALL;
  SHOWBT;

  // Input Text
  TBBUKRS = '2109'; // รหัสงบประมาณ
  TBZZPMT = '2100900006'; // รหัสหน่วยเบิกจ่าย
  TBXBLNR1 = ''; // การอ้างอิง 1
  TBXBLNR2 = ''; // การอ้างอิง 2
  TBSTERM = ''; // รหัสประจำตัวผู้เสียภาษี
  IDBLART1 = this.typeDocList[0].id; // ประเภทเอกสาร
  IDBLART2 = this.typeDocList[0].id; // ประเภทเอกสาร

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
  BELNR1 = '10000745';
  BELNR2 = '10000747';

  // User ID
  USERID;

  // XML / JSON
  xml_searchDoc = ''; // Gen XML for send to service
  json_searchDoc = '';

  // Hide
  forAdmin: boolean;
  forResult: boolean;
  notFound: Boolean = true;
  H_WAIT: Boolean = true;

  // Process
  DATAWRONG = 'ไม่พบผลการค้นหา';

  // TEST ONLY
  sampleData: String = 'some parent Data';
  sampleChildData: String = '';

  // to show Data on KB021
  SBELNR: String = '';

  constructor(private route: Router, private MenuTop: MenuTopComponent, public dialog: MdDialog,
              private httpService: Http) {
    // TEST
    console.log('Route x:' + route.url);
    // this.GridViewComponent.RLINK = '/kb021';
    // this.MenuTop.onClick(route.url);
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
    this.RESLIST = [];
    this.notFound = true;
    this.forResult = true;
    this.coverDateFT();
    this.genXMLSearch(tab);
    this.sendXMLSearch(tab); // TEST
  }

  coverDateFT() {
    this.F_DATEC = this.F_DATE.getDate() + '/' + Number(this.F_DATE.getMonth() + 1) + '/' + this.F_DATE.getFullYear();
    this.T_DATEC = this.T_DATE.getDate() + '/' + Number(this.T_DATE.getMonth() + 1) + '/' + this.T_DATE.getFullYear();
  }

  genXMLSearch(tab) {
    this.json_searchDoc = '';
    if (tab === 0) {
      this.xml_searchDoc = '';
      this.xml_searchDoc = `<operation>
      <modelCRUD>
        <tableName>SearchDocT1</tableName>
          <recordID>0</recordID>
            <action>CreateUpdate</action>
              <dataRow>
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
        // Change to JSON
      this.json_searchDoc = `{"BELNR1": "${this.BELNR1}",
                              "BELNR2": "${this.BELNR2}",
                              "GJAHR": "${this.YEAR - 543}"}`;
    } else if (tab === 1) {
      this.xml_searchDoc = '';
      this.xml_searchDoc = `<operation>
      <modelCRUD>
        <tableName>SearchDocT2</tableName>
          <recordID>0</recordID>
            <action>CreateUpdate</action>
              <dataRow>
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
        // JSON
        this.json_searchDoc = `{"DATETYPE":"${this.SELECTED_DATE}",
                                "F_DATE": "${this.F_DATEC}",
                                "T_DATE": "${this.T_DATEC}",
                                "TBXBLNR1": "${this.TBXBLNR1}",
                                "TBXBLNR2": "${this.TBXBLNR2}",
                                "TBSTERM": "${this.TBSTERM}",
                                "IDBLART1": "${this.IDBLART1}",
                                "IDBLART2": "${this.IDBLART2}"}`;
    }
    // console.log(this.json_searchDoc);
  }

  sendXMLSearch(tab) {
    // รอ service log พร้อมใช้งาน
    this.H_WAIT = false;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    const options = new RequestOptions();
    options.headers = headers;
    let url = '';
    if (tab === 0) {
      url = 'http://52.220.14.56:28080/NewGFws/webresources/wsLog/T1';
    } else if (tab === 1 ) {
      url = 'http://52.220.14.56:28080/NewGFws/webresources/wsLog';
    }
    this.httpService.post(url, this.json_searchDoc, {headers: headers}).subscribe(values => {
      // console.log('return', values);
      if (values.ok) {
        const result: any = values.json();
        if (result.result.length > 0 && result.result.length <= 300) {
          this.RESLIST = result.result;
          this.forResult = false;
          this.H_WAIT = true;
        } else if (result.result.length > 300) {
          this.H_WAIT = true;
          this.DATAWRONG = 'ไม่สามารถแสดงผลการค้นหาเกิน 300 รายการได้ กรุณาเปลี่ยนเงื่อนไขการค้นหาใหม่';
          this.forResult = true;
          this.notFound = false;
        } else {
          this.H_WAIT = true;
          this.DATAWRONG = 'ไม่พบเอกสาร';
          this.forResult = true;
          this.notFound = false;
        }

      } else {
        this.H_WAIT = true;
        console.log('F');
        alert(values.toString());
      }
    } , error => {
      this.H_WAIT = true;
      console.log(error);
      this.DATAWRONG = 'การเชื่อมต่อกับ service log ไม่สมบูรณ์ : ' + '(' + error.status + ') ' + error.statusText;
      this.notFound = false;
    });

  }

  gotoKB021(doc) {
    if (doc !== undefined) {
      console.log('Doc is : ' + doc);
      this.SBELNR = doc;
    } else {

    }

  }



  ngOnInit() {
    // this.MenuTop.onClick(this.route.url); // TEST
    this.MenuTop.topMenu_s = 'fontMenuTop'; // TEST
    this.forAdmin = true; // TEST NOT ADMIN
    this.forResult = true; // TEST HIDE

    // For Selected Years
    if (this.GJAHR.getMonth() >= 9 ) {
      this.GJAHR.setFullYear(Number(this.GJAHR.getFullYear()) + 544);
      // console.log('f' + this.GJAHR); // TEST
    } else {
      this.GJAHR.setFullYear(Number(this.GJAHR.getFullYear()) + 543);
    }
    this.YEAR = Number(this.GJAHR.getFullYear());
    let iGJAHR = Number(this.GJAHR.getFullYear());
    iGJAHR = iGJAHR - 8;
    for (let index = -7; index < 7; index++) {
      iGJAHR = iGJAHR + 1;
      // console.log(iGJAHR); // TEST
      this.yearList.push({YESR: iGJAHR});

    }
  }

}
