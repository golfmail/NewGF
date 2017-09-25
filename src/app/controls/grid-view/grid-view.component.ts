import { Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input('parentData') RESLIST: any[];
  // @Output('childData') outgoingData = new EventEmitter<string>();

  // Data Doc TEST
  // TBNUMTR = '3100000051'; // เลข Doc
  // GJAHR: Number = 2017; // ปีงบประมาณ
  // BLDAT = new Date('04/09/2017'); // วันที่เอกสาร
  // BUDAT = new Date('04/10/2017'); // วันที่ผ่านรายการ
  // BLART = 'KC'; // ประเภทเอกสาร
  // HOWPAY = '1'; // วิธีชำระเงิน
  // NAME1 = 'มหาวิทยาลัยธรรมศาสตร์'; // ผู้ขาย
  // CPUDT = new Date('05/01/2017'); // วันที่บันทึก
  // SUMCOST: Number = 2000.22;
  // STATUS = 'เอกสารผ่านรายการ';
  // NUMDOCI;

  displayedColumns = ['TBNUMTR'];

  constructor() {}

  // Selected Doc
  selectedDoc(Table, index) {
    console.log(this.RESLIST[index].BELNR);
  }

  ngOnInit() {
  }

}
