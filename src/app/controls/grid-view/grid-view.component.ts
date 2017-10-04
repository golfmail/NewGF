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

  ngOnInit() {}

}
