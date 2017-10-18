import { Component, EventEmitter, ViewChild, OnInit, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})



export class GridViewComponent implements OnInit {

  @Input() RESLIST: any[]; // Data | array lists.
  @Input() RLINK: String; // LINK | from source component.
  // @Input('parentData') RLINK: String;
  // @Input('rounte') RLINK: String;
  // @Output('childData') outgoingData = new EventEmitter<string>();

  isDesc: Boolean = false;
  column: String = 'BELNR';
  txsort: String = 'เลขที่ใบขอเบิกเงิน';
  sortby: String = 'น้อยไปมาก';

  constructor(private router: Router) {}

  // Selected Doc
  selectedDoc(doc, index) {
    console.log(this.RESLIST[index].BELNR); // TEST-ONLY
    console.log('RLINK = ' + this.RLINK); // TEST-ONLY
    this.router.navigate([this.RLINK], { queryParams: { BELNR: doc, GJAHR: this.RESLIST[index].GJAHR } });
  }

  sortByTh(property, text) {
    this.txsort = text;
    this.isDesc = !this.isDesc;
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.RESLIST.sort(function(a, b){
      if (a[property] < b[property]) {
          return -1 * direction;
      } else if ( a[property] > b[property]) {
          return 1 * direction;
      } else {
          return 0;
      }
    });

    // น้อยไปมาก มากไปน้อย
    if (this.RESLIST !== undefined || this.RESLIST.length > 1) {
      const first = this.RESLIST[0][property] ;
      const last = this.RESLIST[this.RESLIST.length - 1][property];
      // console.log('F:' + first + ' L:' + last); // TEST-ONLY
      if (first < last) {
        this.sortby = 'น้อยไปมาก';
      } else if (first > last) {
        this.sortby = 'มากไปน้อย';
      }
    } else {}
  }

  coverDate(num) {
    let date: String;
    let yearBH;
    if (num !== undefined) {
      const dateParts = num.split('-');
      yearBH = Number(dateParts[0]) + 543; // Cover Year
      dateParts[0] = yearBH.toString();
      switch (dateParts[1]) {
        case '01':
          date = dateParts[2] + ' มกราคม ' + dateParts[0];
          break;
        case '02':
          date = dateParts[2] + ' กุมภาพันธ์ ' + dateParts[0];
          break;
        case '03':
          date = dateParts[2] + ' มีนาคม ' + dateParts[0];
          break;
        case '04':
          date = dateParts[2] + ' เมษายน ' + dateParts[0];
          break;
        case '05':
          date = dateParts[2] + ' พฤษภาคม ' + dateParts[0];
          break;
        case '06':
          date = dateParts[2] + ' มิถุนายน ' + dateParts[0];
          break;
        case '07':
          date = dateParts[2] + ' กรกฎาคม ' + dateParts[0];
          break;
        case '08':
          date = dateParts[2] + ' สิงหาคม ' + dateParts[0];
          break;
        case '09':
          date = dateParts[2] + ' กันยายน ' + dateParts[0];
          break;
        case '10':
          date = dateParts[2] + ' ตุลาคม ' + dateParts[0];
          break;
        case '11':
          date = dateParts[2] + ' พฤศจิกายน ' + dateParts[0];
          break;
        case '12':
          date = dateParts[2] + ' ธันวาคม ' + dateParts[0];
          break;
        default: date = '';
          break;
      }
      return date;
    } else {
      return '';
    }
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

  coverYear(year) {
    year = Number(year) + 543;
    return year;
  }

  ngOnInit() {}

}
