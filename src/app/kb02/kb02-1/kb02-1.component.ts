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
import { MenuTopComponent } from 'app/menu-top/menu-top.component';
import { Kb023Component } from '../../kb02/kb02-3/kb02-3.component';

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
    {id: 'DDGSBER', Val: ''},
    {id: 'IDBLART', Val: ''},
    {id: 'BLDAT', Val: ''},
    {id: 'BUDAT', Val: ''},
    {id: 'TBXBLNR', Val: ''},
    {id: 'tbSearch_term', Val: ''},
    {id: 'LIFNR', Val: ''},
    {id: 'NAME1', Val: ''},
    {id: 'ZLSCH', Val: ''},
    {id: 'TBKBLNR', Val: ''},
    {id: 'LBKBLNR', Val: ''},
  ];

  typeDocList =
    {'': '---- ไม่กำหนด ----', 'K0': 'K0 - เงินจ่ายสิ้นเดือน', 'K1': 'K1 - ลูกหนี้เงินยืม',
    'K8': 'K8 - เงินอุดหนุน', 'KC': 'KC - ขอเบิก(1.ข)', 'KD': 'KD - ขอเบิก(1.ข) กันเงิน',
    'KE': 'KE - ขอเบิก(2.ข)', 'KF': 'KF - ขอเบิก(2.ข) กันเงิน', 'KL': 'KL - ใบสำคัญงปม(2)',
    'KM': 'KM - ใบสำคัญงปม(2) กันเงิน'};

  M_IDFISTL = [
    { val: '0300210101110000', id: '100'},
    { val: '0300210101110000', id: '100'},
    { val: '0300210101000000', id: '100'},
    { val: '0300210101110001', id: '100'},
    { val: '0300210101110002', id: '100'},
    { val: '0300210101110003', id: '104'},
    { val: '0300210101110007', id: '105'},
    { val: '0300210101110022', id: '100'}
  ];

  M_IDKOSTL = [
    { val: '0300200001', id: '101'},
    { val: '0300200003', id: '101'},
    { val: '0300200004', id: '101'},
    { val: '0300200005', id: '101'},
    { val: '0300200007', id: '101'},
    { val: '0300200000', id: '101'}
  ];

  M_IDHKONT = [
    { val: '53000', id: '1000002'},
    { val: '51800', id: '1000016'},
    { val: '52000', id: '1000011'},
    { val: '51200', id: '1000004'},
    { val: '57000', id: '1000005'},
    { val: '54000', id: '1000006'}
  ];

  ValidateList: string[] = [];
  DDGSBER = '1000'; // รหัสพื้นที่

  ddZlschList: string[] = ['จ่ายตรงเข้าบัญชีเงินฝากธนาคารของผู้ขาย/คู่สัญญา', 'จ่ายผ่านบัญชีเงินฝากธนาคารของหน่วยงาน'];
  BUKRS = '0302';
  LBBUKRS = 'สนงใปลัดกระทรวงการคลัง';
  TBZZPMT = '0300200005'; // หน่วยเบิกจ่าย
  LBZZPMT = 'สำนักบริการกลาง';
  TBXBLNR = 'P6000001';
  GEBER = '6011220'; // แหล่งของเงิน
  GEBER_NAME = 'งบรายจ่ายอื่น/งบสรก.';
  tbSearch_term = '9000080000004'; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี      [Send to API]
  tbBankn = '00000201'; // เลขที่บัญชีเงินฝากธนาคาร

  HKONT = '53000'; // รหัสบัญชีแยกประเภททั่วไป       [Send to API]
  KOSTL = '0300200005'; // รหัสศูนย์ต้นทุน        [Send to API]
  FISTL = '0300210101110000'; // รหัสงบประมาณ   [Send to API]
  FKBER = '030021000E0482'; // รหัสกิจกรรมหลัก             [Send to API]
  WRBTR = ''; // จำนวนเงินที่ขอเบิก            [Send to API]

  ZZOBJ = ''; // รหัสบัญชีย่อย
  ZZFIELD1 = ''; // รหัสหมวดพัสดุ
  PRZNR = ''; // รหัสกิจกรรมย่อย
  TBKBLNR = ''; // เลขที่เอกสารสำรองเงิน
  ZZUNIT = ''; // รหัสเจ้าของบัญชีย่อย
  VBUND = ''; // รหัสหน่วยงานคู่ค้า
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

  // TYPE DOC
  DOCTYPE;

  // Hard coding for #Label
  LBTERM: String;
  LBKBLNR: String; // ชื่อเลขที่เอกสารสำรองเงินงบประมาณ
  KOSTL_NAME: String;
  FKBER_NAME: String;
  FISTL_NAME: String;
  PRZNR_NAME: String;
  ZZOBJ_NAME: String;
  ZZFIELD1_NAME: String;
  HKONT_NAME: String;
  ZZUNIT_NAME: String; // (N) รหัสเจ้าของบัญชีย่อย
  VBUND_NAME: String; // (N) รหัสหน่วยงานคู่ค้า

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
  IDFISTL = '100'; // รหัสงบประมาณ
  IDKOSTL = '101'; // รหัสศูนย์ต้นทุน
  IDHKONT = '1000002'; // บัญชีแยกประเภท
  IDWRBTR = '1000';
  IDSTERM = '2032400000';
  IDBLART = '';
  BLDAT = '01/01/2017'; // (ID) วันที่เอกสาร A
  BUDAT = '02/01/2017'; // (ID) วันที่ผ่านรายการ I
  IDVENDER = '1000010'; // Vender ID

  // Hard coding for UserID
  LUSERID = this.TBZZPMT + '10' ; // UserID: หน่วยเบอกจ่าย + 10

  // Other Variable
  TBNUMTR: string; // Number of Table List
  BELNR = ''; // Doc No.
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
  HEADLIST; // Document Header
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
  resultNW: Boolean;
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
                case 'KOSTL': // รหัสศูนย์ต้นทุน
                this.KOSTL = this.resultTB; // Set TB (Value)
                this.IDKOSTL = this.resultID; // Set ID (id)
                this.KOSTL_NAME = this.resultLB; // Set LB (Name)
                break;
              case 'FKBER': // รหัสกิจกรรมหลัก
                this.FKBER = this.resultTB;
                this.FKBER_NAME = this.resultLB;
                break;
              case 'FISTL': // รหัสงบประมาณ
                this.FISTL = this.resultTB;
                this.IDFISTL = this.resultID;
                this.FISTL_NAME = this.resultLB;
                break;
              case 'TBZZPMT': // หน่วยเบิกจ่าย
                this.TBZZPMT = this.resultTB;
                this.LBZZPMT = this.resultLB;
                break;
              case 'ZZOBJ': // รหัสบัญชีย่อย
                this.ZZOBJ = this.resultTB;
                this.ZZOBJ_NAME = this.resultLB;
                break;
              case 'ZZFIELD1': // รหัสหมวดพัสดุ
                this.ZZFIELD1 = this.resultTB;
                this.ZZFIELD1_NAME = this.resultLB;
                break;
              case 'PRZNR': // รหัสกิจกรรมย่อย
                this.PRZNR = this.resultTB; // Set Value
                this.PRZNR_NAME = this.resultLB;
                break;
              case 'HKONT': // รหัสบัญชีแยกประเภททั่วไป
                this.HKONT = this.resultTB; // Set Value
                this.HKONT_NAME = this.resultLB;
                this.IDHKONT = this.resultID;
                break;
              case 'GEBER': // รหัสบัญชีแยกประเภททั่วไป
                this.GEBER = this.resultTB; // Set Value
                this.GEBER_NAME = this.resultLB;
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

  onHideDocID() {
    // + Function for Show Doc.Number | Hiden 3 Button
    this.SHOWTR = true; // Show Doc
    this.HIDEBT = false; // Hide จำลองการบันทึก & 3 Save
    this.AFTDOC = true; // Show 3 Button Log
  }

  // button: สร้างเอกสารใหม่
  onNewDoc() {
    this.router.navigate(['/kb02', { outlets: { aux: ['kb021'] } }]);
    this.EXPAND = true;
    this.SAVELIST.shift(); // ลบรายการแรกออก (เครดิต) // พร้อมเทส

    this.SHOWTR = true; // Hide Doc
    this.HIDEBT = false; // Show จำลองการบันทึก & 3 Save
    this.AFTDOC = true; // Hide 3 Button Log
    this.onColor('Y');
    this.onEnableInput('Y'); // Y = Enable All Input
    this.lbNUMBER = this.SAVELIST.length + 1;
    this.setDocData(); // Set for TEST
    this.getValueIDList();

    this.setHeader(); // Set for TEST
    // this.getValueIDList();
  }

  onSelectDate(typeDate) {
    // ปีบัญชี และ งวด เริ่มต้น
    if (typeDate === 'inv') {
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
    // this.BUKRS = save.BUKRS;
    // this.LBBUKRS = save.LBBUKRS;
    // this.TBZZPMT = save.TBZZPMT;
    // this.LBZZPMT = save.LBZZPMT;
    // this.TBXBLNR = save.TBXBLNR;
    // this.GEBER = save.GEBER; // แหล่งของเงิน
    // this.GEBER_NAME = save.GEBER_NAME;
    // this.tbSearch_term = save.tbSearch_term; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
    // this.tbBankn = save.tbBankn; // เลขที่บัญชีเงินฝากธนาคาร
    this.HKONT = save.HKONT; // รหัสบัญชีแยกประเภททั่วไป
    this.KOSTL = save.KOSTL; // รหัสศูนย์ต้นทุน
    this.FISTL = save.FISTL; // รหัสงบประมาณ
    this.FKBER = save.FKBER; // รหัสกิจกรรมหลัก
    this.WRBTR = save.WRBTR; // จำนวนเงินที่ขอเบิก
    this.PRZNR = save.PRZNR; // รหัสกิจกรรมย่อย
    this.ZZOBJ = save.ZZOBJ; // รหัสบัญชีย่อย
    this.ZZUNIT = save.ZZUNIT; // รหัสเจ้าของบัญชีย่อย
    this.ZZFIELD1 = save.ZZFIELD1; // รหัสหมวดพัสดุ
    this.VBUND = save.VBUND; // รหัสหน่วยงานคู่ค้า

    this.GJAHR = save.GJAHR; // ปีบัญชี
    this.SGTXT = save.SGTXT; // รายละเอียดบรรทัดรายการ

    this.HKONT_NAME = save.HKONT_NAME; // (ช) ชื่อบัญชีแยกประเภททั่วไป
    this.KOSTL_NAME = save.KOSTL_NAME; // (N) ชื่อศูนย์ต้นทุน
    this.FISTL_NAME = save.FISTL_NAME; // (N) ชื่องบประมาณ
    this.FKBER_NAME = save.FKBER_NAME; // (N) ชื่อกิจกรรมหลัก
    this.PRZNR_NAME = save.PRZNR_NAME; // (N) ชื่อกิจกรรมย่อย
    this.ZZOBJ_NAME = save.ZZOBJ_NAME; // (N) รหัสบัญชีย่อย
    this.ZZUNIT_NAME = this.ZZUNIT_NAME; // (N) รหัสเจ้าของบัญชีย่อย
    this.ZZFIELD1_NAME = this.ZZFIELD1_NAME; // (N) รหัสหมวดพัสดุ
    this.VBUND_NAME = this.VBUND_NAME; // (N) รหัสหน่วยงานคู่ค้า

  //   this.IDFISTL = save.IDFISTL; // (ID) รหัสงบประมาณ
  //   this.IDKOSTL = save.IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
  //   this.IDHKONT = save.IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
  //   this.IDWRBTR = save.IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
  //   this.IDSTERM = save.IDSTERM; // (ID) เลขประจำตัวผู้เสียภาษี
  //   this.BLDAT = save.BLDAT; // (ID) Account Date
  //   this.BUDAT = save.BUDAT; // (ID) Date Invoic
  }

  checkform() {
    this.ValidateList = [];
    const tHead = 'กรุณากรอก';
    if (!this.BUKRS) {
      this.ValidateList.push(tHead + 'รหัสหน่วยงาน');
    } if (!this.BLDAT) {
      this.ValidateList.push(tHead + 'วันที่เอกสาร');
    } if (!this.DDGSBER) {
      this.ValidateList.push(tHead + 'รหัสพื้นที่');
    } if (!this.BUDAT) {
      this.ValidateList.push(tHead + 'วันที่ผ่านรายการ');
    } if (!this.TBZZPMT) {
      this.ValidateList.push(tHead + 'รหัสหน่วยเบิกจ่าย');
    } if (!this.TBXBLNR) {
      this.ValidateList.push(tHead + 'การอ้างอิง');
    } if (!this.HKONT) {
      this.ValidateList.push(tHead + 'รหัสบัญชีแยกประเภททั่วไป');
    } if (!this.KOSTL) {
      this.ValidateList.push(tHead + 'รหัสศูนย์ต้นทุน');
    } if (!this.FKBER) {
      this.ValidateList.push(tHead + 'รหัสกิจกรรมหลัก');
    } if (!this.FISTL) {
      this.ValidateList.push(tHead + 'รหัสงบประมาณ');
    } if (!this.GEBER) {
      this.ValidateList.push(tHead + 'แหล่งของเงิน');
    // } if (!this.PRZNR) {
    //   this.ValidateList.push(tHead + 'รหัสกิจกรรมย่อย');
    // } if (!this.ZZOBJ) {
    //   this.ValidateList.push(tHead + 'รหัสบัญชีย่อย');
    // } if (!this.ZZFIELD1) {
    //   this.ValidateList.push(tHead + 'รหัสหมวดพัสดุ');
    } if (!this.WRBTR) {
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
        if (this.SAVELIST[i].WRBTR) {
            total += Number(this.SAVELIST[i].WRBTR);
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
    let nav = '';
    if (baht.indexOf('-') === 0) {
      nav = '-';
      baht = baht.slice(1);
    }
    const cents = (number.split('.')[1] || '') + '00';
    baht = baht.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return nav + baht + '.' + cents.slice(0, 2);
  }

  numberWithDecimal(x) {
    const number = x.toString();
    const baht = number.split('.')[0];
    const cents = (number.split('.')[1] || '') + '00';
    return baht + '.' + cents.slice(0, 2);
  }

  // Get Doc. type
  getDcotype() {
    console.log(this.ZLSCH);
    console.log(this.selectedblart);
    console.log(this.selectedZlsch);
    if (this.selectedZlsch === '1') {
        switch (this.selectedblart) {
          case '1': this.IDBLART = 'KC'; this.ZLSCH = '1'; break;
          case '2': this.IDBLART = 'KL'; this.ZLSCH = '1'; break;
          case '3': this.IDBLART = 'K0'; this.ZLSCH = '1'; break;
          case '4': this.IDBLART = 'K1'; this.ZLSCH = '1'; break;
          case '5': this.IDBLART = 'K8'; this.ZLSCH = '1'; break;
          default: break;
        }
    } else if (this.selectedZlsch === '2') {
      switch (this.selectedblart) {
        case '1': this.IDBLART = 'KE'; this.ZLSCH = '2'; break;
        case '2': this.IDBLART = 'KL'; this.ZLSCH = '2'; break;
        case '3': this.IDBLART = 'K0'; this.ZLSCH = '2'; break;
        case '4': this.IDBLART = 'K1'; this.ZLSCH = '2'; break;
        case '5': this.IDBLART = 'K8'; this.ZLSCH = '2'; break;
        default: break;
      }
    }
    console.log(this.ZLSCH);
  }

  setDcotype() {
    console.log(this.ZLSCH);
    if (this.ZLSCH === '1') {
      this.selectedZlsch = this.soZlschList[0].id;

      switch (this.IDBLART) {
        case 'KC': this.selectedblart = this.soblartList[0].id; break;
        case 'KL': this.selectedblart = this.soblartList[1].id; break;
        case 'K0': this.selectedblart = this.soblartList[2].id; break;
        case 'K1': this.selectedblart = this.soblartList[3].id; break;
        case 'K8': this.selectedblart = this.soblartList[4].id; break;
        default: break;
      }
    } else if (this.ZLSCH === '2') {
      this.selectedZlsch = this.soZlschList[1].id;
      switch (this.IDBLART) {
        case 'KE': this.selectedblart = this.soblartList[0].id; break;
        case 'KL': this.selectedblart = this.soblartList[1].id; break;
        case 'K0': this.selectedblart = this.soblartList[2].id; break;
        case 'K1': this.selectedblart = this.soblartList[3].id; break;
        case 'K8': this.selectedblart = this.soblartList[4].id; break;
        default: break;
      }
    }

    switch (this.IDBLART) {
      case 'K0': this.DOCTYPE = this.typeDocList.K0; break;
      case 'K1': this.DOCTYPE = this.typeDocList.K1; break;
      case 'K8': this.DOCTYPE = this.typeDocList.K8; break;
      case 'KC': this.DOCTYPE = this.typeDocList.KC; break;
      case 'KD': this.DOCTYPE = this.typeDocList.KD; break;
      case 'KE': this.DOCTYPE = this.typeDocList.KE; break;
      case 'KF': this.DOCTYPE = this.typeDocList.KF; break;
      case 'KL': this.DOCTYPE = this.typeDocList.KL; break;
      case 'KM': this.DOCTYPE = this.typeDocList.KM; break;
      default: this.DOCTYPE = ''; break;
    }
  }

  setGEBER() {
    const yearGEBER = '25' +  this.GEBER.substr(0, 2);
    this.YEAR = Number(yearGEBER);
  }

  // Get Account,Invoiced Date
  getDateAI() {
    const DA = this.DATEA;
    const DI = this.DATEI;
    this.BLDAT = DA.getDate() + '/' + (DA.getMonth() + 1) + '/' + DA.getFullYear();
    this.BUDAT = DI.getDate() + '/' + (DI.getMonth() + 1 ) + '/' + DI.getFullYear();
    console.log('A: ' + this.BLDAT + ', I: ' + this.BUDAT);
  }

  getVender() {
    const tHead = 'กรุณากรอก';
    if (this.tbSearch_term === '9000080000004' && this.tbBankn === '00000201') {
      this.IDVENDER = '1000010';
      this.LBTERM = 'บริษัท มาร์ช จำกัด';
      this.LIFNR = '1000000038';
    } else if (this.tbSearch_term === '5401599010370' && this.tbBankn === '0000006552') {
      this.IDVENDER = '1000009';
      this.LBTERM = 'บริษัท กรุงเทพ จำกัด';
      this.LIFNR = '1000000011';
    } else if (this.tbSearch_term === '9000080000004' && this.tbBankn === '8905686551') {
      this.IDVENDER = '121';
      this.LBTERM = 'SeedFarm';
      this.LIFNR = 'SeedFarm';
    } else if (this.tbSearch_term === '1234567891234' && this.tbBankn === '8905686552') {
      this.IDVENDER = '120';
      this.LBTERM = 'Patio Fun, Inc.';
      this.LIFNR = 'Patio';
    } else {
      this.ValidateList.push(tHead + ' รหัสประจำตัวผู้เสียภาษีและเลขที่บัญชี ให้ตรงกัน');
    }
  }

  coverDate() {
    const A = (this.BLDAT.split('-'));
    const I = (this.BUDAT.split('-'));
    this.DATEA = new Date(this.BLDAT); // วันที่เอกสาร
    this.DATEI = new Date(this.BUDAT);
    this.DATEACC = {year: this.DATEA.getFullYear(), month: this.DATEA.getMonth() + 1, day: this.DATEA.getDate()};
    this.DATEINV = {year: this.DATEI.getFullYear(), month: this.DATEI.getMonth() + 1, day: this.DATEI.getDate()};
    this.setYear();
  }

  setVender() {
    // console.log(this.LIFNR )
    if (this.LIFNR === '1000000038') {
      this.IDVENDER = '1000010';
      this.LBTERM = 'บริษัท มาร์ช จำกัด';
      this.tbSearch_term = '9000080000004';
      this.tbBankn = '00000201';
    } else if (this.LIFNR === '1000000011') {
      this.IDVENDER = '1000009';
      this.LBTERM = 'บริษัท กรุงเทพ จำกัด';
      this.tbSearch_term = '5401599010370';
      this.tbBankn = '0000006552';
    } else if (this.LIFNR === 'SeedFarm') {
      this.IDVENDER = '121';
      this.LBTERM = 'SeedFarm';
      this.tbSearch_term = '9000080000004';
      this.tbBankn = '8905686551';
    } else if (this.LIFNR === 'Patio') {
      this.IDVENDER = '120';
      this.LBTERM = 'Patio Fun, Inc.';
      this.tbSearch_term = '1234567891234';
      this.tbBankn = '8905686552';
    } else {
    }
    console.log(this.tbBankn);
  }


  chkValidate() {
    console.log(this.FISTL.length);
    const F_FISTL = this.FISTL.substr(0, 5); // รหัสงบประมาณ 5 หลักแรก
    const F_KOSTL = this.KOSTL.substr(0, 5); // รหัสศูนย์ต้นทุน 5 หลักแรก
    const F_FKBER = this.FKBER.substr(0, 5); // รหัสกิจกรรมหลัก 5 หลักแรก
    const P_KOSTL = this.KOSTL.substr(1, 5); // รหัสจังหวัดจากศูนย์ต้นทุน
    const P_FKBER = this.FKBER.substr(1, 5); // รหัสจังหวัดในกิจกรรมหลัก
    if (this.GEBER.substr(2, 2) === '19' // แหล่งเงิน เป็น YY19xxxx
        && F_FISTL === F_KOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
        && this.FKBER.substr(0, 5) === this.KOSTL.substr(0, 5)) {
      console.log('Y!1');
      this.is_valid = true;
    } else if ((this.GEBER.substr(2, 1) === '2' || this.GEBER.substr(2, 1) === '3') // แหล่งเงิน เป็น  YY2xxxx หรือ YY3xxxxxx
        && this.FISTL.length === 5 // รหัสงบประมาณมี 5 หลัก
        && F_FISTL === F_KOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
        && P_KOSTL === P_FKBER) { // รหัสจังหวัดจากศูนย์ต้นทุน = รหัสจังหวัดในกิจกรรมหลัก
      console.log('Y!2');
      this.is_valid = true;
    } else if (this.GEBER.substr(2, 1) === '1') { // แหล่งเงิน เป็น YY1xxxxxx
      console.log('Y!3');
      if (this.GEBER.substr(2, 2) === '11' // แหล่งเงิน เป็น YY11xxxxx
          && this.FISTL.length === 16 // รหัสงบประมาณ 16 หลัก
          && F_FISTL === F_KOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
          && P_KOSTL === P_FKBER // รหัสจังหวัดจากศูนย์ต้นทุน = รหัสจังหวัดในกิจกรรมหลัก
          && F_KOSTL === F_FKBER) { // รหัสศูนย์ต้นทุน 5 หลักแรก = รหัสกิจกรรมหลัก 5 หลักแรก
          console.log('Y!3.1');
          this.is_valid = true;
        } else if (this.GEBER.substr(2, 2) === '11' // แหล่งเงิน เป็น YY11xxxxx
          && this.FISTL.length === 16 // รหัสงบประมาณ 16 หลัก
          && F_FISTL === '80808' // รหัสงบประมาณ 5 หลักแรก = 80808
          && F_FKBER === '80808' // รหัสกิจกรรมหลัก 5 หลักแรก = 80808
          && F_KOSTL === F_FKBER) { // รหัสศูนย์ต้นทุน 5 หลักแรก = รหัสกิจกรรมหลัก 5 หลักแรก
          console.log('Y!3.2');
          this.is_valid = true;
        } else if (this.GEBER.substr(2, 2) === '10' // แหล่งเงิน เป็น YY10xxxxx
          && (this.FISTL.length === (10 || 12 || 14 || 16) ) // รหัสงบประมาณ เป็น 10 หรือ 12 หรือ 14 หรือ 16 หลัก
          && F_FISTL === '90909') { // รหัสงบประมาณ 5 หลักแรก = 90909
          console.log('Y!3.3');
          this.is_valid = true;
      } else {
        console.log('N!3');
        this.is_valid = false;
      }
    } else if (this.GEBER.substr(2, 1) === '4' // แหล่งเงิน เป็น YY4xxxxxx
        && this.FISTL.length === 16 // รหัสงบประมาณ เป็น 16 หลัก
        && F_FISTL === F_KOSTL // รหัสงบประมาณ 5 หลักแรก = รหัสศูนย์ต้นทุน 5 หลักแรก
        && P_KOSTL === P_FKBER ) {// รหัสจังหวัดจากศูนย์ต้นทุน = รหัสจังหวัดใน กิจกรรมหลัก
      console.log('Y!4');
      this.is_valid = true;
    } else if (this.GEBER.substr(2, 2) === '41' // แหล่งเงิน เป็น YY41xxxxx
        && this.FISTL.length === (10 || 12 || 14 || 16) // รหัสงบประมาณ เป็น 10 หรือ 12 หรือ 14 หรือ 16 หลัก
        && F_FISTL === '90909' ) {// รหัสงบประมาณ 5 หลักแรก = 90909
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
    this.getVender();
    this.getValueID(this.lbNUMBER, this.IDFISTL, this.IDKOSTL, this.IDHKONT);
    if (this.ValidateList.length <= 0) { // && this.is_valid === true
    this.valuelist = 0;
    if (typeof this.SAVELIST === 'undefined' && this.lbNUMBER === 0) { // this.saveTable
        // alert('undefined')
        this.SAVELIST = [{
          BUKRS: this.BUKRS,
          LBBUKRS: this.LBBUKRS,
          BLDAT: this.BLDAT,
          BUDAT: this.BUDAT,
          TBZZPMT: this.TBZZPMT,
          LBZZPMT: this.LBZZPMT,
          TBXBLNR: this.TBXBLNR,
          GEBER: this.GEBER, // แหล่งของเงิน
          GEBER_NAME: this.GEBER_NAME,
          tbSearch_term: this.tbSearch_term, // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
          tbBankn: this.tbBankn, // เลขที่บัญชีเงินฝากธนาคาร
          HKONT: this.HKONT, // รหัสบัญชีแยกประเภททั่วไป
          KOSTL: this.KOSTL, // รหัสศูนย์ต้นทุน
          FISTL: this.FISTL, // รหัสงบประมาณ
          FKBER: this.FKBER, // รหัสกิจกรรมหลัก
          WRBTR: Number(this.WRBTR).toFixed(2), // จำนวนเงินที่ขอเบิก
          PRZNR: this.PRZNR, // รหัสกิจกรรมย่อย
          ZZOBJ: this.ZZOBJ, // รหัสบัญชีย่อย
          ZZUNIT: this.ZZUNIT, // รหัสเจ้าของบัญชีย่อย
          ZZFIELD1: this.ZZFIELD1, // รหัสหมวดพัสดุ
          VBUND: this.VBUND, // รหัสหน่วยงานคู่ค้า
          IDFISTL: this.IDFISTL, // (ID) รหัสงบประมาณ
          IDKOSTL: this.IDKOSTL, // (ID) รหัสศูนย์ต้นทุน
          IDHKONT: this.IDHKONT, // (ID) รหัสบัญชีแยกประเภททั่วไป
          IDWRBTR: this.IDWRBTR, // (ID) จำนวนเงินที่ขอเบิก
          IDSTERM: this.IDSTERM, // (ID) เลขประจำตัวผู้เสียภาษี
          IDBLART: this.IDBLART, // (ID) Doc. Type
          GJAHR: this.GJAHR, // ปีบัญชี
          SGTXT: this.SGTXT, // รายละเอียดบรรทัดรายการ
          HKONT_NAME: this.HKONT_NAME, // (N) ชื่อบัญชีแยกประเภททั่วไป
          KOSTL_NAME: this.KOSTL_NAME, // (N) ชื่อศูนย์ต้นทุน
          FISTL_NAME: this.FISTL_NAME, // (N) ชื่องบประมาณ
          FKBER_NAME: this.FKBER_NAME, // (N) ชื่อกิจกรรมหลัก
          PRZNR_NAME: this.PRZNR_NAME, // (N) ชื่อกิจกรรมย่อย
          ZZOBJ_NAME: this.ZZOBJ_NAME, // (N) รหัสบัญชีย่อย
          ZZUNIT_NAME: this.ZZUNIT_NAME, // (N) รหัสเจ้าของบัญชีย่อย
          ZZFIELD1_NAME: this.ZZFIELD1_NAME, // (N) รหัสหมวดพัสดุ
          VBUND_NAME: this.VBUND_NAME, // (N) รหัสหน่วยงานคู่ค้า
          }];
        // alert(SAVELIST.length);
        this.lbNUMBER = this.SAVELIST.length;
        console.log('GotoJO');
    } else  {
        // this.valuelist = Number(this.lbNUMBER); // TEST
        this.SAVELIST.push({
          BUKRS: this.BUKRS,
          LBBUKRS: this.LBBUKRS,
          BLDAT: this.BLDAT,
          BUDAT: this.BUDAT,
          TBZZPMT: this.TBZZPMT,
          LBZZPMT: this.LBZZPMT,
          TBXBLNR: this.TBXBLNR,
          GEBER: this.GEBER, // แหล่งของเงิน
          GEBER_NAME: this.GEBER_NAME,
          tbSearch_term: this.tbSearch_term, // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
          tbBankn: this.tbBankn, // เลขที่บัญชีเงินฝากธนาคาร
          HKONT: this.HKONT, // รหัสบัญชีแยกประเภททั่วไป
          KOSTL: this.KOSTL, // รหัสศูนย์ต้นทุน
          FISTL: this.FISTL, // รหัสงบประมาณ
          FKBER: this.FKBER, // รหัสกิจกรรมหลัก
          WRBTR: Number(this.WRBTR).toFixed(2), // จำนวนเงินที่ขอเบิก
          PRZNR: this.PRZNR, // รหัสกิจกรรมย่อย
          ZZOBJ: this.ZZOBJ, // รหัสบัญชีย่อย
          ZZUNIT: this.ZZUNIT, // รหัสเจ้าของบัญชีย่อย
          ZZFIELD1: this.ZZFIELD1, // รหัสหมวดพัสดุ
          VBUND: this.VBUND, // รหัสหน่วยงานคู่ค้า
          IDFISTL: this.IDFISTL, // (ID) รหัสงบประมาณ
          IDKOSTL: this.IDKOSTL, // (ID) รหัสศูนย์ต้นทุน
          IDHKONT: this.IDHKONT, // (ID) รหัสบัญชีแยกประเภททั่วไป
          IDWRBTR: this.IDWRBTR, // (ID) จำนวนเงินที่ขอเบิก
          IDSTERM: this.IDSTERM, // (ID) เลขประจำตัวผู้เสียภาษี
          IDBLART: this.IDBLART, // (ID) Doc. Type
          GJAHR: this.GJAHR, // ปีบัญชี
          SGTXT: this.SGTXT, // รายละเอียดบรรทัดรายการ
          HKONT_NAME: this.HKONT_NAME, // (N) ชื่อบัญชีแยกประเภททั่วไป
          KOSTL_NAME: this.KOSTL_NAME, // (N) ชื่อศูนย์ต้นทุน
          FISTL_NAME: this.FISTL_NAME, // (N) ชื่องบประมาณ
          FKBER_NAME: this.FKBER_NAME, // (N) ชื่อกิจกรรมหลัก
          PRZNR_NAME: this.PRZNR_NAME, // (N) ชื่อกิจกรรมย่อย
          ZZOBJ_NAME: this.ZZOBJ_NAME, // (N) รหัสบัญชีย่อย
          ZZUNIT_NAME: this.ZZUNIT_NAME, // (N) รหัสเจ้าของบัญชีย่อย
          ZZFIELD1_NAME: this.ZZFIELD1_NAME, // (N) รหัสหมวดพัสดุ
          VBUND_NAME: this.VBUND_NAME, // (N) รหัสหน่วยงานคู่ค้า
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
    this.getTotal(); // sum
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
      BUKRS: this.BUKRS,
      LBBUKRS: this.LBBUKRS,
      BLDAT: this.BLDAT,
      BUDAT: this.BUDAT,
      TBZZPMT: this.TBZZPMT,
      LBZZPMT: this.LBZZPMT,
      TBXBLNR: this.TBXBLNR,
      GEBER: this.GEBER, // แหล่งของเงิน
      GEBER_NAME: this.GEBER_NAME,
      tbSearch_term: this.tbSearch_term, // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
      tbBankn: this.tbBankn, // เลขที่บัญชีเงินฝากธนาคาร
      HKONT: this.HKONT, // รหัสบัญชีแยกประเภททั่วไป
      KOSTL: this.KOSTL, // รหัสศูนย์ต้นทุน
      FISTL: this.FISTL, // รหัสงบประมาณ
      FKBER: this.FKBER, // รหัสกิจกรรมหลัก
      WRBTR: Number(this.WRBTR).toFixed(2), // จำนวนเงินที่ขอเบิก
      PRZNR: this.PRZNR, // รหัสกิจกรรมย่อย
      ZZOBJ: this.ZZOBJ, // รหัสบัญชีย่อย
      ZZUNIT: this.ZZUNIT, // รหัสเจ้าของบัญชีย่อย
      ZZFIELD1: this.ZZFIELD1, // รหัสหมวดพัสดุ
      VBUND: this.VBUND, // รหัสหน่วยงานคู่ค้า
      IDFISTL: this.IDFISTL, // (ID) รหัสงบประมาณ
      IDKOSTL: this.IDKOSTL, // (ID) รหัสศูนย์ต้นทุน
      IDHKONT: this.IDHKONT, // (ID) รหัสบัญชีแยกประเภททั่วไป
      IDWRBTR: this.IDWRBTR, // (ID) จำนวนเงินที่ขอเบิก
      IDSTERM: this.IDSTERM, // (ID) เลขประจำตัวผู้เสียภาษี
      IDBLART: this.IDBLART, // (ID) Doc. Type
      GJAHR: this.GJAHR, // ปีบัญชี
      SGTXT: this.SGTXT, // รายละเอียดบรรทัดรายการ
      HKONT_NAME: this.HKONT_NAME, // (N) ชื่อบัญชีแยกประเภททั่วไป
      KOSTL_NAME: this.KOSTL_NAME, // (N) ชื่อศูนย์ต้นทุน
      FISTL_NAME: this.FISTL_NAME, // (N) ชื่องบประมาณ
      FKBER_NAME: this.FKBER_NAME, // (N) ชื่อกิจกรรมหลัก
      PRZNR_NAME: this.PRZNR_NAME, // (N) ชื่อกิจกรรมย่อย
      ZZOBJ_NAME: this.ZZOBJ_NAME, // (N) รหัสบัญชีย่อย
      ZZUNIT_NAME: this.ZZUNIT_NAME, // (N) รหัสเจ้าของบัญชีย่อย
      ZZFIELD1_NAME: this.ZZFIELD1_NAME, // (N) รหัสหมวดพัสดุ
      VBUND_NAME: this.VBUND_NAME, // (N) รหัสหน่วยงานคู่ค้า
      });
      this.lbNUMBER = this.SAVELIST.length + 1;
      this.BTDEL = true;
      this.BTNEW = true;
      this.getTotal(); // sum

  }

  formEdit() {

    // console.log('Log: Edit');
    // this.lbNUMBER
    // let lbNUMBER = Number(document.getElementById('lbNUMBER').textContent);
    let lbNUMBER = Number(this.lbNUMBER);
    // console.log('Edit No. ' + lbNUMBER);
    lbNUMBER = lbNUMBER - 1; // ตำแหน่ง Array
    if (this.lbNUMBER <= this.SAVELIST.length) {
      this.getValueID(lbNUMBER, this.IDFISTL, this.IDKOSTL, this.IDHKONT);
      this.SAVELIST[lbNUMBER].BUKRS = this.BUKRS;
      this.SAVELIST[lbNUMBER].LBBUKRS = this.LBBUKRS;
      this.SAVELIST[lbNUMBER].BLDAT = this.BLDAT;
      this.SAVELIST[lbNUMBER].BUDAT = this.BUDAT;
      this.SAVELIST[lbNUMBER].TBZZPMT = this.TBZZPMT;
      this.SAVELIST[lbNUMBER].LBZZPMT = this.LBZZPMT;
      this.SAVELIST[lbNUMBER].TBXBLNR = this.TBXBLNR;
      this.SAVELIST[lbNUMBER].GEBER = this.GEBER; // แหล่งของเงิน
      this.SAVELIST[lbNUMBER].GEBER_NAME = this.GEBER_NAME;
      this.SAVELIST[lbNUMBER].tbSearch_term = this.tbSearch_term; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
      this.SAVELIST[lbNUMBER].tbBankn = this.tbBankn; // เลขที่บัญชีเงินฝากธนาคาร
      this.SAVELIST[lbNUMBER].HKONT = this.HKONT; // รหัสบัญชีแยกประเภททั่วไป
      this.SAVELIST[lbNUMBER].KOSTL = this.KOSTL; // รหัสศูนย์ต้นทุน
      this.SAVELIST[lbNUMBER].FISTL = this.FISTL; // รหัสงบประมาณ
      this.SAVELIST[lbNUMBER].FKBER = this.FKBER; // รหัสกิจกรรมหลัก
      this.SAVELIST[lbNUMBER].WRBTR = Number(this.WRBTR).toFixed(2); // จำนวนเงินที่ขอเบิก
      this.SAVELIST[lbNUMBER].PRZNR = this.PRZNR; // รหัสกิจกรรมย่อย
      this.SAVELIST[lbNUMBER].ZZOBJ = this.ZZOBJ; // รหัสบัญชีย่อย
      this.SAVELIST[lbNUMBER].ZZUNIT = this.ZZUNIT; // รหัสเจ้าของบัญชีย่อย
      this.SAVELIST[lbNUMBER].ZZFIELD1 = this.ZZFIELD1; // รหัสหมวดพัสดุ
      this.SAVELIST[lbNUMBER].VBUND = this.VBUND; // รหัสหน่วยงานคู่ค้า
      this.SAVELIST[lbNUMBER].IDFISTL = this.IDFISTL; // (ID) รหัสงบประมาณ
      this.SAVELIST[lbNUMBER].IDKOSTL = this.IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
      this.SAVELIST[lbNUMBER].IDHKONT = this.IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
      this.SAVELIST[lbNUMBER].IDWRBTR = this.IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
      this.SAVELIST[lbNUMBER].IDSTERM = this.IDSTERM; // (ID) เลขประจำตัวผู้เสียภาษี
      this.SAVELIST[lbNUMBER].IDBLART = this.IDBLART; // (ID) Doc. Type
      this.SAVELIST[lbNUMBER].BLDAT = this.BLDAT; // (ID) Account Date
      this.SAVELIST[lbNUMBER].BUDAT = this.BUDAT; // (ID) Date Invoic
      this.SAVELIST[lbNUMBER].GJAHR = this.GJAHR; // ปีบัญชี
      this.SAVELIST[lbNUMBER].SGTXT = this.SGTXT; // รายละเอียดบรรทัดรายการ
      this.SAVELIST[lbNUMBER].HKONT_NAME = this.HKONT_NAME; // (N) ชื่อบัญชีแยกประเภททั่วไป
      this.SAVELIST[lbNUMBER].KOSTL_NAME = this.KOSTL_NAME; // (N) ชื่อศูนย์ต้นทุน
      this.SAVELIST[lbNUMBER].FISTL_NAME = this.FISTL_NAME; // (N) ชื่องบประมาณ
      this.SAVELIST[lbNUMBER].FKBER_NAME = this.FKBER_NAME; // (N) ชื่อกิจกรรมหลัก
      this.SAVELIST[lbNUMBER].PRZNR_NAME = this.PRZNR_NAME; // (N) ชื่อกิจกรรมย่อย
      this.SAVELIST[lbNUMBER].ZZOBJ_NAME = this.ZZOBJ_NAME; // (N) รหัสบัญชีย่อย
      this.SAVELIST[lbNUMBER].ZZUNIT_NAME = this.ZZUNIT_NAME; // (N) รหัสเจ้าของบัญชีย่อย
      this.SAVELIST[lbNUMBER].ZZFIELD1_NAME = this.ZZFIELD1_NAME; // (N) รหัสหมวดพัสดุ
      this.SAVELIST[lbNUMBER].VBUND_NAME = this.VBUND_NAME; // (N) รหัสหน่วยงานคู่ค้า

      this.lbNUMBER = this.SAVELIST.length + 1;
      this.BTDEL = true;
      this.BTNEW = true;
    } else {
      this.formSave();

      this.BTDEL = true;
      this.BTNEW = true;
    }
    this.getTotal(); // Sum

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
                <val>${element.WRBTR}</val>\n\
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
      // <field column="BLDAT">\n\
      //   <val>${element.BLDAT}</val>\n\
      // </field>\n\
      // <field column="BUDAT">\n\
      //   <val>${element.BUDAT}</val>\n\
      // </field>\n\
      // ^ รอ Service Adempire พร้อม
    }
    this.xml = this.xml + `\n\</operations>`;
    console.log(this.SAVELIST.length);

    const config = new MdDialogConfig();
    const dialogRef: MdDialogRef<DialogSaveComponent> = this.dialog.open(DialogSaveComponent, config);
    dialogRef.componentInstance.xml_s = this.xml;
    dialogRef.componentInstance.SAVEHEAD = this.madeHeadDoc();
    dialogRef.componentInstance.SAVELIST = this.SAVELIST; // Document: Detail
      dialogRef.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.resultTB = selection.value;
          this.resultLB = selection.name;
          this.resultNW = selection.new;
          if (selection.new === false) {
            this.onGetDocSearch(this.resultTB, this.GJAHR);
          } else if (selection.new === true) {
            this.onGetNewDoc();
          }
          console.log(this.resultNW, selection.new);
          // this.onDisable(); // Disable Textbox on Page after Success!
          // this.onEnableInput('N'); // N = Disable All Input this Page
          // this.onColor('N'); // 'N' = Change Color Content Black on Page after Success!
          // this.onShowDocID(); // Show Doc ID after Success!
          // console.log('R: ' + this.resultTB + ' | ' + this.resultLB);
          // this.BELNR = this.resultTB; // Doc No.
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });


  }

  getValueIDList() {
    const LIST = this.SAVELIST;
    // console.log(LIST);
    for (let index = 0; index < LIST.length; index++) {
      const element = LIST[index];
      this.getValueID(index, element.IDFISTL, element.IDKOSTL, element.IDHKONT);
    }
  }

  getValueID(index, ID_FISTL, ID_KOSTL, ID_HKONT) {
    // console.log('IDKOSTL: ', this.IDKOSTL);
    let id;
    if (ID_FISTL === '' || ID_FISTL === undefined ) {
      id = '';
      id = this.getID(this.FISTL, this.M_IDFISTL);
      this.IDFISTL = id;
      this.SAVELIST[index].IDFISTL = id;
    }
    if (ID_KOSTL === '' || ID_KOSTL === undefined) {
      id = '';
      id = this.getID(this.KOSTL, this.M_IDKOSTL);
      this.IDKOSTL = id;
      this.SAVELIST[index].IDKOSTL = id;
    }
    if (ID_HKONT === '' || ID_HKONT === undefined) {
      id = '';
      id = this.getID(this.HKONT, this.M_IDHKONT);
      this.IDHKONT = id;
      this.SAVELIST[index].IDHKONT = id;
    }
    // console.log('IDKOSTL: ', this.IDKOSTL);
    // console.log('IDHKONT: ', this.IDHKONT);
  }

  getID (VALUE, ID) {
    console.log(VALUE, ID);
    for (let index = 0; index < ID.length; index++) {
      const element = ID[index];
      if (element.val === VALUE) {
        // console.log(element.val);
        return element.id;
      }
    }
  }

  madeHeadDoc() {
    const h = {
      'BUKRS' : this.BUKRS,
      'GJAHR'   : this.GJAHR,
      'LBBUKRS' : this.LBBUKRS,
      'TBZZPMT' : this.TBZZPMT,
      'LBZZPMT' : this.LBZZPMT,
      'LUSERID' : this.LUSERID,
      'DDGSBER' : this.DDGSBER,
      'IDBLART' : this.IDBLART,
      'BLDAT' : this.BLDAT,
      'BUDAT' : this.BUDAT,
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
    this.SAVELIST = [];
    this.EXPAND = false;
    const jsonHead = this.madejson(BELNR, GJAHR);
    this.getServiceDoc(jsonHead); // send json to Service and Get Result

    // After Get Doc Detail
    this.BELNR = BELNR;
    this.setDcotype(); // SET Document Type
    this.onEnableInput('N'); // N = Diable All Input
    this.onColor('N'); // N = No Color
    this.onShowDocID();

  }

  onGetNewDoc() {
    this.onHideDocID();
    this.SAVELIST = [];
    this.EXPAND = true;
    this.onEnableInput('Y'); // N = Diable All Input
    this.onColor('Y'); // N = No Color
    this.clearValueAll();
  }

  clearValueAll() {
    this.LBTERM = ''; // บริษัท มาร์ช จำกัด
    this.LBKBLNR = ''; // ชื่อเลขที่เอกสารสำรองเงินงบประมาณ
    this.KOSTL = '';
    this.KOSTL_NAME = '';
    this.FKBER_NAME = '';
    this.FISTL = '';
    this.FISTL_NAME = '';
    this.FKBER = '';
    this.FKBER_NAME = '';
    this.PRZNR_NAME = '';
    this.ZZOBJ_NAME = '';
    this.ZZFIELD1_NAME = '';
    this.HKONT_NAME = '';
    this.ZZUNIT_NAME = ''; // (N) รหัสเจ้าของบัญชีย่อย
    this.VBUND_NAME = ''; // (N) รหัสหน่วยงานคู่ค้า
    this.DATEI = new Date();
    this.DATEA = new Date();
    this.GJAHR = '';
    this.SGTXT = '';
    this.GEBER = '';
    this.GEBER_NAME = '';
    this.WRBTR = ''

    // this.tbSearch_term = ''; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
    // this.tbBankn = ''; // เลขที่บัญชีเงินฝากธนาคาร

    this.IDFISTL = ''; // (ID) รหัสงบประมาณ
    this.IDKOSTL = ''; // (ID) รหัสศูนย์ต้นทุน
    this.IDHKONT = ''; // (ID) รหัสบัญชีแยกประเภททั่วไป
    this.IDWRBTR = ''; // (ID) จำนวนเงินที่ขอเบิก
    this.IDSTERM = ''; // (ID) เลขประจำตัวผู้เสียภาษี
    this.IDBLART = ''; // (ID) Doc. Type

    this.lbNUMBER = 1; // รีเซ็ทลำดับ
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
    const url_show = 'http://52.220.14.56:28080/NewGFws/webresources/wsLog/Detail';
    this.httpService.post(url_show, jsonDocHeader, options).subscribe(values => {
      console.log('return', values);
      if (values.ok) {
        const result: any = values.json();
        if (result.Detail.length  > 0) {
          console.log(result);
          this.HEADLIST = result;
          this.SAVELIST = result.Detail;
          this.setHeader();
          this.setDcotype();
          this.setNavCredit();
          this.setGEBER();
          // this.addCredit(); // TEST
          console.log( this.SAVELIST);
          this.setDocData();
          this.lbNUMBER = 1;
        } else {
          console.log('NO DATA');
        }
      } else {
        console.log('ERROR');
      }
    });
  }

  // TEST ADD CREDIT
  addCredit() {
    // this.SAVELIST.unshift({WRBTR: this.WRBTR});
    console.log('unshif');
    this.SAVELIST.unshift({
      HKONT_NAME: this.LBTERM,
      HKONT: this.LIFNR,
      KOSTL: this.KOSTL,
      FISTL: this.FISTL,
      FKBER: this.FKBER,
      WRBTR: Number(-this.HEADLIST.SUMCOST
      )});
    this.HKONT = this.SAVELIST[0].HKONT;
    this.HKONT_NAME = this.SAVELIST[0].HKONT_NAME;
  }

  setHeader() {
    this.BUKRS  = this.HEADLIST.BUKRS;
    this.LBBUKRS  = this.HEADLIST.BUKRS_NAME;
    this.GJAHR    = this.HEADLIST.Detail[0].GJAHR;
    this.TBZZPMT  = this.HEADLIST.ZZPMT;
    this.LBZZPMT  = this.HEADLIST.ZZPMT_NAME;
    this.LUSERID  = this.HEADLIST.LUSERID;
    this.DDGSBER  = this.HEADLIST.GSBER;
    this.IDBLART  = this.HEADLIST.BLART;
    this.BLDAT  = this.HEADLIST.BLDAT;
    this.BUDAT  = this.HEADLIST.BUDAT;
    this.TBXBLNR  = this.HEADLIST.XBLNR;
    this.tbSearch_term = this.HEADLIST.SEARCH_TERM;
    this.LIFNR    = this.HEADLIST.LIFNR;
    this.LBTERM   = this.HEADLIST.NAME1;
    this.ZLSCH    = this.HEADLIST.ZLSCH;
    this.TBKBLNR  = this.HEADLIST.KBLNR;
    this.LBKBLNR  = this.HEADLIST.KBLNR_NAME;
    this.SUMCOST  = Number(this.HEADLIST.SUMCOST);
    this.LOGNO    = this.HEADLIST.LOGNO;
    this.tbBankn  = this.HEADLIST.Detail[1].tbBankn;
    this.coverDate();
    this.setVender();
    // console.log(this.GJAHR );
  }

  setDocData () {
    console.log(this.SAVELIST);
    const n = 0;
    // this.BUKRS = this.SAVELIST[n].BUKRS;
    // this.LBBUKRS = this.SAVELIST[n].LBBUKRS;
    // this.BLDAT = this.SAVELIST[n].BLDAT;
    // this.BUDAT = this.SAVELIST[n].BUDAT;
    // this.TBZZPMT = this.SAVELIST[n].TBZZPMT;
    // this.LBZZPMT = this.SAVELIST[n].LBZZPMT;
    // this.TBXBLNR = this.SAVELIST[n].TBXBLNR;
    this.GEBER = this.SAVELIST[n].GEBER; // แหล่งของเงิน
    this.GEBER_NAME = this.SAVELIST[n].GEBER_NAME;
    // this.tbSearch_term = this.SAVELIST[n].tbSearch_term; // เลขประจำตัวบัตรประชาชน/เลขประจำตัวผู้เสียภาษี
    // this.tbBankn = this.SAVELIST[n].tbBankn; // เลขที่บัญชีเงินฝากธนาคาร
    this.HKONT = this.SAVELIST[n].HKONT; // รหัสบัญชีแยกประเภททั่วไป
    this.KOSTL = this.SAVELIST[n].KOSTL; // รหัสศูนย์ต้นทุน
    this.FISTL = this.SAVELIST[n].FISTL; // รหัสงบประมาณ
    this.FKBER = this.SAVELIST[n].FKBER; // รหัสกิจกรรมหลัก
    this.WRBTR = this.SAVELIST[n].WRBTR; // จำนวนเงินที่ขอเบิก
    this.PRZNR = this.SAVELIST[n].PRZNR; // รหัสกิจกรรมย่อย
    this.ZZOBJ = this.SAVELIST[n].ZZOBJ; // รหัสบัญชีย่อย
    this.ZZUNIT = this.SAVELIST[n].ZZUNIT; // รหัสเจ้าของบัญชีย่อย
    this.ZZFIELD1 = this.SAVELIST[n].ZZFIELD1; // รหัสหมวดพัสดุ
    this.VBUND = this.SAVELIST[n].VBUND; // รหัสหน่วยงานคู่ค้า

    // this.GJAHR = this.SAVELIST[n].GJAHR; // ปีบัญชี
    this.SGTXT = this.SAVELIST[n].SGTXT; // รายละเอียดบรรทัดรายการ

    this.HKONT_NAME = this.SAVELIST[n].HKONT_NAME; // (ช) ชื่อบัญชีแยกประเภททั่วไป
    this.KOSTL_NAME = this.SAVELIST[n].KOSTL_NAME; // (N) ชื่อศูนย์ต้นทุน
    this.FISTL_NAME = this.SAVELIST[n].FISTL_NAME; // (N) ชื่องบประมาณ
    this.FKBER_NAME = this.SAVELIST[n].FKBER_NAME; // (N) ชื่อกิจกรรมหลัก
    this.PRZNR_NAME = this.SAVELIST[n].PRZNR_NAME; // (N) ชื่อกิจกรรมย่อย
    this.ZZOBJ_NAME = this.SAVELIST[n].ZZOBJ_NAME; // (N) รหัสบัญชีย่อย
    this.ZZUNIT_NAME = this.ZZUNIT_NAME; // (N) รหัสเจ้าของบัญชีย่อย
    this.ZZFIELD1_NAME = this.ZZFIELD1_NAME; // (N) รหัสหมวดพัสดุ
    this.VBUND_NAME = this.VBUND_NAME; // (N) รหัสหน่วยงานคู่ค้า

    this.IDFISTL = this.SAVELIST[n].IDFISTL; // (ID) รหัสงบประมาณ
    this.IDKOSTL = this.SAVELIST[n].IDKOSTL; // (ID) รหัสศูนย์ต้นทุน
    this.IDHKONT = this.SAVELIST[n].IDHKONT; // (ID) รหัสบัญชีแยกประเภททั่วไป
    this.IDWRBTR = this.SAVELIST[n].IDWRBTR; // (ID) จำนวนเงินที่ขอเบิก
    this.IDSTERM = this.SAVELIST[n].IDSTERM; // (ID) เลขประจำตัวผู้เสียภาษี
    this.IDBLART = this.SAVELIST[n].IDBLART; // (ID) Doc. Type
  }

  setNavCredit() {
    this.SAVELIST[0].WRBTR = - this.SAVELIST[0].WRBTR;
  }

  setYear() {
    // ปีบัญชี
    if (this.DATEINV.month >= 10 ) {
      this.GJAHR = Number(this.DATEINV.year) + 1;
    } else {
      this.GJAHR = this.DATEINV.year;
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
      this.yearList.push({YESR: iGJAHR});
    }
  }

  setTest() {
    this.LBTERM = ''; // บริษัท มาร์ช จำกัด
    this.LBKBLNR = ''; // ชื่อเลขที่เอกสารสำรองเงินงบประมาณ
    this.KOSTL_NAME = 'สำนักบริหารกลาง';
    this.FKBER_NAME = 'การติดตาม เร่งรัด การดำเน';
    this.FISTL_NAME = 'โครงการจัดตั้งศูนย์ค';
    this.PRZNR_NAME = '';
    this.ZZOBJ_NAME = '';
    this.ZZFIELD1_NAME = '';
    this.HKONT_NAME = 'ค่าซ่อมแซมและค่าบำรุงรักษา';
    this.ZZUNIT_NAME = ''; // (N) รหัสเจ้าของบัญชีย่อย
    this.VBUND_NAME = ''; // (N) รหัสหน่วยงานคู่ค้า
  }

  callFunction() {
    console.log('Call Function! - Work');
  }

  showLog() {
    window.open('./logreport?docid=' + this.LOGNO);
  }


  ngOnInit() {


    // ใส่ค่าต่างๆ ไว้เพื่อเทส
    this.setTest();

    // เมื่อมีการส่งค่ามาจาก Search หรืออื่นๆ
    this.route.queryParams
    .filter(params => params.BELNR)
    .subscribe(params => {
      this.onGetDocSearch(params.BELNR, params.GJAHR);
    });

    // ปีบัญชีและงวด เริ่มต้น
    this.setYear();


  }

}

