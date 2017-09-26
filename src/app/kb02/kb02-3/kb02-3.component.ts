import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { DialogSearchComponent } from 'app/controls/dialog-search/dialog-search.component';
import { GridViewComponent } from 'app/controls/grid-view/grid-view.component';
import { MenuTopComponent } from 'app/menu-top/menu-top.component';
import { Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-kb02-3',
  templateUrl: './kb02-3.component.html',
  styleUrls: ['./kb02-3.component.css'],
  providers: [MenuTopComponent, GridViewComponent]
})
export class Kb023Component implements OnInit {

  dateList  =  [
    {id: '1', Name: 'วันที่บันทึกรายการ'},
    {id: '2', Name: 'วันที่ผ่านรายการ'},
    {id: '3', Name: 'วันที่เอกสาร'},
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
      <BLDAT>01/02/2017</BLDAT>
      <BUDAT>03/04/2017</BUDAT>
      <BLART>KC</BLART>
      <HOWPAY>1</HOWPAY>
      <NAME1>มหาวิทยาลัยธรรมศาสตร์</NAME1>
      <CPUDT>05/06/2017</CPUDT>
      <SUMCOST>2000.22</SUMCOST>
      <STATUS>เอกสารผ่านรายการ</STATUS>
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
      <STATUS>เอกสารผ่านรายการ</STATUS>
      <NUMDOCI></NUMDOCI>
    </row>
  </table>`;

  SELECTED_DATE = this.dateList[0].id;
  RADIO_TYPE = 'web';

  RESLIST: any[] = [];

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
  BELNR2 = '3100000006';

  // User ID
  USERID;

  // XML
  xml_searchDoc = ''; // Gen XML for send to service

  // Hide
  forAdmin: boolean;
  forResult: boolean;

  // TEST ONLY
  sampleData: String = 'some parent Data';
  sampleChildData: String = '';

  constructor(private route: Router, private MenuTop: MenuTopComponent, public dialog: MdDialog,
              private httpService: Http, private GridViewComponent: GridViewComponent) {
    // TEST
    // console.log('Route:' + route.url);
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
    console.log(tab);
    console.log(this.RADIO_TYPE);
    this.coverDateFT();
    this.getXMLSearch(tab);
    // this.sendXMLSearch(); TEST
    this.genArrayXML();
    // this.GridViewComponent.click();
    this.forResult = false;
  }

  coverDateFT() {
    this.F_DATEC = this.F_DATE.getDate() + '/' + Number(this.F_DATE.getMonth() + 1) + '/' + this.F_DATE.getFullYear();
    this.T_DATEC = this.T_DATE.getDate() + '/' + Number(this.T_DATE.getMonth() + 1) + '/' + this.T_DATE.getFullYear();
  }

  getXMLSearch(tab) {
    if (tab === 0) {
      this.xml_searchDoc = '';
      this.xml_searchDoc = `<operation>
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
      this.xml_searchDoc = '';
      this.xml_searchDoc = `<operation>
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
    console.log(this.xml_searchDoc);
  }

  sendXMLSearch() {
    // รอ service log พร้อมใช้งาน
    const headers = new Headers({ 'Content-Type': 'application/xml' });
    const options = new RequestOptions({ headers: headers });
    this.httpService.post('http://idp.yai.io:8082/rest/kb02', this.xml_searchDoc, options).subscribe(values => {
      console.log('return', values);
      if (values.ok) {
        const result: any = values.json();
        let mes = result.response.message;
        if (mes !== 'Fail') {
          console.log('Suc');
        } else {
          console.log('Fail');
        }
      } else {
        console.log('F');
        alert(values.toString());
      }
    });
    // TEST

  }

  genArrayXML() {
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
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

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
