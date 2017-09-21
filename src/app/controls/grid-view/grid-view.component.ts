import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  // Table of Doc.no.
  docList: any[] = [];

  // Data Doc TEST
  TBNUMTR = '3100000051'; // เลข Doc
  GJAHR: Number = 2017; // ปีงบประมาณ
  BLDAT = new Date('04/09/2017'); // วันที่เอกสาร
  BUDAT = new Date('04/10/2017'); // วันที่ผ่านรายการ
  BLART = 'KC'; // ประเภทเอกสาร
  HOWPAY = '1'; // วิธีชำระเงิน
  NAME1 = 'มหาวิทยาลัยธรรมศาสตร์'; // ผู้ขาย
  CPUDT = new Date('05/01/2017'); // วันที่บันทึก
  SUMCOST: Number = 2000.22;
  STATUS = 'เอกสารผ่านรายการ';
  NUMDOCI;

  displayedColumns = ['TBNUMTR'];

  constructor() {}

  // Selected Doc
  selectedDoc(Table, index) {
    console.log(this.docList[index].TBNUMTR);
  }

  ngOnInit() {
    // Test Make Doc Data
    for (let index = 1; index < 7; index++) {
      this.docList.push({
        TBNUMTR: this.TBNUMTR,
        GJAHR: this.GJAHR,
        BLDAT: this.BLDAT,
        BUDAT: this.BUDAT,
        BLART: this.BLART,
        HOWPAY: this.HOWPAY,
        NAME1: this.NAME1,
        CPUDT: this.CPUDT,
        SUMCOSR: this.SUMCOST,
        STATUS: this.STATUS,
        NUMDOCI: this.NUMDOCI
      });
    }
    console.log('DOC:' + this.docList.length);
  }

}
