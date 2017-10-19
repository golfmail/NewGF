import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import { Component, OnInit, Injectable, Output, EventEmitter, Inject} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, Headers, RequestOptions} from '@angular/http';
import { ListViewComponent } from 'app/controls/list-view/list-view.component';
import { AppComponent } from 'app/app.component';
import { Tab } from 'app/controls/drop-down-view/drop-down-view.interface';
import { DropDownViewComponent } from 'app/controls/drop-down-view/drop-down-view.component';
import { DocSearch } from 'app/kb02/table-list-view';
import { TableList } from 'app/kb02/table-list-view';
import { DialogSearchComponent } from 'app/controls/dialog-search/dialog-search.component';
import { DialogSaveComponent } from 'app/controls/dialog-save/dialog-save.component';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { MdDatepickerModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
import { PaginationInstance } from 'ngx-pagination';

// import { Subscription } from 'rxjs/Subscription';

import { MenuTopComponent } from 'app/menu-top/menu-top.component';


import { Kb023Component } from '../../kb02/kb02-3/kb02-3.component';
// import { Popup } from 'ng2-opd-popup';
// import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
// import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
// import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
// export class NgbdDatepickerPopup {
//   model;
// }

// const I18N_VALUES = {
//   'th': {
//     weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
//     days: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์', 'อาทิตย์'],
//     daysShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
//     daysMin: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
//     months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
//              'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
//     monthsShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
//     today: 'วันนี้'
//   }
  // other languages you would support
// };

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
// @Injectable()
// export class I18n {
//   language = 'th';
// }

// Define custom service providing the months and weekdays translations
// @Injectable()
// export class CustomDatepickerI18n extends NgbDatepickerI18n {

//   constructor(private _i18n: I18n) {
//     super();
//   }

//   getWeekdayShortName(weekday: number): string {
//     return I18N_VALUES[this._i18n.language].weekdays[weekday ];
//   }
//   getMonthShortName(month: number): string {
//     return I18N_VALUES[this._i18n.language].months[month - 1];
//   }
//   getMonthFullName(month: number): string {
//     return this.getMonthShortName(month);
//   }
// }

@Component({
  selector: 'kb02-1',
  templateUrl: './kb02-1.component.html',
  styleUrls: ['./kb02-1.component.css'],
  providers: [ MenuTopComponent, Kb023Component]
  // providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}], // define custom NgbDatepickerI18n provider
})

// @Injectable()
export class Kb021Component implements OnInit  {

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1
  };
  // model: NgbDateStruct;
  date: {year: number, month: number};
  now = new Date();

   res: string;
  ddblartList: string[] = [
    'เพื่อจ่ายผู้ขาย/คู่สัญญา', 'เพื่อชดใช้ใบสำคัญ', 'เพื่อจ่ายเงินเดือนและเงินอื่นที่จ่ายสิ้นเดือน', 'เพื่อจ่ายให้ยืม',
    'รายการขอเบิกเงินอุดหนุน'
  ];
  soblartList  =  [
    {id: '1', Name: 'เพื่อจ่ายผู้ขาย/คู่สัญญา'},
    {id: '2', Name: 'เพื่อชดใช้ใบสำคัญ'},
    {id: '3', Name: 'เพื่อจ่ายเงินเดือนและเงินอื่นที่จ่ายสิ้นเดือน'},
    {id: '4', Name: 'เพื่อจ่ายให้ยืม'},
    {id: '5', Name: 'รายการขอเบิกเงินอุดหนุน'},
  ];
  soZlschList = [
    {id: '1', Name: 'จ่ายตรงเข้าบัญชีเงินฝากธนาคารของผู้ขาย/คู่สัญญา'},
    {id: '2', Name: 'จ่ายผ่านบัญชีเงินฝากธนาคารของหน่วยงาน'},
  ];

  HEADER  =  [
    {id: 'LBBUKRS', Val: ''},
    {id: 'TBZZPMT', Val: ''},
    {id: 'LBZZPMT', Val: ''},
    {id: 'LUSERID', Val: ''},
    {id: 'DDGSBER', Val: ''}, // IDBLART
    {id: 'IDBLART', Val: ''},
    {id: 'IDDATEA', Val: ''},
    {id: 'IDDATEI', Val: ''},
    {id: 'TBXBLNR', Val: ''},
    {id: 'tbSearch_term', Val: ''},
    {id: 'LIFNR', Val: ''},
    {id: 'NAME1', Val: ''},
    {id: 'ZLSCH', Val: ''},
    {id: 'TBKBLNR', Val: ''},
    {id: 'LBKBLNR', Val: ''},
  ];

  ValidateList: string[] = [];
  DDGSBER = '1000'; // รหัสพื้นที่

  ddZlschList: string[] = ['จ่ายตรงเข้าบัญชีเงินฝากธนาคารของผู้ขาย/คู่สัญญา', 'จ่ายผ่านบัญชีเงินฝากธนาคารของหน่วยงาน'];
  TBBUKRS = '0302';
  LBBUKRS = 'สนงใปลัดกระทรวงการคลัง';
  TBBLDAT = '25 กรกฎาคม 2559';
  TBBUDAT = '25 กรกฎาคม 2559';
  TBZZPMT = '0300200005'; // หน่วยเบิกจ่าย
  LBZZPMT = 'สำนักบริการกลาง';
  TBXBLNR = 'P6000001';
  TBGEBER = '6011220'; // แหล่งของเงิน
  LBGEBER = 'งบรายจ่ายอื่น/งบสรก.';
  tbSearch_term = '3011005842123'; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี      [Send to API]
  tbBankn = '1701013835'; // เลขที่บัญชีเงินฝากธนาคาร

  TBHKONT = '5104010107'; // รหัสบัญชีแยกประเภททั่วไป       [Send to API]
  TBKOSTL = '0300200005'; // รหัสศูนย์ต้นทุน        [Send to API]
  TBFISTL = '0300213001120001'; // รหัสงบประมาณ   [Send to API]
  TBFKBER = '030021000E0482'; // รหัสกิจกรรมหลัก             [Send to API]
  TBWRBTR = ''; // จำนวนเงินที่ขอเบิก            [Send to API]

  TBZZOBJ = ''; // รหัสบัญชีย่อย
  TBZZLOAN = ''; // รหัสหมวดพัสดุ
  TBPRZNR = ''; // รหัสกิจกรรมย่อย
  TBKBLNR = ''; // เลขที่เอกสารสำรองเงิน
  TBZZUNIT = ''; // รหัสเจ้าของบัญชีย่อย
  TBVBUND = ''; // รหัสหน่วยงานคู่ค้า
  // TBZZFIELD1 = ''; // รหัสหมวดพัสดุ

  // Test Date
  DATEA = new Date();
  DATEI = new Date();
  DATEACC = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  DATEINV = {year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
  DATENOW = new Date(); // TEST NEW DATE
  CPUDT = ''; // DATE ex: 11.12.2017
  CPUTIME = ''; // TIME ex: 22:40:59
  LOGYEAR: Number; // YEAR NOW ex: 2017
  LOGNO: Number = 0; // Log No. // eTEST

  // Fiscal year
  FCMONTH;
  GJAHR;

  // TEXT
  SGTXT = '';

  // Hard coding for Label
  LBTERM = 'มหาวิทยาลัยธรรมศาสตร์';
  LBKBLNR = ''; // ชื่อเลขที่เอกสารสำรองเงินงบประมาณ
  LBKOSTL = 'สำนักบริหารกลาง';
  LBFKBER = 'การติดตาม เร่งรัด การดำเน';
  LBFISTL = 'โครงการจัดตั้งศูนย์ค';
  LBPRZNR = '';
  LBZZOBJ = '';
  LBZZLOAN = '';
  LBHKONT = 'ค่าซ่อมแซมและค่าบำรุงรักษา';
  LBZZUNIT = ''; // (N) รหัสเจ้าของบัญชีย่อย
  LBVBUND = ''; // (N) รหัสหน่วยงานคู่ค้า

  // Disable & Show
  DSTBALL;
  SHOWBT;
  SHOWTR: Boolean = true; // TR
  HIDEBT: Boolean = false; // 3
  AFTDOC: Boolean = true; // After Have Document ID | for Show สร้างเอกสารใหม่, พิมพ์รายงาน, Log

  // // Declaration Variable of Value ID
  // IDFISTL: string; // (ID) รหัสงบประมาณ
  // IDKOSTL: string; // (ID) รหัสศูนย์ต้นทุน
  // IDHKONT: string; // (ID) รหัสบัญชีแยกประเภททั่วไป
  // IDWRBTR: string; // (ID) จำนวนเงินที่ขอเบิก

  // Hard coding for Value ID
  IDFISTL = '100';
  IDKOSTL = '101';
  IDHKONT = '1000002';
  IDWRBTR = '1000';
  IDSTERM = '2032400000';
  IDBLART = '';
  IDDATEA = '01/01/2017'; // (ID) Account Date
  IDDATEI = '02/01/2017'; // (ID) Date Invoiced

  // Hard coding for UserID
  LUSERID = this.TBZZPMT + '10' ; // UserID: หน่วยเบอกจ่าย + 10

  // Other Variable
  TBNUMTR: string; // Number of Table List
  TBBELNR = ''; // Doc No.
  LIFNR = ''; // LIFNR
  ZLSCH = ''; // ZLSCH
  SUMCOST: Number = 0; // เงินรวม

  // Corlor Content
  contentBlue   = 'fontContentBlue';
  contentGreen  = 'fontContentGreen';
  contentRed    = 'fontContentRed';
  contentBlack  = 'fontContentBlack';

  // Selected Value Doc. type
  selectedblart = this.soblartList[0].id;
  selectedZlsch = this.soZlschList[0].id;


  apiValues: string[] = [];
  saveTable: any []; // Array form save
  evilTitle = 'Template <i>Jo</i>';
  evilTitle2 ;
  logs: string[] = [];
  SAVELIST: any[] = [];
  // savelist = this.SAVELIST;
  selectedList: TableList;
  valuelist = 0;
  lbNUMBER: Number = 1;
  // dialogRef: MdDialogRef<DialogSearchComponent>;
  codetx: string;
  nametx: string;
  resultTB: string;
  resultLB: string;
  resultID: string;
  xml: string;
  xml_log: string;

  // งวด
  ddMonat: Number = 0;

  //  Validate for "Save to Lists"
  is_valid: boolean;

  // EXPAND
  EXPAND: Boolean = true;

  // Button All
  BTSAVE: Boolean = false;
  BTNEW: Boolean = true;
  BTDEL: Boolean = true;

  // ปีงบประมาณ
  yearList: any[] = [];
  // GJAHR = new Date();
  YEAR;

  constructor(
    public dialog: MdDialog,
    private httpService: Http,
    private route: ActivatedRoute,
    private router: Router,
    private _Kb023Component: Kb023Component) {
  }
  // constructor(private ListViewComponent: ListViewComponent) {
  // }

  // selectToday() {
  //   this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  // }
  detailSave() {
    console.log('detailSave');
  }

  openDialog(textcode, textname) {
    console.log('P: ' + textcode);
    this.codetx = textcode;
    this.nametx = document.getElementById(textname).textContent;
    const config = new MdDialogConfig();
    const dialogRef: MdDialogRef<DialogSearchComponent> = this.dialog.open(DialogSearchComponent, {panelClass: 'myapp-no-padding-dialog'});
    dialogRef.componentInstance.code_t = this.codetx;
    dialogRef.componentInstance.name_t = this.nametx;
    dialogRef.componentInstance.year_t = this.YEAR;
    // cssKOSTL
    // dialogRef.componentInstance.sizet = 'Large';

    // this.dialog.afterOpen().subscribe
    dialogRef.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.resultTB = selection.value;
          this.resultLB = selection.name;
          this.resultID = selection.id;
          console.log('R: ' + this.resultTB + ' | ' + this.resultLB + ' | ' + this.resultID);
//          (<HTMLInputElement>document.getElementById(textcode)).value = this.sizetx;
              switch (textcode) {
                case 'TBKOSTL': // รหัสศูนย์ต้นทุน
                this.TBKOSTL = this.resultTB; // Set TB (Value)
                this.IDKOSTL = this.resultID; // Set ID (id)
                this.LBKOSTL = this.resultLB; // Set LB (Name)
                break;
              case 'TBFKBER': // รหัสกิจกรรมหลัก
                this.TBFKBER = this.resultTB;
                this.LBFKBER = this.resultLB;
                break;
              case 'TBFISTL': // รหัสงบประมาณ
                this.TBFISTL = this.resultTB;
                this.IDFISTL = this.resultID;
                this.LBFISTL = this.resultLB;
                break;
              case 'TBZZPMT': // หน่วยเบิกจ่าย
                this.TBZZPMT = this.resultTB;
                this.LBZZPMT = this.resultLB;
                break;
              case 'TBZZOBJ': // รหัสบัญชีย่อย
                this.TBZZOBJ = this.resultTB;
                this.LBZZOBJ = this.resultLB;
                break;
              case 'TBZZLOAN': // รหัสหมวดพัสดุ
                this.TBZZLOAN = this.resultTB;
                this.LBZZLOAN = this.resultLB;
                break;
              case 'TBPRZNR': // รหัสกิจกรรมย่อย
                this.TBPRZNR = this.resultTB; // Set Value
                this.LBPRZNR = this.resultLB;
                break;
              case 'TBHKONT': // รหัสบัญชีแยกประเภททั่วไป
                this.TBHKONT = this.resultTB; // Set Value
                this.LBHKONT = this.resultLB;
                this.IDHKONT = this.resultID;
                break;
              case 'TBGEBER': // รหัสบัญชีแยกประเภททั่วไป
                this.TBGEBER = this.resultTB; // Set Value
                this.LBGEBER = this.resultLB;
                // this.IDHKONT = this.resultID;
                break;
              }
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });

  }

  log(selectedTab: Tab) {
    this.logs.push('Selected Tab with title: ' + selectedTab.tabTitle);
  }

  onDisable() {
    console.log('Disable Page');
    this.DSTBALL = true;
    this.SHOWBT = true;
    // cssBukrs
  }

  onEnableInput(what) {
    switch (what) {
      case 'Y':
        this.DSTBALL = false;
        this.SHOWBT = false;
        break;
      case 'N':
        this.DSTBALL = true;
        this.SHOWBT = true;
        break;
      default:
        this.DSTBALL = false;
        this.SHOWBT = false;
        break;
    }
  }

  onColor(what) {
    switch (what) {
      case 'Y': // All font Default
        this.contentBlue   = 'fontContentBlue';
        this.contentGreen  = 'fontContentGreen';
        this.contentRed    = 'fontContentRed';
        break;
      case 'N': // All font Disable
        this.contentBlue   = 'fontContentBlack';
        this.contentGreen  = 'fontContentBlack';
        this.contentRed    = 'fontContentBlack';
        break;
      default:
        this.contentBlue   = 'fontContentBlue';
        this.contentGreen  = 'fontContentGreen';
        this.contentRed    = 'fontContentRed';
        break;
    }
    // this.contentBlack  = 'fontContentBlack';
  }

  onShowDocID() {
    // + Function for Show Doc.Number | Hiden 3 Button
    this.SHOWTR = false; // Show Doc
    this.HIDEBT = true; // Hide จำลองการบันทึก & 3 Save
    this.AFTDOC = false; // Show 3 Button Log
  }

  // button: สร้างเอกสารใหม่
  onNewDoc() {
    this.router.navigate(['/kb021']);
    this.EXPAND = true;
    this.SAVELIST = []; // Clear List
    this.SAVELIST = [];
    this.SHOWTR = true; // Hide Doc
    this.HIDEBT = false; // Show จำลองการบันทึก & 3 Save
    this.AFTDOC = true; // Hide 3 Button Log
    this.onColor('Y');
    this.onEnableInput('Y'); // Y = Enable All Input
  }

  onSelectDate(typeDate) {
    // ปีบัญชี และ งวด เริ่มต้น
    if (typeDate === 'inv') {
      console.log(this.DATEINV);
      if (this.DATEINV.month >= 10 ) {
        this.GJAHR = Number(this.DATEINV.year) + 1;
        console.log('f' + this.GJAHR);
      } else {
        this.GJAHR = this.DATEINV.year;
        console.log(this.GJAHR);
      }
      if (this.DATEINV.month < 10) {
          this.ddMonat = this.DATEINV.month + 3;
      } else {
        this.ddMonat = this.DATEINV.month - 9;
      }
    } else if (typeDate === 'i') {
      if (this.DATEI.getMonth() >= 9 ) {
        this.GJAHR = Number(this.DATEI.getFullYear()) + 1;
        console.log('f' + this.GJAHR);
      } else {
        this.GJAHR = this.DATEI.getFullYear();
        console.log('f' + this.GJAHR);
      }
      if (this.DATEI.getMonth() < 9) {
        console.log(this.DATEI.getMonth());
        this.ddMonat = this.DATEI.getMonth() + 4;
      } else {
        this.ddMonat = this.DATEI.getMonth() - 8;
        console.log(this.DATEI.getMonth());
      }
    }
  }

  onSelect(save: TableList, i): void {
    // document.getElementById('lbNUMBER').innerText = i + 1;
    this.BTDEL = false;
    this.BTNEW = false;
    this.lbNUMBER = i + 1;
    this.valuelist = i + 1;
    this.selectedList = save; // => Selected
    this.TBBUKRS = save.TBBUKRS;
    this.LBBUKRS = save.LBBUKRS;
    this.TBBLDAT = save.TBBLDAT;
    this.TBBUDAT = save.TBBUDAT;
    this.TBZZPMT = save.TBZZPMT;
    this.LBZZPMT = save.LBZZPMT;
    this.TBXBLNR = save.TBXBLNR;
    this.TBGEBER = save.TBGEBER; // แหล่งของเงิน
    this.LBGEBER = save.LBGEBER;
    this.tbSearch_term = save.tbSearch_term; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
    this.tbBankn = save.tbBankn; // เลขที่บัญชีเงินฝากธนาคาร
    this.TBHKONT = save.TBHKONT; // รหัสบัญชีแยกประเภททั่วไป
    this.TBKOSTL = save.TBKOSTL; // รหัสศูนย์ต้นทุน
    this.TBFISTL = save.TBFISTL; // รหัสงบประมาณ
    this.TBFKBER = save.TBFKBER; // รหัสกิจกรรมหลัก
    this.TBWRBTR = save.TBWRBTR; // จำนวนเงินที่ขอเบิก
    this.TBPRZNR = save.TBPRZNR; // รหัสกิจกรรมย่อย
    this.TBZZOBJ = save.TBZZOBJ; // รหัสบัญชีย่อย
    this.TBZZUNIT = save.TBZZUNIT; // รหัสเจ้าของบัญชีย่อย
    this.TBZZLOAN = save.TBZZLOAN; // รหัสหมวดพัสดุ
    this.TBVBUND = save.TBVBUND; // รหัสหน่วยงานคู่ค้า

    this.GJAHR = save.GJAHR; // ปีบัญชี
    this.SGTXT = save.SGTXT; // รายละเอียดบรรทัดรายการ

    this.LBHKONT = save.LBHKONT; // (ช) ชื่อบัญชีแยกประเภททั่วไป
    this.LBKOSTL = save.LBKOSTL; // (N) ชื่อศูนย์ต้นทุน
    this.LBFISTL = save.LBFISTL; // (N) ชื่องบประมาณ
    this.LBFKBER = save.LBFKBER; // (N) ชื่อกิจกรรมหลัก
    this.LBPRZNR = save.LBPRZNR; // (N) ชื่อกิจกรรมย่อย
    this.LBZZOBJ = save.LBZZOBJ; // (N) รหัสบัญชีย่อย
    this.LBZZUNIT = this.LBZZUNIT; // (N) รหัสเจ้าของบัญชีย่อย
    this.LBZZLOAN = this.LBZZLOAN; // (N) รหัสหมวดพัสดุ
    this.LBVBUND = this.LBVBUND; // (N) รหัสหน่วยงานคู่ค้า

    this.IDFISTL = save.IDFISTL; // (ID) รหัสงบประมาณ
    this.IDKOSTL = save.IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
    this.IDHKONT = save.IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
    this.IDWRBTR = save.IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
    this.IDSTERM = save.IDSTERM; // (ID) เลขประจำตัวผู้เสียภาษี
    this.IDBLART = save.IDBLART; // (ID) Doc. Type
    this.IDDATEA = save.IDDATEA; // (ID) Account Date
    this.IDDATEI = save.IDDATEI; // (ID) Date Invoic
  }

  checkform() {
    //
    const tHead = 'กรุณากรอก';
    if (!this.TBBUKRS) {
      this.ValidateList.push(tHead + 'รหัสหน่วยงาน');
    } if (!this.TBBLDAT) {
      this.ValidateList.push(tHead + 'วันที่เอกสาร');
    } if (!this.DDGSBER) {
      this.ValidateList.push(tHead + 'รหัสพื้นที่');
    } if (!this.TBBUDAT) {
      this.ValidateList.push(tHead + 'วันที่ผ่านรายการ');
    } if (!this.TBZZPMT) {
      this.ValidateList.push(tHead + 'รหัสหน่วยเบิกจ่าย');
    } if (!this.TBXBLNR) {
      this.ValidateList.push(tHead + 'การอ้างอิง');
    } if (!this.TBHKONT) {
      this.ValidateList.push(tHead + 'รหัสบัญชีแยกประเภททั่วไป');
    } if (!this.TBKOSTL) {
      this.ValidateList.push(tHead + 'รหัสศูนย์ต้นทุน');
    } if (!this.TBFKBER) {
      this.ValidateList.push(tHead + 'รหัสกิจกรรมหลัก');
    } if (!this.TBFISTL) {
      this.ValidateList.push(tHead + 'รหัสงบประมาณ');
    } if (!this.TBGEBER) {
      this.ValidateList.push(tHead + 'แหล่งของเงิน');
    // } if (!this.TBPRZNR) {
    //   this.ValidateList.push(tHead + 'รหัสกิจกรรมย่อย');
    // } if (!this.TBZZOBJ) {
    //   this.ValidateList.push(tHead + 'รหัสบัญชีย่อย');
    // } if (!this.TBZZLOAN) {
    //   this.ValidateList.push(tHead + 'รหัสหมวดพัสดุ');
    } if (!this.TBWRBTR) {
      this.ValidateList.push(tHead + 'จำนวนเงินขอเบิก');
    // } if (!this.TBKBLNR) {
    //   this.ValidateList.push(tHead + 'เลขที่เอกสารสำรองเงิน');
    } if (!this.tbSearch_term) {
      this.ValidateList.push(tHead + 'เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี');
    } if (!this.tbBankn) {
      this.ValidateList.push(tHead + 'เลขที่บัญชีเงินฝากธนาคาร');
    }
  }

  // summary total rows keng
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.SAVELIST.length; i++) {
        if (this.SAVELIST[i].TBWRBTR) {
            total += Number(this.SAVELIST[i].TBWRBTR);
            // this.totalAmount = total;
        }
    }
    this.SUMCOST = total;
    return total;
}
  setTotal(result) {
    this.res = result;
    // document.getElementById('success').style.display = 'block';
    // document.getElementById('showSuccess').style.display = 'block';
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

  numberWithDecimal(x) {
    const number = x.toString();
    const baht = number.split('.')[0];
    const cents = (number.split('.')[1] || '') + '00';
    return baht + '.' + cents.slice(0, 2);
  }

  // Get Doc. type
  getDcotype() {
    console.log(this.selectedblart);
    console.log(this.selectedZlsch);
    if (this.selectedZlsch = '1') {
        switch (this.selectedblart) {
          case '1': this.IDBLART = 'KC'; break;
          case '2': this.IDBLART = 'KL'; break;
          case '3': this.IDBLART = 'K0'; break;
          case '4': this.IDBLART = 'K1'; break;
          case '5': this.IDBLART = 'K8'; break;
          default: break;
        }
    } else if (this.selectedZlsch = '2') {
      switch (this.selectedblart) {
        case '1': this.IDBLART = 'KE'; break;
        case '2': this.IDBLART = 'KL'; break;
        case '3': this.IDBLART = 'K0'; break;
        case '4': this.IDBLART = 'K1'; break;
        case '5': this.IDBLART = 'K8'; break;
        default: break;
      }
    }
  }

  // Get Account,Invoiced Date
  getDateAI() {
    // alert(this.DATEACC);
    console.log(this.DATEI);
    const DA = this.DATEA;
    const DI = this.DATEI;
    this.IDDATEA = DA.getDate() + '/' + (DA.getMonth() + 1) + '/' + DA.getFullYear();
    this.IDDATEI = DI.getDate() + '/' + (DI.getMonth() + 1 ) + '/' + DI.getFullYear();
    console.log('A: ' + this.IDDATEA + ', I: ' + this.IDDATEI);
  }

  chkValidate() {
    console.log(this.TBFISTL.length);
    const F_TBFISTL = this.TBFISTL.substr(0, 5); // รหัสงบประมาณ 5 หลักแรก
    const F_TBKOSTL = this.TBKOSTL.substr(0, 5); // รหัสศูนย์ต้นทุน 5 หลักแรก
    const F_TBFKBER = this.TBFKBER.substr(0, 5); // รหัสกิจกรรมหลัก 5 หลักแรก
    const P_TBKOSTL = this.TBKOSTL.substr(1, 5); // รหัสจังหวัดจากศูนย์ต้นทุน
    const P_TBFKBER = this.TBFKBER.substr(1, 5); // รหัสจังหวัดในกิจกรรมหลัก
    if (this.TBGEBER.substr(2, 2) === '19' // แหล่งเงิน เป็น YY19xxxx
        && F_TBFISTL === F_TBKOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
        && this.TBFKBER.substr(0, 5) === this.TBKOSTL.substr(0, 5)) {
      console.log('Y!1');
      this.is_valid = true;
    } else if ((this.TBGEBER.substr(2, 1) === '2' || this.TBGEBER.substr(2, 1) === '3') // แหล่งเงิน เป็น  YY2xxxx หรือ YY3xxxxxx
        && this.TBFISTL.length === 5 // รหัสงบประมาณมี 5 หลัก
        && F_TBFISTL === F_TBKOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
        && P_TBKOSTL === P_TBFKBER) { // รหัสจังหวัดจากศูนย์ต้นทุน = รหัสจังหวัดในกิจกรรมหลัก
      console.log('Y!2');
      this.is_valid = true;
    } else if (this.TBGEBER.substr(2, 1) === '1') { // แหล่งเงิน เป็น YY1xxxxxx
      console.log('Y!3');
      if (this.TBGEBER.substr(2, 2) === '11' // แหล่งเงิน เป็น YY11xxxxx
          && this.TBFISTL.length === 16 // รหัสงบประมาณ 16 หลัก
          && F_TBFISTL === F_TBKOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
          && P_TBKOSTL === P_TBFKBER // รหัสจังหวัดจากศูนย์ต้นทุน = รหัสจังหวัดในกิจกรรมหลัก
          && F_TBKOSTL === F_TBFKBER) { // รหัสศูนย์ต้นทุน 5 หลักแรก = รหัสกิจกรรมหลัก 5 หลักแรก
          console.log('Y!3.1');
          this.is_valid = true;
        } else if (this.TBGEBER.substr(2, 2) === '11' // แหล่งเงิน เป็น YY11xxxxx
          && this.TBFISTL.length === 16 // รหัสงบประมาณ 16 หลัก
          && F_TBFISTL === '80808' // รหัสงบประมาณ 5 หลักแรก = 80808
          && F_TBFKBER === '80808' // รหัสกิจกรรมหลัก 5 หลักแรก = 80808
          && F_TBKOSTL === F_TBFKBER) { // รหัสศูนย์ต้นทุน 5 หลักแรก = รหัสกิจกรรมหลัก 5 หลักแรก
          console.log('Y!3.2');
          this.is_valid = true;
        } else if (this.TBGEBER.substr(2, 2) === '10' // แหล่งเงิน เป็น YY10xxxxx
          && (this.TBFISTL.length === (10 || 12 || 14 || 16) ) // รหัสงบประมาณ เป็น 10 หรือ 12 หรือ 14 หรือ 16 หลัก
          && F_TBFISTL === '90909') { // รหัสงบประมาณ 5 หลักแรก = 90909
          console.log('Y!3.3');
          this.is_valid = true;
      } else {
        console.log('N!3');
        this.is_valid = false;
      }
    } else if (this.TBGEBER.substr(2, 1) === '4' // แหล่งเงิน เป็น YY4xxxxxx
        && this.TBFISTL.length === 16 // รหัสงบประมาณ เป็น 16 หลัก
        && F_TBFISTL === F_TBKOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
        && P_TBKOSTL === P_TBFKBER ) {// รหัสจังหวัดจากศูนย์ต้นทุน = รหัสจังหวัดใน กิจกรรมหลัก
      console.log('Y!4');
      this.is_valid = true;
    } else if (this.TBGEBER.substr(2, 2) === '41' // แหล่งเงิน เป็น YY41xxxxx
        && this.TBFISTL.length === (10 || 12 || 14 || 16) // รหัสงบประมาณ เป็น 10 หรือ 12 หรือ 14 หรือ 16 หลัก
        && F_TBFISTL === '90909' ) {// รหัสงบประมาณ 5 หลักแรก = 90909
      console.log('Y!5');
      this.is_valid = true;
    } else {
      console.log('N!');
      this.is_valid = false;
    }
  }

  formSave() {
    this.ValidateList = [];
    this.checkform();
    this.getDcotype(); // get IDBLART
    this.getDateAI(); // Get Date
    this.chkValidate(); // Check Validate form
    if (this.ValidateList.length <= 0) { // && this.is_valid === true
    this.valuelist = 0;
    if (typeof this.SAVELIST === 'undefined' && this.lbNUMBER === 0) { // this.saveTable
        // alert('undefined')
        this.SAVELIST = [{
          TBBUKRS: this.TBBUKRS,
          LBBUKRS: this.LBBUKRS,
          TBBLDAT: this.TBBLDAT,
          TBBUDAT: this.TBBUDAT,
          TBZZPMT: this.TBZZPMT,
          LBZZPMT: this.LBZZPMT,
          TBXBLNR: this.TBXBLNR,
          TBGEBER: this.TBGEBER, // แหล่งของเงิน
          LBGEBER: this.LBGEBER,
          tbSearch_term: this.tbSearch_term, // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
          tbBankn: this.tbBankn, // เลขที่บัญชีเงินฝากธนาคาร
          TBHKONT: this.TBHKONT, // รหัสบัญชีแยกประเภททั่วไป
          TBKOSTL: this.TBKOSTL, // รหัสศูนย์ต้นทุน
          TBFISTL: this.TBFISTL, // รหัสงบประมาณ
          TBFKBER: this.TBFKBER, // รหัสกิจกรรมหลัก
          TBWRBTR: Number(this.TBWRBTR).toFixed(2), // จำนวนเงินที่ขอเบิก
          TBPRZNR: this.TBPRZNR, // รหัสกิจกรรมย่อย
          TBZZOBJ: this.TBZZOBJ, // รหัสบัญชีย่อย
          TBZZUNIT: this.TBZZUNIT, // รหัสเจ้าของบัญชีย่อย
          TBZZLOAN: this.TBZZLOAN, // รหัสหมวดพัสดุ
          TBVBUND: this.TBVBUND, // รหัสหน่วยงานคู่ค้า
          IDFISTL: this.IDFISTL, // (ID) รหัสงบประมาณ
          IDKOSTL: this.IDKOSTL, // (ID) รหัสศูนย์ต้นทุน
          IDHKONT: this.IDHKONT, // (ID) รหัสบัญชีแยกประเภททั่วไป
          IDWRBTR: this.IDWRBTR, // (ID) จำนวนเงินที่ขอเบิก
          IDSTERM: this.IDSTERM, // (ID) เลขประจำตัวผู้เสียภาษี
          IDBLART: this.IDBLART, // (ID) Doc. Type
          IDDATEA: this.IDDATEA, // (ID) Account Date
          IDDATEI: this.IDDATEI, // (ID) Date Invoic
          GJAHR: this.GJAHR, // ปีบัญชี
          SGTXT: this.SGTXT, // รายละเอียดบรรทัดรายการ
          LBHKONT: this.LBHKONT, // (N) ชื่อบัญชีแยกประเภททั่วไป
          LBKOSTL: this.LBKOSTL, // (N) ชื่อศูนย์ต้นทุน
          LBFISTL: this.LBFISTL, // (N) ชื่องบประมาณ
          LBFKBER: this.LBFKBER, // (N) ชื่อกิจกรรมหลัก
          LBPRZNR: this.LBPRZNR, // (N) ชื่อกิจกรรมย่อย
          LBZZOBJ: this.LBZZOBJ, // (N) รหัสบัญชีย่อย
          LBZZUNIT: this.LBZZUNIT, // (N) รหัสเจ้าของบัญชีย่อย
          LBZZLOAN: this.LBZZLOAN, // (N) รหัสหมวดพัสดุ
          LBVBUND: this.LBVBUND, // (N) รหัสหน่วยงานคู่ค้า
          }];
        // alert(SAVELIST.length);
        this.lbNUMBER = this.SAVELIST.length;
        console.log('GotoJO');
    } else  {
        // this.valuelist = Number(this.lbNUMBER); // TEST
        this.SAVELIST.push({
          TBBUKRS: this.TBBUKRS,
          LBBUKRS: this.LBBUKRS,
          TBBLDAT: this.TBBLDAT,
          TBBUDAT: this.TBBUDAT,
          TBZZPMT: this.TBZZPMT,
          LBZZPMT: this.LBZZPMT,
          TBXBLNR: this.TBXBLNR,
          TBGEBER: this.TBGEBER, // แหล่งของเงิน
          LBGEBER: this.LBGEBER,
          tbSearch_term: this.tbSearch_term, // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
          tbBankn: this.tbBankn, // เลขที่บัญชีเงินฝากธนาคาร
          TBHKONT: this.TBHKONT, // รหัสบัญชีแยกประเภททั่วไป
          TBKOSTL: this.TBKOSTL, // รหัสศูนย์ต้นทุน
          TBFISTL: this.TBFISTL, // รหัสงบประมาณ
          TBFKBER: this.TBFKBER, // รหัสกิจกรรมหลัก
          TBWRBTR: Number(this.TBWRBTR).toFixed(2), // จำนวนเงินที่ขอเบิก
          TBPRZNR: this.TBPRZNR, // รหัสกิจกรรมย่อย
          TBZZOBJ: this.TBZZOBJ, // รหัสบัญชีย่อย
          TBZZUNIT: this.TBZZUNIT, // รหัสเจ้าของบัญชีย่อย
          TBZZLOAN: this.TBZZLOAN, // รหัสหมวดพัสดุ
          TBVBUND: this.TBVBUND, // รหัสหน่วยงานคู่ค้า
          IDFISTL: this.IDFISTL, // (ID) รหัสงบประมาณ
          IDKOSTL: this.IDKOSTL, // (ID) รหัสศูนย์ต้นทุน
          IDHKONT: this.IDHKONT, // (ID) รหัสบัญชีแยกประเภททั่วไป
          IDWRBTR: this.IDWRBTR, // (ID) จำนวนเงินที่ขอเบิก
          IDSTERM: this.IDSTERM, // (ID) เลขประจำตัวผู้เสียภาษี
          IDBLART: this.IDBLART, // (ID) Doc. Type
          IDDATEA: this.IDDATEA, // (ID) Account Date
          IDDATEI: this.IDDATEI, // (ID) Date Invoic
          GJAHR: this.GJAHR, // ปีบัญชี
          SGTXT: this.SGTXT, // รายละเอียดบรรทัดรายการ
          LBHKONT: this.LBHKONT, // (N) ชื่อบัญชีแยกประเภททั่วไป
          LBKOSTL: this.LBKOSTL, // (N) ชื่อศูนย์ต้นทุน
          LBFISTL: this.LBFISTL, // (N) ชื่องบประมาณ
          LBFKBER: this.LBFKBER, // (N) ชื่อกิจกรรมหลัก
          LBPRZNR: this.LBPRZNR, // (N) ชื่อกิจกรรมย่อย
          LBZZOBJ: this.LBZZOBJ, // (N) รหัสบัญชีย่อย
          LBZZUNIT: this.LBZZUNIT, // (N) รหัสเจ้าของบัญชีย่อย
          LBZZLOAN: this.LBZZLOAN, // (N) รหัสหมวดพัสดุ
          LBVBUND: this.LBVBUND, // (N) รหัสหน่วยงานคู่ค้า
          });

            this.lbNUMBER = this.SAVELIST.length + 1;


          // this.selectedList === this.SAVELIST[this.lbNUMBER.toString()];
          // console.log(this.lbNUMBER + '-' + this.selectedList);
          // this.onSelect(this.SAVELIST[this.lbNUMBER.toString()], (Number(this.lbNUMBER) - 1));
        }

        console.log(this.SAVELIST);
         this.setTotal(this.IDWRBTR);
      } else {
        console.log('กรอกข้อมูลไม่ครบ');
      }
    }



  formDelete() {
    this.BTDEL = true;
    this.BTNEW = true;
    const row = Number(this.lbNUMBER) - 1;
    this.SAVELIST.splice(row, 1); // Delete with ลำดับ
    console.log('Total array: ' + this.SAVELIST.length);
    this.lbNUMBER = this.SAVELIST.length + 1;
    // if (this.valuelist > 0) {
    //   let lbNUMBER = Number(document.getElementById('lbNUMBER').textContent);
    //   console.log('Del No. ' + lbNUMBER);
    //   lbNUMBER = lbNUMBER - 1;
    //   this.SAVELIST.splice(lbNUMBER, 1); // Delete with ลำดับ
    // } else {
    //   alert('กรอกข้อมูลไม่ครบหรือข้อมูลไม่สัมพันธ์กัน');
    // }
    // this.valuelist = 0;
  }

  formNew() {
    this.SAVELIST.push({
      TBBUKRS: this.TBBUKRS,
      LBBUKRS: this.LBBUKRS,
      TBBLDAT: this.TBBLDAT,
      TBBUDAT: this.TBBUDAT,
      TBZZPMT: this.TBZZPMT,
      LBZZPMT: this.LBZZPMT,
      TBXBLNR: this.TBXBLNR,
      TBGEBER: this.TBGEBER, // แหล่งของเงิน
      LBGEBER: this.LBGEBER,
      tbSearch_term: this.tbSearch_term, // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
      tbBankn: this.tbBankn, // เลขที่บัญชีเงินฝากธนาคาร
      TBHKONT: this.TBHKONT, // รหัสบัญชีแยกประเภททั่วไป
      TBKOSTL: this.TBKOSTL, // รหัสศูนย์ต้นทุน
      TBFISTL: this.TBFISTL, // รหัสงบประมาณ
      TBFKBER: this.TBFKBER, // รหัสกิจกรรมหลัก
      TBWRBTR: Number(this.TBWRBTR).toFixed(2), // จำนวนเงินที่ขอเบิก
      TBPRZNR: this.TBPRZNR, // รหัสกิจกรรมย่อย
      TBZZOBJ: this.TBZZOBJ, // รหัสบัญชีย่อย
      TBZZUNIT: this.TBZZUNIT, // รหัสเจ้าของบัญชีย่อย
      TBZZLOAN: this.TBZZLOAN, // รหัสหมวดพัสดุ
      TBVBUND: this.TBVBUND, // รหัสหน่วยงานคู่ค้า
      IDFISTL: this.IDFISTL, // (ID) รหัสงบประมาณ
      IDKOSTL: this.IDKOSTL, // (ID) รหัสศูนย์ต้นทุน
      IDHKONT: this.IDHKONT, // (ID) รหัสบัญชีแยกประเภททั่วไป
      IDWRBTR: this.IDWRBTR, // (ID) จำนวนเงินที่ขอเบิก
      IDSTERM: this.IDSTERM, // (ID) เลขประจำตัวผู้เสียภาษี
      IDBLART: this.IDBLART, // (ID) Doc. Type
      IDDATEA: this.IDDATEA, // (ID) Account Date
      IDDATEI: this.IDDATEI, // (ID) Date Invoic
      GJAHR: this.GJAHR, // ปีบัญชี
      SGTXT: this.SGTXT, // รายละเอียดบรรทัดรายการ
      LBHKONT: this.LBHKONT, // (N) ชื่อบัญชีแยกประเภททั่วไป
      LBKOSTL: this.LBKOSTL, // (N) ชื่อศูนย์ต้นทุน
      LBFISTL: this.LBFISTL, // (N) ชื่องบประมาณ
      LBFKBER: this.LBFKBER, // (N) ชื่อกิจกรรมหลัก
      LBPRZNR: this.LBPRZNR, // (N) ชื่อกิจกรรมย่อย
      LBZZOBJ: this.LBZZOBJ, // (N) รหัสบัญชีย่อย
      LBZZUNIT: this.LBZZUNIT, // (N) รหัสเจ้าของบัญชีย่อย
      LBZZLOAN: this.LBZZLOAN, // (N) รหัสหมวดพัสดุ
      LBVBUND: this.LBVBUND, // (N) รหัสหน่วยงานคู่ค้า
      });
      this.lbNUMBER = this.SAVELIST.length + 1;
      this.BTDEL = true;
      this.BTNEW = true;
  }

  formEdit() {
    // console.log('Log: Edit');
    // this.lbNUMBER
    // let lbNUMBER = Number(document.getElementById('lbNUMBER').textContent);
    let lbNUMBER = Number(this.lbNUMBER);
    console.log('Edit No. ' + lbNUMBER);
    lbNUMBER = lbNUMBER - 1; // ตำแหน่ง Array
    if (this.lbNUMBER <= this.SAVELIST.length) {
      this.SAVELIST[lbNUMBER].TBBUKRS = this.TBBUKRS;
      this.SAVELIST[lbNUMBER].LBBUKRS = this.LBBUKRS;
      this.SAVELIST[lbNUMBER].TBBLDAT = this.TBBLDAT;
      this.SAVELIST[lbNUMBER].TBBUDAT = this.TBBUDAT;
      this.SAVELIST[lbNUMBER].TBZZPMT = this.TBZZPMT;
      this.SAVELIST[lbNUMBER].LBZZPMT = this.LBZZPMT;
      this.SAVELIST[lbNUMBER].TBXBLNR = this.TBXBLNR;
      this.SAVELIST[lbNUMBER].TBGEBER = this.TBGEBER; // แหล่งของเงิน
      this.SAVELIST[lbNUMBER].LBGEBER = this.LBGEBER;
      this.SAVELIST[lbNUMBER].tbSearch_term = this.tbSearch_term; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
      this.SAVELIST[lbNUMBER].tbBankn = this.tbBankn; // เลขที่บัญชีเงินฝากธนาคาร
      this.SAVELIST[lbNUMBER].TBHKONT = this.TBHKONT; // รหัสบัญชีแยกประเภททั่วไป
      this.SAVELIST[lbNUMBER].TBKOSTL = this.TBKOSTL; // รหัสศูนย์ต้นทุน
      this.SAVELIST[lbNUMBER].TBFISTL = this.TBFISTL; // รหัสงบประมาณ
      this.SAVELIST[lbNUMBER].TBFKBER = this.TBFKBER; // รหัสกิจกรรมหลัก
      this.SAVELIST[lbNUMBER].TBWRBTR = Number(this.TBWRBTR).toFixed(2); // จำนวนเงินที่ขอเบิก
      this.SAVELIST[lbNUMBER].TBPRZNR = this.TBPRZNR; // รหัสกิจกรรมย่อย
      this.SAVELIST[lbNUMBER].TBZZOBJ = this.TBZZOBJ; // รหัสบัญชีย่อย
      this.SAVELIST[lbNUMBER].TBZZUNIT = this.TBZZUNIT; // รหัสเจ้าของบัญชีย่อย
      this.SAVELIST[lbNUMBER].TBZZLOAN = this.TBZZLOAN; // รหัสหมวดพัสดุ
      this.SAVELIST[lbNUMBER].TBVBUND = this.TBVBUND; // รหัสหน่วยงานคู่ค้า
      this.SAVELIST[lbNUMBER].IDFISTL = this.IDFISTL; // (ID) รหัสงบประมาณ
      this.SAVELIST[lbNUMBER].IDKOSTL = this.IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
      this.SAVELIST[lbNUMBER].IDHKONT = this.IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
      this.SAVELIST[lbNUMBER].IDWRBTR = this.IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
      this.SAVELIST[lbNUMBER].IDSTERM = this.IDSTERM; // (ID) เลขประจำตัวผู้เสียภาษี
      this.SAVELIST[lbNUMBER].IDBLART = this.IDBLART; // (ID) Doc. Type
      this.SAVELIST[lbNUMBER].IDDATEA = this.IDDATEA; // (ID) Account Date
      this.SAVELIST[lbNUMBER].IDDATEI = this.IDDATEI; // (ID) Date Invoic
      this.SAVELIST[lbNUMBER].GJAHR = this.GJAHR; // ปีบัญชี
      this.SAVELIST[lbNUMBER].SGTXT = this.SGTXT; // รายละเอียดบรรทัดรายการ
      this.SAVELIST[lbNUMBER].LBHKONT = this.LBHKONT; // (N) ชื่อบัญชีแยกประเภททั่วไป
      this.SAVELIST[lbNUMBER].LBKOSTL = this.LBKOSTL; // (N) ชื่อศูนย์ต้นทุน
      this.SAVELIST[lbNUMBER].LBFISTL = this.LBFISTL; // (N) ชื่องบประมาณ
      this.SAVELIST[lbNUMBER].LBFKBER = this.LBFKBER; // (N) ชื่อกิจกรรมหลัก
      this.SAVELIST[lbNUMBER].LBPRZNR = this.LBPRZNR; // (N) ชื่อกิจกรรมย่อย
      this.SAVELIST[lbNUMBER].LBZZOBJ = this.LBZZOBJ; // (N) รหัสบัญชีย่อย
      this.SAVELIST[lbNUMBER].LBZZUNIT = this.LBZZUNIT; // (N) รหัสเจ้าของบัญชีย่อย
      this.SAVELIST[lbNUMBER].LBZZLOAN = this.LBZZLOAN; // (N) รหัสหมวดพัสดุ
      this.SAVELIST[lbNUMBER].LBVBUND = this.LBVBUND; // (N) รหัสหน่วยงานคู่ค้า

      this.lbNUMBER = this.SAVELIST.length + 1;
      this.BTDEL = true;
      this.BTNEW = true;
    } else {
      this.formSave();

      this.BTDEL = true;
      this.BTNEW = true;
    }

  }

  formShow() {
    console.log('Show');
  }
  formSend() {
    this.xml = '';
     this.xml = `<operations>\n\
     <operation>\n\
      <modelCRUD>\n\
        <tableName>Invoice</tableName>\n\
          <recordID>0</recordID>\n\
            <action>CreateUpdate</action>\n\
              <dataRow>\n\
                <field column="tbSearch_term">\n\
                  <val>120</val>\n\
                </field>\n\
			        </dataRow>\n\
		      </modelCRUD>\n\
	      </operation>`;
    for (let index = 0; index < this.SAVELIST.length; index++) {
      const element = this.SAVELIST[index];
      this.xml = this.xml + `\n\<operation>
		  <modelCRUD>\n\
			  <tableName>InvoiceLine</tableName>\n\
			    <recordID>0</recordID>\n\
            <action>CreateUpdate</action>\n\
            <dataRow>\n\
              <field column="TBFISTL">\n\
                <val>${element.IDFISTL}</val>\n\
              </field>\n\
              <field column="TBKOSTL">\n\
                <val>${element.IDKOSTL}</val>\n\
              </field>\n\
              <field column="TBHKONT">\n\
                <val>${element.IDHKONT}</val>\n\
              </field>\n\
              <field column="TBWRBTR">\n\
                <val>${element.TBWRBTR}</val>\n\
              </field>\n\
            </dataRow>\n\
          </modelCRUD>\n\
        </operation>`;

      //   <field column="tbSearch_term">\n\
      //   <val>${element.IDSTERM}</val>\n\
      // </field>\n\
      // <field column="BLART">\n\
      //   <val>${element.IDBLART}</val>\n\
      // </field>\n\
      // <field column="TBBLDAT">\n\
      //   <val>${element.IDDATEA}</val>\n\
      // </field>\n\
      // <field column="TBBUDAT">\n\
      //   <val>${element.IDDATEI}</val>\n\
      // </field>\n\
      // ^ รอ Service Adempire พร้อม
    }
    this.xml = this.xml + `\n\</operations>`;
    console.log(this.SAVELIST.length);

    const config = new MdDialogConfig();
    const dialogRef: MdDialogRef<DialogSaveComponent> = this.dialog.open(DialogSaveComponent, config);
    dialogRef.componentInstance.xml_s = this.xml;
    // dialogRef.componentInstance.TBBUKRS = this.TBBUKRS;
    // dialogRef.componentInstance.GJAHR = this.GJAHR;
    // dialogRef.componentInstance.LBBUKRS =  this.LBBUKRS;
    // dialogRef.componentInstance.TBZZPMT =  this.TBZZPMT;
    // dialogRef.componentInstance.LBZZPMT =  this.LBZZPMT;
    // dialogRef.componentInstance.LUSERID =  this.LUSERID;
    // dialogRef.componentInstance.DDGSBER =  this.DDGSBER;
    // dialogRef.componentInstance.IDBLART =  this.IDBLART;
    // dialogRef.componentInstance.IDDATEA =  this.IDDATEA;
    // dialogRef.componentInstance.IDDATEI =  this.IDDATEI;
    // dialogRef.componentInstance.TBXBLNR =  this.TBXBLNR;
    // dialogRef.componentInstance.tbSearch_term =  this.tbSearch_term;
    // dialogRef.componentInstance.LIFNR =  this.LIFNR;
    // dialogRef.componentInstance.LBTERM =  this.LBTERM;
    // dialogRef.componentInstance.ZLSCH =  this.ZLSCH;
    // dialogRef.componentInstance.TBKBLNR =  this.TBKBLNR;
    // dialogRef.componentInstance.LBKBLNR = this.LBKBLNR;
    // dialogRef.componentInstance.SUMCOST = this.SUMCOST;
    dialogRef.componentInstance.SAVEHEAD = this.madeHeadDoc();
    dialogRef.componentInstance.SAVELIST = this.SAVELIST; // Document: Detail
      dialogRef.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.resultTB = selection.value;
          this.resultLB = selection.name;
          // this.onDisable(); // Disable Textbox on Page after Success!
          this.onEnableInput('N'); // N = Disable All Input this Page
          this.onColor('N'); // 'N' = Change Color Content Black on Page after Success!
          this.onShowDocID(); // Show Doc ID after Success!
          console.log('R: ' + this.resultTB + ' | ' + this.resultLB);
          // this.TBNUMTR = this.resultTB;
          this.TBBELNR = this.resultTB; // Doc No.
          // this.LOGNO = Number(this.GJAHR + this.resultTB);
          // console.log(this.GJAHR + this.resultTB); // TEST
          // console.log(this.LOGNO); // TEST
          // this.createXMLlog(); // (OK) Create XML for Log
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });


  }

  madeHeadDoc() {
    const h = {
      'TBBUKRS' : this.TBBUKRS,
      'GJAHR'   : this.GJAHR,
      'LBBUKRS' : this.LBBUKRS,
      'TBZZPMT' : this.TBZZPMT,
      'LBZZPMT' : this.LBZZPMT,
      'LUSERID' : this.LUSERID,
      'DDGSBER' : this.DDGSBER,
      'IDBLART' : this.IDBLART,
      'IDDATEA' : this.IDDATEA,
      'IDDATEI' : this.IDDATEI,
      'TBXBLNR' : this.TBXBLNR,
      'tbSearch_term' : this.tbSearch_term,
      'LIFNR'   : this.LIFNR,
      'LBTERM'  : this.LBTERM,
      'ZLSCH'   : this.ZLSCH,
      'TBKBLNR' : this.TBKBLNR,
      'LBKBLNR' : this.LBKBLNR,
      'SUMCOST' : this.SUMCOST
    };
    return h;
  }

  onGetDocSearch(BELNR, GJAHR) {
    this.EXPAND = false;
    const jsonHead = this.madejson(BELNR, GJAHR); // get XML Head Doc
    this.getServiceDoc(jsonHead); // send XML Doc to Service and Get Result

    // After Get Doc Detail
    this.TBBELNR = BELNR;
    this.onEnableInput('N'); // N = Diable All Input
    this.onColor('N'); // N = No Color
    this.onShowDocID();

  }

  madejson(BELNR, GJAHR) {
    let jsonHeader = '';
    jsonHeader = `{"BELNR":"${BELNR}", "GJAHR":"${GJAHR}"}`;
    return jsonHeader;
  }

  getServiceDoc(jsonDocHeader) {
    // รอ service get Doc พร้อมใช้งาน
    // มี json กลับมา
    console.log(jsonDocHeader); // TEST-ONLY
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    // this.httpService.post('http://idp.yai.io:8082/rest/kb02', jsonDocHeader, options).subscribe(values => {
    //   console.log('return', values);
    //   if (values.ok) {
    //     const result: any = values.json();
    //     let mes = result.response.message;
    //     if (mes !== 'Fail') {
    //       console.log('Suc');
    //     } else {
    //       console.log('Fail');
    //     }
    //   } else {
    //     console.log('F');
    //     alert(values.toString());
    //   }
    // });
  }

  callFunction() {
    console.log('Call Function! - Work');
  }


  ngOnInit() {

    // ปีบัญชีเริ่มต้น
    if (this.DATEINV.month >= 10 ) {
      this.GJAHR = Number(this.DATEINV.year) + 1;
      console.log('f' + this.GJAHR);
    } else {
      this.GJAHR = this.DATEINV.year;
      console.log('f' + this.GJAHR);
    }

    // งวดเริ่มต้น
    if (this.DATEINV.month < 10) {
      this.ddMonat = this.DATEINV.month + 3;
    } else {
      this.ddMonat = this.DATEINV.month - 9;
    }

    this.YEAR = this.GJAHR + 543;
    let iGJAHR = this.GJAHR + 543;
    iGJAHR = iGJAHR - 8;
    for (let index = -7; index < 7; index++) {
      iGJAHR = iGJAHR + 1;
      // console.log(iGJAHR); // TEST
      this.yearList.push({YESR: iGJAHR});

    }

    // Rounter Doc ID
    // const id = this.route.snapshot.paramMap.get('BELNR');
    // if (id !== null) {
    //   this.TBBELNR = id;
    //   this.onEnableInput('N'); // N = Diable All Input
    //   this.onColor('N'); // N = No Color
    //   this.onShowDocID();
    //   this.onGetDocSearch(id); // Get Doc by Doc ID
    // } else {
    // }

    // get Parameter for Header Doc
    this.route.queryParams
    .filter(params => params.BELNR)
    .subscribe(params => {
      this.onGetDocSearch(params.BELNR, params.GJAHR); // Get Doc by Doc ID
    });

    console.log('this.TBBELNR:' + this.TBBELNR);
  }

}

