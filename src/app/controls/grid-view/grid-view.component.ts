import { Component, EventEmitter, ViewChild, OnInit, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Kb023Component } from '../../kb02/kb02-3/kb02-3.component';


@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css'],
  // providers: [Kb023Component]
})

export class GridViewComponent implements OnInit {

  @Input('parentData') RESLIST: any[];
  // @Input('rounte') RLINK: String;
  // @Output('childData') outgoingData = new EventEmitter<string>();

  public RLINK: String;

  constructor(private router: Router, private _Kb023Component: Kb023Component) {
    // console.log('r:' + route.url);
    this.RLINK = _Kb023Component.RLINK;
  }

  // Selected Doc
  selectedDoc(doc, index) {
    console.log(this.RESLIST[index].BELNR);
    console.log('RLINK = ' + this.RLINK);
    this.router.navigate([this.RLINK, doc]);
    this._Kb023Component.gotoKB021(doc);

  }

  ngOnInit() {
  }

}
