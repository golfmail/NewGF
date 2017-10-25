import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Kb021Component } from 'app/kb02/kb02-1/kb02-1.component';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-save',
  templateUrl: './dialog-save.component.html',
  styleUrls: ['./dialog-save.component.css']
})
export class DialogSaveComponent implements OnInit {
  xml_s: string;
  xml_l: string;
  xml_log: string;
  save_log: String;
  TBNUMTR = '-'; // 3100000041
  name_tr = 'Something'; // Something
  // BUKRS: string;
  // GJAHR: number;
  res: String = 'สำเร็จ';
  code: String;
  detail: String = 'ตรวจสอบเอกสาร - ไม่มีข้อผิดพลาด';
  BTSHOW: Boolean = false;
  BTEDIT: Boolean = true;
  BTNEW: Boolean = false;
  BTSEARCH: Boolean = false;
  BTLOG: Boolean = false;

  // New Value by LOG
  CPUDT = ''; // DATE ex: 11.12.2017
  CPUTIME = ''; // TIME ex: 22:40:59
  LOGYEAR: Number; // YEAR NOW ex: 2017
  LOGNO: Number = 0; // Log No. // eTEST
  // XML_LOG HEADER
  // LBBUKRS = '';
  // TBZZPMT = '';
  // LBZZPMT = '';
  // LUSERID = '';
  // DDGSBER = '';
  // IDBLART = '';
  // IDDATEA = '';
  // IDDATEI = '';
  // TBXBLNR = '';
  // tbSearch_term = '';
  // LIFNR = '';
  // LBTERM = '';
  // ZLSCH = '';
  // TBKBLNR = '';
  // LBKBLNR = '';
  // SUMCOST: Number = 0;

  // Document: Header (Object)
  SAVEHEAD;

  // Ducument: Details (Array)
  SAVELIST: any[] = [];

  // Progress
  H_WAIT: Boolean = true;
  H_TABLE: Boolean = false;
  H_ERROR: Boolean = true;
  H_LERROR: Boolean = true; // For Log error
  B_EDIT: Boolean = true;
  B_SAVE: Boolean = false;
  ERR_TEXT: String; // Error Text
  LOG_ERR: String; // Log Error
  SAVEDLOG: Boolean = true;

  constructor(public dialogRef: MdDialogRef<DialogSaveComponent>, private httpService: Http,
    private router: Router ) { }

  confirmSave() {
    this.H_TABLE = false;
    this.H_WAIT = false;
    this.H_ERROR = true;
    this.B_SAVE = true;
    console.log('xml_s: ' + this.xml_s);
    const headers = new Headers({ 'Content-Type': 'application/xml' });
    const options = new RequestOptions({ headers: headers });
    console.log(this.SAVELIST);

    this.httpService.post('http://idp.yai.io:8082/rest/kb02', this.xml_s, options).subscribe(values => {
      console.log('return', values);
      if (values.ok) {
        const result: any = values.json();
        const mes = result.response.message;
        const details = result.response.details;
        const codeX = result.response.code;
        this.TBNUMTR = '';
        // mes = 'Doc No: 10000195';
        // let code = result.response.code;
        // alert(`ผลการบันทึก  ${mes}`);
        // console.log(result);
        // console.log('details: ', result.response.details);
        if (mes !== 'Fail') {
          console.log('Suc');
          this.showSuccess('สำเร็จ');
          this.TBNUMTR =  mes.substring(8); // Doc NO. (String)
          this.BTSHOW = false;
          this.BTEDIT = true;
          this.LOGNO = Number(this.SAVEHEAD.GJAHR + this.TBNUMTR);
          this.saveLog(); // TEST Save Log
          this.H_WAIT = true;
          this.H_TABLE = false;
        } else {
          console.log('Fail');
          // this.showSuccess('ไม่สำเร็จ');
          this.code = codeX;
          this.detail = details; // mes
          this.showError('ไม่สำเร็จ');
          this.BTSHOW = true;
          this.BTEDIT = false;
          this.H_WAIT = true;
          this.H_TABLE = false;
          this.B_EDIT = false;
        }
      } else {
        console.log('F');
        alert(values.toString());
      }
    }
  , error => {
    console.log(error);
    this.ERR_TEXT = 'พบปัญหาการเชื่อมต่อกับ service ไม่สมบูรณ์';
    this.H_WAIT = true;
    this.H_TABLE = false;
    this.H_ERROR = false;
    this.B_SAVE = false;
  });
  }

