import { Component, EventEmitter, ViewChild, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})

export class GridViewComponent implements OnInit {

  @Input('parentData') RESLIST: any[];
  // @Output('childData') outgoingData = new EventEmitter<string>();

  constructor() {
  }

  // Selected Doc
  selectedDoc(Table, index) {
    console.log(this.RESLIST[index].BELNR);
    // console.log(this.RESLIST.length);
  }

  ngOnInit() {
  }

}
