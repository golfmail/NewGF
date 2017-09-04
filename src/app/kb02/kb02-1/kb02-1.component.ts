import { Component, OnInit, Injectable, Output, EventEmitter, Inject} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, Headers, RequestOptions} from '@angular/http';
import { ListViewComponent } from 'app/controls/list-view/list-view.component';
import { AppComponent } from 'app/app.component';
import { Tab } from 'app/controls/drop-down-view/drop-down-view.interface';
import { DropDownViewComponent } from 'app/controls/drop-down-view/drop-down-view.component';
// import { TableList } from 'app/kb02/kb02-1/table-list';
import { TableList } from 'app/kb02/table-list-view';
import { DialogSearchComponent } from 'app/controls/dialog-search/dialog-search.component';
import { DialogSaveComponent } from 'app/controls/dialog-save/dialog-save.component';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { MdDatepickerModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
// import { Popup } from 'ng2-opd-popup';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
export class NgbdDatepickerPopup {
  model;
}
const now = new Date();
const I18N_VALUES = {
  'th': {
    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
    days: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์', 'อาทิตย์'],
    daysShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
    daysMin: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'],
    months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
             'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    monthsShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    today: 'วันนี้'
  }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'th';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday ];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
}

@Component({
  selector: 'kb02-1',
  templateUrl: './kb02-1.component.html',
  styleUrls: ['./kb02-1.component.css'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}], // define custom NgbDatepickerI18n provider
})

// @Injectable()
export class Kb021Component implements OnInit  {
  model: NgbDateStruct;
  date: {year: number, month: number};

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
  ValidateList: string[] = [];
  DDGSBER = '1000'; // รหัสพื้นที่

  ddZlschList: string[] = ['จ่ายตรงเข้าบัญชีเงินฝากธนาคารของผู้ขาย/คู่สัญญา', 'จ่ายผ่านบัญชีเงินฝากธนาคารของหน่วยงาน'];
  TBBUKRS = '1205';
  LBBUKRS = 'กรมพัฒนาพลังงานทดแทน&อนุร';
  TBBLDAT = '25 กรกฎาคม 2559';
  TBBUDAT = '25 กรกฎาคม 2559';
  TBZZPMT = '1200500001';
  LBZZPMT = 'สำนักงานเลขานุการกรม';
  TBXBLNR = 'P60_098340';
  TBGEBER = '5911500'; // แหล่งของเงิน
  LBGEBER = 'งบรายจ่ายอื่น/งบสรก.';
  tbSearch_term = '2032400000'; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี      [Send to API]
  tbBankn = '0261060163'; // เลขที่บัญชีเงินฝากธนาคาร

  TBHKONT = '1000002'; // รหัสบัญชีแยกประเภททั่วไป       [Send to API]
  TBKOSTL = '0300200005'; // รหัสศูนย์ต้นทุน        [Send to API]
  TBFISTL = '100'; // รหัสงบประมาณ   [Send to API]
  TBFKBER = 'P1000'; // รหัสกิจกรรมหลัก             [Send to API]
  TBWRBTR = '1000'; // จำนวนเงินที่ขอเบิก            [Send to API]

  TBZZOBJ = ''; // รหัสบัญชีย่อย
  TBZZLOAN = ''; // รหัสหมวดพัสดุ
  TBPRZNR = ''; // รหัสกิจกรรมย่อย
  TBKBLNR = '1200003245' // เลขที่เอกสารสำรองเงิน

  // Test Date
  // myDate = new Date('2017-04-17T03:24:00');
  myDate = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

  // Fiscal year
  FCMONTH;
  FCYEAR;

  // Label
  LBKOSTL = '';
  LBFKBER = '';
  LBFISTL = '';
  LBPRZNR = '';
  LBZZOBJ = '';
  LBZZLOAN = '';

  // Disable & Show
  DSTBALL;
  SHOWBT;

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

  // Other Variable
  TBNUMTR: string; // Number of Table List

  // Corlor Content
  contentBlue   = 'fontContentBlue';
  contentGreen  = 'fontContentGreen';
  contentRed    = 'fontContentRed';
  contentBlack  = 'fontContentBlack';

  // Selected Value
  selectedblart = this.soblartList[0].Name;
  selectedZlsch = this.soZlschList[0].Name;

  apiValues: string[] = [];
  saveTable: any []; // Array form save
  evilTitle = 'Template <i>Jo</i>';
  evilTitle2 ;
  logs: string[] = [];
  SAVELIST: any[] = []
  savelist = this.SAVELIST;
  selectedList: TableList;
  valuelist = 0;
  lbNUMBER = '0';
  // dialogRef: MdDialogRef<DialogSearchComponent>;
  codetx: string;
  nametx: string
  resultTB: string;
  resultLB: string;
  resultID: string;
  xml: string;

  // งวด
  ddMonat: number;

