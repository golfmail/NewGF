﻿import { GridViewComponent } from './../../controls/grid-view/grid-view.component';
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

  // TEST
  xmlResult = `<table xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <row>
      <BELNR>3100000004</BELNR>
      <GJAHR>2560</GJAHR>
      <BLDAT>01/11/2017</BLDAT>
      <BUDAT>03/11/2017</BUDAT>
      <BLART>KC</BLART>
      <HOWPAY>1</HOWPAY>
      <NAME1>มหาวิทยาลัยธรรมศาสตร์</NAME1>
      <CPUDT>05/11/2017</CPUDT>
      <SUMCOST>2000.22</SUMCOST>
      <STATUS>ผ่านรายการ</STATUS>
      <NUMDOCI>1</NUMDOCI>
    </row>
    <row>
      <BELNR>3100000005</BELNR>
      <GJAHR>2560</GJAHR>
      <BLDAT>07/08/2017</BLDAT>
      <BUDAT>09/10/2017</BUDAT>
      <BLART>K0</BLART>
      <HOWPAY>2</HOWPAY>
      <NAME1>มหาวิทยาลัยขอนแก่น</NAME1>
      <CPUDT>11/12/2017</CPUDT>
      <SUMCOST>3000.33</SUMCOST>
      <STATUS>ผ่านรายการ</STATUS>
      <NUMDOCI></NUMDOCI>
    </row>
    <row>
      <BELNR>3100000006</BELNR>
      <GJAHR>2560</GJAHR>
      <BLDAT>11/12/2017</BLDAT>
      <BUDAT>13/06/2017</BUDAT>
      <BLART>K0</BLART>
      <HOWPAY>2</HOWPAY>
      <NAME1>มหาวิทยาลัยเชียงใหม่</NAME1>
      <CPUDT>02/01/2017</CPUDT>
      <SUMCOST>456789.10</SUMCOST>
      <STATUS>ผ่านรายการ</STATUS>
      <NUMDOCI>3</NUMDOCI>
    </row>
    <row>
      <BELNR>3100000006</BELNR>
      <GJAHR>2560</GJAHR>
      <BLDAT>30/12/2017</BLDAT>
      <BUDAT>11/11/2017</BUDAT>
      <BLART>K0</BLART>
      <HOWPAY>1</HOWPAY>
      <NAME1>มหาวิทยาลัยพะเยา</NAME1>
      <CPUDT>12/03/2017</CPUDT>
      <SUMCOST>98765</SUMCOST>
      <STATUS>ผ่านรายการ</STATUS>
      <NUMDOCI>4</NUMDOCI>
    </row>
    <row>
      <BELNR>3100000007</BELNR>
      <GJAHR>2560</GJAHR>
      <BLDAT>30/12/2017</BLDAT>
      <BUDAT>11/11/2017</BUDAT>
      <BLART>K0</BLART>
      <HOWPAY>1</HOWPAY>
      <NAME1>มหาวิทยาลัยน่าน</NAME1>
      <CPUDT>12/03/2017</CPUDT>
      <SUMCOST>98765</SUMCOST>
      <STATUS>ผ่านรายการ</STATUS>
      <NUMDOCI>5</NUMDOCI>
    </row>
    <row>
      <BELNR>3100000008</BELNR>
      <GJAHR>2560</GJAHR>
      <BLDAT>30/12/2017</BLDAT>
      <BUDAT>11/11/2017</BUDAT>
      <BLART>K0</BLART>
      <HOWPAY>1</HOWPAY>
      <NAME1>มหาวิทยาลัยสตูล</NAME1>
      <CPUDT>12/03/2017</CPUDT>
      <SUMCOST>98765</SUMCOST>
      <STATUS>ผ่านรายการ</STATUS>
      <NUMDOCI>6</NUMDOCI>
    </row>
    <row>
      <BELNR>3100000009</BELNR>
      <GJAHR>2560</GJAHR>
      <BLDAT>30/12/2017</BLDAT>
      <BUDAT>11/11/2017</BUDAT>
      <BLART>K0</BLART>
      <HOWPAY>1</HOWPAY>
      <NAME1>มหาวิทยาลัยหัวหิน</NAME1>
      <CPUDT>12/03/2017</CPUDT>
      <SUMCOST>98765</SUMCOST>
      <STATUS>ผ่านรายการ</STATUS>
      <NUMDOCI>7</NUMDOCI>
    </row>
  </table>`;

  SELECTED_DATE = this.dateList[0].id;
  RADIO_TYPE = 'web';

  RESLIST: any[] = [];
  RLINK = '/kb021';

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
  BELNR1 = '3100000004';
  BELNR2 = '3100000009';

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
    console.log(tab);
    console.log(this.RADIO_TYPE);
    this.coverDateFT();
    this.genXMLSearch(tab);
    this.sendXMLSearch(); // TEST
    // this.getArrayXML();
    // this.GridViewComponent.RLINK = this.route.url;
    // this.forResult = false;
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
    console.log(this.json_searchDoc);
  }

  sendXMLSearch() {
    // รอ service log พร้อมใช้งาน
    // this.json_searchDoc = `{"DATETYPE":"CPUDT","F_DATE": "2/9/2017",
    // "T_DATE": "22/10/2017","TBXBLNR1":"P60_011111","TBXBLNR2": "P60_099999",
    // "TBSTERM": "2032400000","IDBLART1": "K0","IDBLART2": "KM"}`;
    this.H_WAIT = false;

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this.httpService.post('http://52.220.14.56:28080/NewGFws/webresources/wsLog', this.json_searchDoc, options).subscribe(values => {
      // console.log('return', values);
      if (values.ok) {
        const result: any = values.json();
        // this.RESLIST = result.result;
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
    // TEST

  }

  getArrayXML() {
    this.RESLIST = [];
    let  i, BELNR, GJAHR, BLDAT, BUDAT, BLART, HOWPAY, NAME1, CPUDT, SUMCOST, STATUS, NUMDOCI;
    const parser = new DOMParser();
    const dd = new Date('11/14/2017');
    // console.log(dd); // TEST
    const xmlDoc = parser.parseFromString(this.xmlResult, 'text/xml');
    BELNR   = xmlDoc.getElementsByTagName('BELNR');
    GJAHR   = xmlDoc.getElementsByTagName('GJAHR');
    BLDAT   = xmlDoc.getElementsByTagName('BLDAT');
    BUDAT   = xmlDoc.getElementsByTagName('BUDAT');
    BLART   = xmlDoc.getElementsByTagName('BLART');
    HOWPAY  = xmlDoc.getElementsByTagName('HOWPAY');
    NAME1   = xmlDoc.getElementsByTagName('NAME1');
    CPUDT   = xmlDoc.getElementsByTagName('CPUDT');
    SUMCOST = xmlDoc.getElementsByTagName('SUMCOST');
    STATUS  = xmlDoc.getElementsByTagName('STATUS');
    NUMDOCI = xmlDoc.getElementsByTagName('NUMDOCI');
    for (i = 0; i < BELNR.length; i++) {
      // console.log('C:' + BLART[i].innerHTML); // TEST
      // console.log(this.numberWithCommas(SUMCOST[i].innerHTML)); // TEST
      this.RESLIST.push({
        BELNR:    BELNR[i].innerHTML,
        GJAHR:    GJAHR[i].innerHTML,
        BLDAT:    this.coverDate(BLDAT[i].innerHTML),
        BUDAT:    this.coverDate(BUDAT[i].innerHTML),
        BLART:    BLART[i].innerHTML,
        HOWPAY:   HOWPAY[i].innerHTML,
        NAME1:    NAME1[i].innerHTML,
        CPUDT:    this.coverDate(CPUDT[i].innerHTML),
        SUMCOST:  this.numberWithCommas(SUMCOST[i].innerHTML),
        STATUS:   STATUS[i].innerHTML,
        NUMDOCI:  NUMDOCI[i].innerHTML,
      });
    }
  console.log(this.RESLIST);
  }

  numberWithCommas(x) {
    const number = x.toString();
    let baht = number.split('.')[0];
    const cents = (number.split('.')[1] || '') + '00';
    baht = baht.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return baht + '.' + cents.slice(0, 2);
  }

  // Don't use function
  coverDate(num) {
    let date: String;
    let yearBH;
    if (num !== undefined) {
      const dateParts = num.split('/');
      yearBH = Number(dateParts[2]) + 543; // Cover Year
      dateParts[2] = yearBH.toString();
      // console.log(dateParts[2], dateParts[1], dateParts[0]); // TSET
      switch (dateParts[1]) {
        case '01':
          date = dateParts[0] + ' มกราคม ' + dateParts[2];
          break;
        case '02':
          date = dateParts[0] + ' กุมภาพันธ์ ' + dateParts[2];
          break;
        case '03':
          date = dateParts[0] + ' มีนาคม ' + dateParts[2];
          break;
        case '04':
          date = dateParts[0] + ' เมษายน ' + dateParts[2];
          break;
        case '05':
          date = dateParts[0] + ' พฤษภาคม ' + dateParts[2];
          break;
        case '06':
          date = dateParts[0] + ' มิถุนายน ' + dateParts[2];
          break;
        case '07':
          date = dateParts[0] + ' กรกฎาคม ' + dateParts[2];
          break;
        case '08':
          date = dateParts[0] + ' สิงหาคม ' + dateParts[2];
          break;
        case '09':
          date = dateParts[0] + ' กันยายน ' + dateParts[2];
          break;
        case '10':
          date = dateParts[0] + ' ตุลาคม ' + dateParts[2];
          break;
        case '11':
          date = dateParts[0] + ' พฤศจิกายน ' + dateParts[2];
          break;
        case '12':
          date = dateParts[0] + ' ธันวาคม ' + dateParts[2];
          break;
        default: date = '';
          break;
      }
      return date;
    } else {
      return '';
    }
  }

  gotoKB021(doc) {
    if (doc !== undefined) {
      console.log('Doc is : ' + doc);
      this.SBELNR = doc;
    } else {

    }

  }

  hello() {
    console.log('Hello!');
  }

  ngOnInit() {
    this.MenuTop.onClick(this.route.url); // TEST
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
