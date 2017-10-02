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

  constructor(private router: Router) {}

  // Selected Doc
  selectedDoc(doc, index) {
    console.log(this.RESLIST[index].BELNR); // TEST-ONLY
    console.log('RLINK = ' + this.RLINK); // TEST-ONLY
    this.router.navigate([this.RLINK], { queryParams: { BELNR: doc, GJAHR: this.RESLIST[index].GJAHR } });
  }

  ngOnInit() {}

}