  saveLog() {
    this.getDateNow();
    this.createXMLlog(); // Gen XML LOG
    console.log('save_log: \n' + this.save_log); // TEST
    const headers = new Headers({ 'Content-Type': 'text/xml'}); // text/plain
    const options = new RequestOptions({ headers: headers });

    // รอ service log พร้อมใช้งาน
    this.httpService.post('http://52.220.14.56:28080/NewGFws/webresources/wsLog', this.save_log, options).subscribe(values => {
      console.log('return', values);
      if (values.ok) {
        const result: any = values.json();
        const mes = result.a;
        if (mes !== 'false') {
          console.log('Suc');
          this.SAVEDLOG = false;
        } else {
          this.H_LERROR = false;
          this.SAVEDLOG = true;
          this.LOG_ERR = 'ERROR (LOG SERVICE): ' + mes + ' | บันทึก LOG ไม่สำเร็จ';
          console.log('Fail log save');
        }
      } else {
        console.log('F');
        alert(values.toString());
      }
    }
    , error => {
      console.log(error);
      // const r_error: any = error.json();
      // console.log(error.statusText);
      this.H_LERROR = false;
      this.SAVEDLOG = true;
      this.LOG_ERR = 'การเชื่อมต่อกับ service log ไม่สมบูรณ์ : ' + error.statusText;
      // this.H_WAIT = true;
      // this.H_TABLE = false;
      // this.H_ERROR = false;
      // this.B_SAVE = false;
    });
  }

  createXMLlog() {
    this.xml_log = '';

    // save_log (Header)
    this.save_log = ''; // Clear TEST-ONLY
    this.save_log = `${this.LOGYEAR},${this.LOGNO},${this.SAVEHEAD.BUKRS},`
    + `${this.SAVEHEAD.LBBUKRS},${this.SAVEHEAD.TBZZPMT},${this.SAVEHEAD.LBZZPMT},${this.SAVEHEAD.LUSERID},${this.SAVEHEAD.DDGSBER},`
    + `${this.SAVEHEAD.IDBLART},${this.SAVEHEAD.IDDATEA},${this.SAVEHEAD.IDDATEI},${this.SAVEHEAD.TBXBLNR},`
    + `${this.SAVEHEAD.tbSearch_term},${this.SAVEHEAD.LIFNR},${this.SAVEHEAD.LBTERM},${this.SAVEHEAD.ZLSCH},${this.CPUDT},${this.CPUTIME},`
    + `${this.SAVEHEAD.TBKBLNR},${this.SAVEHEAD.LBKBLNR},${this.SAVEHEAD.SUMCOST}`;

    console.log(this.SAVELIST.length);

    for (let index = 0; index < this.SAVELIST.length; index++) {
    const element = this.SAVELIST[index];

    console.log('hi, detail');

    // save log (Details)
    this.save_log = this.save_log + `,${this.LOGYEAR},${this.LOGNO},${index + 1}`
    + `,${element.BUKRS},${this.TBNUMTR},${element.GJAHR},${element.WRBTR}`
    + `,${element.HKONT},${element.HKONT_NAME},${element.KOSTL},${element.KOSTL_NAME}`
    + `,${element.FISTL},${element.FISTL_NAME},${element.FKBER},${element.FKBER_NAME}`
    + `,${element.PRZNR},${element.PRZNR_NAME},${element.ZZOBJ_NAME},${element.ZZOBJ}`
    + `,${element.ZZUNIT},${element.ZZUNIT_NAME},${element.ZZFIELD1},${element.ZZFIELD1_NAME}`
    + `,${element.VBUND},${element.VBUND_NAME},${element.SGTXT},${element.GEBER},${element.GEBER_NAME}`;
    }

      console.log(this.save_log);
      // console.log(this.xml_log);

  }

  getDateNow() {
    // this.DATENOW = new Date();
    const DN = new Date();
    this.CPUDT = DN.getDate() + '/' + (DN.getMonth() + 1 ) + '/' + DN.getFullYear();
    this.CPUTIME = DN.getHours() + ':' + DN.getMinutes() + ':' + DN.getSeconds();
    this.LOGYEAR = DN.getFullYear(); // Set Year Log
    console.log('NOW: ' + this.CPUDT + ', TIME: ' + this.CPUTIME);
  }

  showSuccess(result) {
    this.res = result;
    document.getElementById('headerShow').innerText = 'ผลการบันทึกรายการ';
    document.getElementById('success').style.display = 'none';
    document.getElementById('showSuccess').style.display = 'block';
  }

  showError(result) {
    this.res = result;
  }

  showDetail() {
    console.log('Show Detail');
    this.dialogRef.close({value: this.TBNUMTR, name: this.name_tr, new: false});
  }

  newDoc() {
    this.dialogRef.close({value: this.TBNUMTR, name: this.name_tr, new: true});
  }

  toSearch() {
    this.dialogRef.close();
    this.router.navigate(['/Kb023']);
  }

  ngOnInit() {
  }

}
