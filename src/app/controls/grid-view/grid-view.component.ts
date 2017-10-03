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
        // console.log('มากไปน้อย');
          return -1 * direction;
      } else if ( a[property] > b[property]) {
        // console.log('น้อยไปมาก');
          return 1 * direction;
      } else {
          return 0;
      }
  });
    // console.log(this.RESLIST); // TEST-ONLY
  }

  ngOnInit() {}

}