  constructor(public dialog: MdDialog, private httpService: Http) {
  }
  // constructor(private ListViewComponent: ListViewComponent) {
  // }

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  detailSave() {
    console.log('detailSave');
  }

  openDialog(textcode, textname) {
    console.log('P: ' + textcode);
    this.codetx = textcode;
    this.nametx = document.getElementById(textname).textContent;
    const config = new MdDialogConfig();
    const dialogRef: MdDialogRef<DialogSearchComponent> = this.dialog.open(DialogSearchComponent, config);
    dialogRef.componentInstance.code_t = this.codetx;
    dialogRef.componentInstance.name_t = this.nametx;
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

  onColor() {
    this.contentBlue   = 'fontContentBlack';
    this.contentGreen  = 'fontContentBlack';
    this.contentRed    = 'fontContentBlack';
    // this.contentBlack  = 'fontContentBlack';
  }
  onSelect(save: TableList, i): void {
    // document.getElementById('lbNUMBER').innerText = i + 1;
    this.lbNUMBER = i + 1;
    this.valuelist = i + 1;
    this.selectedList = save; // => Selected
    this.TBBUKRS = save.TBBUKRS;
    this.LBBUKRS = save.TBBUKRS;
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

    this.IDFISTL = save.IDFISTL; // (ID) รหัสงบประมาณ
    this.IDKOSTL = save.IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
    this.IDHKONT = save.IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
    this.IDWRBTR = save.IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
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
    for (let i = 0; i < this.savelist.length; i++) {
        if (this.savelist[i].TBWRBTR) {
            total += Number(this.savelist[i].TBWRBTR);
            // this.totalAmount = total;
        }
    }
    return total;
}
  setTotal(result) {
    this.res = result;
    document.getElementById('success').style.display = 'block';
    // document.getElementById('showSuccess').style.display = 'block';
  };

  formSave() {
    console.log(this.myDate);
    this.ValidateList = [];
    this.checkform();
    if (this.ValidateList.length <= 0) {
      console.log('0 0');
    // console.log('Array: ' + saveTable.length);
    // console.log(ListViewComponent.title);
    // this.ListViewComponent.formSave2();
    this.valuelist = 0;
    if (typeof this.SAVELIST === 'undefined') { // this.saveTable
        // alert('undefined')
        this.SAVELIST = [{
          TBBUKRS: this.TBBUKRS,
          LBBUKRS: this.TBBUKRS,
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
          TBWRBTR: this.TBWRBTR, // จำนวนเงินที่ขอเบิก
          IDFISTL: this.IDFISTL, // (ID) รหัสงบประมาณ
          IDKOSTL: this.IDKOSTL, // (ID) รหัสศูนย์ต้นทุน
          IDHKONT: this.IDHKONT, // (ID) รหัสบัญชีแยกประเภททั่วไป
          IDWRBTR: this.IDWRBTR, // (ID) จำนวนเงินที่ขอเบิก
          }]
        // alert(SAVELIST.length);
    } else {
        // this.valuelist = Number(this.lbNUMBER); // TEST
        this.SAVELIST.push({
          TBBUKRS: this.TBBUKRS,
          LBBUKRS: this.TBBUKRS,
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
          TBWRBTR: this.TBWRBTR, // จำนวนเงินที่ขอเบิก
          IDFISTL: this.IDFISTL, // (ID) รหัสงบประมาณ
          IDKOSTL: this.IDKOSTL, // (ID) รหัสศูนย์ต้นทุน
          IDHKONT: this.IDHKONT, // (ID) รหัสบัญชีแยกประเภททั่วไป
          IDWRBTR: this.IDWRBTR, // (ID) จำนวนเงินที่ขอเบิก
          });
        }

        console.log(this.SAVELIST);
         this.setTotal(this.IDWRBTR);
      } else {
        console.log('กรอกข้อมูลไม่ครบ');
      }
    }



  formDelete() {
    if (this.valuelist > 0) {
      let lbNUMBER = Number(document.getElementById('lbNUMBER').textContent);
      console.log('Del No. ' + lbNUMBER);
      lbNUMBER = lbNUMBER - 1;
      this.SAVELIST.splice(lbNUMBER, 1); // Delete with ลำดับ
      if (this.SAVELIST.length === 0) {
        // document.getElementById('table-show-list').style.display = 'none';
        // document.getElementById('TRAnotation1').style.display = 'none';
      } else {
        // document.getElementById('table-show-list').style.display = 'block';
        // document.getElementById('TRAnotation1').style.display = 'block';
      }
      // console.log(this.selectedList.LBZZPMT);
      console.log('Total array: ' + this.SAVELIST.length);
    } else {
      alert('กรุณาเลือกรายการ');
    }
    this.valuelist = 0;

  };

  formEdit() {
    // console.log('Log: Edit');
    let lbNUMBER = Number(document.getElementById('lbNUMBER').textContent);
    console.log('Edit No. ' + lbNUMBER);
    lbNUMBER = lbNUMBER - 1; // ตำแหน่ง Array
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
    this.SAVELIST[lbNUMBER].TBWRBTR = this.TBWRBTR; // จำนวนเงินที่ขอเบิก
    this.SAVELIST[lbNUMBER].IDFISTL = this.IDFISTL; // (ID) รหัสงบประมาณ
    this.SAVELIST[lbNUMBER].IDKOSTL = this.IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
    this.SAVELIST[lbNUMBER].IDHKONT = this.IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
    this.SAVELIST[lbNUMBER].IDWRBTR = this.IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก

  };

  formShow() {
    console.log('Show');
  }
  formSend() {
    this.xml = '';
    // const model = {
    //   TBFISTL: this.TBFISTL, // รหัสงบประมาณ
    //   TBFKBER: this.TBFKBER, // รหัสกิจกรรมหลัก
    //   TBKOSTL: this.TBKOSTL, // รหัสศูนย์ต้นทุน
    //   TBHKONT: this.TBHKONT, // รหัสบัญชีแยกประเภท
    //   tbSearch_term: this.tbSearch_term, // เลขประจำตัวผู้เสียภาษี
    //   TBWRBTR: this.TBWRBTR, // จำนวนเงินที่ขอเบิก
    // };
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
    for (let index = 0; index < this.savelist.length; index++) {
      let element = this.savelist[index];
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
    }
    this.xml = this.xml + `\n\</operations>`;
    const config = new MdDialogConfig();
    const dialogRef: MdDialogRef<DialogSaveComponent> = this.dialog.open(DialogSaveComponent, config);
    dialogRef.componentInstance.xml_s = this.xml;
    dialogRef.componentInstance.TBBUKRS = this.TBBUKRS;
    dialogRef.componentInstance.FCYEAR = this.FCYEAR;
      dialogRef.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.resultTB = selection.value;
          this.resultLB = selection.name;
          this.onDisable(); // Disable Textbox on Page after Success!
          this.onColor(); // Change Color Content on Page after Success!
          console.log('R: ' + this.resultTB + ' | ' + this.resultLB);
          this.TBNUMTR = this.resultTB;
          document.getElementById('afterSuccess1').style.display = 'table-row';
          document.getElementById('afterSuccess2').style.display = 'table-row';
          document.getElementById('afterSuccess3').style.display = 'table-row';
          document.getElementById('afterSuccess4').style.display = 'table-row';

        } else {
          // User clicked 'Cancel' or clicked outside the dialog
          console.log('Cccc');
        }
      });


  };

  // kb02Save(Method) Not working pass parameter to/from dialog-save(Module) | Don't Use in Here.
  kb02Save(xml: string) {
    const headers = new Headers({ 'Content-Type': 'application/xml' });
    const options = new RequestOptions({ headers: headers });


    this.httpService.post('http://idp.yai.io:8082/rest/kb02', xml, options).subscribe(values => {
      console.log('return', values);
      if (values.ok) {
        const result: any = values.json();

        console.log(result);

        alert(`บันทึกเรียบร้อย  ${result.response.message}`);
        console.log(result);
        console.log('details: ', result.response.details);
      } else {
        alert(values.toString());
      }
    });
  }

  callFunction() {
    console.log('Call Function! - Work');
  }



  // kb02Save(xml: string) {
  //   const headers = new Headers({ 'Content-Type': 'application/xml' });
  //   const options = new RequestOptions({ headers: headers });

  //   // this.httpService.post('http://idp.yai.io:8082/rest/kb02', xml, options).subscribe(values => {
  //     this.httpService.post('http://10.156.0.83:82/wsangu/service1.asmx/AngularInsertDB', xml, options).subscribe(values => {
  //     // this.httpService.post('http://10.156.0.83:82/wsangu/service1.asmx/AngularInsertDB?
  // Search_term=abc&TBFISTL=cde&TBKOSTL=efg&TBHKONT=hij&TBWRBTR=klm', xml, options)
 // .subscribe(values => {
  //     console.log('return', values);
  //     if (values.ok) {
  //       const result: any = values.json();
  //       console.log(result);
  //       alert(`บันทึกเรียบร้อย  ${result.response.message}`);
  //       console.log(result);
  //       console.log('details: ', result.response.details);
  //     } else {
  //       alert(values.toString());
  //     }
  //   });
  // }

  ngOnInit() {
    console.log(this.myDate);
    if (this.myDate.month >= 10 ) {
      this.FCYEAR = Number(this.myDate.year) + 1;
      console.log('f' + this.FCYEAR);
    } else {
      this.FCYEAR = this.myDate.year;
      console.log(this.FCYEAR);
    }

    if (this.myDate.month < 10) {
        this.ddMonat = this.myDate.month + 3;
    } else {
      this.ddMonat = this.myDate.month - 9;
      }
  }

}

